// transparent on (home,)
// back bg (preview id, checkout, profile, mybooking)
// no navigation menu on (login, register)

import logo from "@/assets/images/logo.png";
import { NAVBAR } from "@/constants/navigation";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogOverlay,
    DialogTrigger,
} from "./ui/Dialog";
import MobileNavbar from "./MobileNavbar";

// NOTE: temporary only
const Header = () => {
    return (
        <header className="bg-neutral-bg sticky top-0 px-3 py-4">
            <div className="container flex justify-between">
                <img src={logo} alt="享樂酒店 Logo" />
                {/* <img
                    src="https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b"
                    alt="享樂酒店 Logo"
                /> */}

                <MobileNavbar />
            </div>
        </header>
    );
};

export default Header;
