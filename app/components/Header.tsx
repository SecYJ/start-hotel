// transparent on (home,)
// back bg (preview id, checkout, profile, mybooking)
// no navigation menu on (login, register)

import { PropsWithChildren } from "react";

// NOTE: temporary only
const Header = ({ children }: PropsWithChildren) => {
    return (
        <header className="bg-neutral-bg sticky top-0 px-3 py-4">
            <div className="container flex justify-between">
                <img src="/logo.png" alt="享樂酒店 Logo" />
                {children}
            </div>
        </header>
    );
};

export default Header;
