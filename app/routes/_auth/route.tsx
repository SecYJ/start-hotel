import {
    createFileRoute,
    linkOptions,
    Outlet,
    useLocation,
} from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
    beforeLoad() {
        if (localStorage.getItem("token")) {
            return linkOptions({ to: "/" });
        }
    },
    component: AuthLayout,
});

function AuthLayout() {
    const location = useLocation();
    const isLoginPage = location.pathname === linkOptions({ to: "/login" }).to;

    return (
        <div className="bg-neutral-bg">
            <div className="container grid h-[calc(100vh-104px)] place-content-center lg:grid-cols-2 lg:place-content-stretch">
                <img
                    src="/auth-banner.jpeg"
                    className="hidden h-full object-cover lg:block"
                    alt="Hotel banner"
                />
                <div className="grid h-full content-center">
                    <div className="mx-auto w-full max-w-[416px]">
                        <h1 className="grid space-y-2 font-bold">
                            <span className="text-primary-100 text-sm">
                                享樂酒店，誠摯歡迎
                            </span>
                            <span className="text-3xl text-white">
                                {isLoginPage ? "立即開始旅程" : "立即註冊"}
                            </span>
                        </h1>
                        <div className="mt-10">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
