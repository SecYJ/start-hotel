import { createFileRoute } from "@tanstack/react-router";
import Hero from "./@components/Hero";
import LatestNews from "./@components/LatestNews";
import About from "./@components/About";

export const Route = createFileRoute("/")({
    component: HomePage,
});

function HomePage() {
    return (
        <>
            <Hero />
            <LatestNews />
            <About />
        </>
    );
}
