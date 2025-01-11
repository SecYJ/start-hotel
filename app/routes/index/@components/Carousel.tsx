import useEmblaCarousel from "embla-carousel-react";

function Carousel() {
    const [emblaRef] = useEmblaCarousel();

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div></div>
            </div>
        </div>
    );
}

export default Carousel;
