// app/routes/__root.tsx
import Layout from "@/components/layout";
import "@/index.css";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
    Outlet,
    ScrollRestoration,
    createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Meta, Scripts } from "@tanstack/start";
import type { ReactNode } from "react";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
    {
        head: () => ({
            meta: [
                {
                    charSet: "utf-8",
                },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    title: "TanStack Start Starter",
                },
            ],
        }),
        component: RootComponent,
    },
);

function RootComponent() {
    return (
        <RootDocument>
            <Outlet />
        </RootDocument>
    );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html>
            <head>
                <Meta />
            </head>
            <body>
                <Layout>{children}</Layout>
                <ScrollRestoration />
                <Scripts />
                <TanStackRouterDevtools />
                <ReactQueryDevtools />
            </body>
        </html>
    );
}
