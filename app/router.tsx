// app/router.tsx
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";
import { QueryClient } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";

export function createRouter() {
    const queryClient = new QueryClient();
    const router = createTanStackRouter({
        routeTree,
        context: { queryClient },

        defaultPreload: "intent",
        // defaultErrorComponent: DefaultCatchBoundary,
        // defaultNotFoundComponent: () => <NotFound />,
    });

    return routerWithQueryClient(router, queryClient);
}

declare module "@tanstack/react-router" {
    interface Register {
        router: ReturnType<typeof createRouter>;
    }
}
