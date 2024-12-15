import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected")({
    component: ProtectedLayout,
});

function ProtectedLayout() {
    return <div>Hello "/_protected"!</div>;
}
