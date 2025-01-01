import { NAVBAR } from "@/constants/navigation";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";

const MobileNavbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button type="button" onClick={() => setOpen(!open)}>
                <Menu />
            </button>
            {open &&
                createPortal(
                    <div className="bg-neutral-bg fixed inset-0 content-center">
                        <button
                            type="button"
                            className="absolute top-7 right-7"
                            onClick={() => setOpen(false)}
                        >
                            <X className="text-white" />
                        </button>
                        <div className="container grid gap-8 text-center">
                            {NAVBAR().map((item) => (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    className="hover:bg-primary-100 rounded-lg py-4 text-white transition-colors duration-200"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>,
                    document.body,
                )}
        </>
    );
};

export default MobileNavbar;
