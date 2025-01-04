import logo from "@/assets/images/logo.png";
import { NAVBAR } from "@/constants/navigation";
import { Link } from "@tanstack/react-router";
import MobileNavbar from "./MobileNavbar";
import { cn } from "@/lib/utils";

// NOTE: temporary only
const Header = () => {
    return (
        <header className="bg-neutral-bg fixed top-0 right-0 left-0 z-10 px-3 py-4">
            <div className="container flex items-center justify-between">
                <img src={logo} alt="享樂酒店 Logo" />

                <div className="hidden gap-12 lg:flex">
                    {NAVBAR().map((nav) => (
                        <Link
                            key={nav.to}
                            to={nav.to}
                            className={cn(
                                "rounded-lg py-4 text-white",
                                nav.to === "/profile/my-booking" &&
                                    "bg-primary-100 rounded-lg px-8 py-4",
                            )}
                        >
                            {nav.label}
                        </Link>
                    ))}
                </div>
                <div className="lg:hidden">
                    <MobileNavbar />
                </div>
            </div>
        </header>
    );
};

export default Header;
