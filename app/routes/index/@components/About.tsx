const About = () => {
    return (
        <section className="bg-neutral-bg py-20">
            <picture>
                <source media="(max-width: 1023px)" srcSet="https://i.imgur.com/ZIwA1Za.png" />
                <source media="(min-width: 1024px)" srcSet="https://i.imgur.com/d0Sph7Q.png" />
                <img
                    src="https://i.imgur.com/d0Sph7Q.png"
                    className="w-full"
                    loading="lazy"
                    alt="about"
                />
            </picture>
        </section>
    );
};

export default About;
