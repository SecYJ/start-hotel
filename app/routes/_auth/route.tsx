import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
    component: AuthLayout,
});

function AuthLayout() {
    return (
        <div className="bg-neutral-bg grid h-[calc(100vh-104px)] place-content-center lg:grid-cols-2 lg:place-content-stretch">
            <img
                src="/auth-banner.jpeg"
                className="hidden h-full object-cover lg:block"
                alt="Hotel banner"
            />
            <div className="grid h-full content-center">
                <Outlet />
            </div>
        </div>
    );
}
