// transparent on (home,)
// back bg (preview id, checkout, profile, mybooking)
// no navigation menu on (login, register)

import { PropsWithChildren } from "react";

// NOTE: temporary only
const Header = ({ children }: PropsWithChildren) => {
    return (
        <header className="bg-neutral-bg sticky top-0 flex justify-between px-3 py-4">
            <img src="/logo.png" alt="享樂酒店 Logo" />
            {children}
        </header>
    );
};

export default Header;
