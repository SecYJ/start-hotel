import { linkOptions } from "@tanstack/react-router";

export const NAVBAR = () => {
    const isLogin = true;

    const navList = [
        linkOptions({
            to: "/rooms",
            label: "客房旅宿",
        }),
        linkOptions({
            to: isLogin ? "/profile" : "/login",
            label: isLogin ? "我的帳戶" : "會員登入",
        }),
        linkOptions({
            to: "/profile/my-booking",
            label: "立即訂房",
        }),
    ];

    return navList;
};
