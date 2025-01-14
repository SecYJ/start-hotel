import { createFileRoute } from "@tanstack/react-router";
import Hero from "./@components/Hero";
import LatestNews from "./@components/LatestNews";
import About from "./@components/About";
import Footer from "./@components/Footer";
import MostPopular from "./@components/MostPopular";

export const Route = createFileRoute("/")({
    component: HomePage,
});

function HomePage() {
    return (
        <>
            <Hero />
            <LatestNews />
            <About />
            <MostPopular />
            <Footer />
        </>
    );
}
