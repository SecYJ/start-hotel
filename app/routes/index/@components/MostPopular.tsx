import useEmblaCarousel from "embla-carousel-react";
import { MOST_POPULAR_LIST } from "../@constants";
import Autoplay from "embla-carousel-autoplay";

const MostPopular = () => {
    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            // slides: MOST_POPULAR_LIST.length,
        },
        [Autoplay()],
    );

    return (
        <section className="bg-primary-10 py-20 lg:py-30">
            <div className="container space-y-10 lg:space-y-20">
                <div className="flex items-center gap-10">
                    <h2 className="text-primary-100 grid gap-1 text-3xl">
                        <span>佳餚</span>
                        <span>美饌</span>
                    </h2>
                    <div className="from-primary-100 h-0.5 w-50 bg-gradient-to-r to-white" />
                </div>

                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-6">
                        {MOST_POPULAR_LIST.map((item) => (
                            <div
                                key={item.title}
                                className="relative w-3/4 min-w-0 shrink-0 last:mr-6 lg:w-[calc(33%-24px)]"
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="h-120 w-full rounded-lg object-cover"
                                />
                                <div className="to-neutral-bg absolute right-0 bottom-0 left-0 bg-gradient-to-b from-black/0 p-4 backdrop-blur-[1.25rem]">
                                    <div className="[&_p]:text-neutral-40 grid grid-cols-[1fr_auto_auto] items-center gap-2 [&_p]:text-sm">
                                        <strong className="text-2xl text-white">
                                            {item.title}
                                        </strong>
                                        <p>{item.date.day}</p>
                                        <p>{item.date.time}</p>
                                    </div>
                                    <p className="mt-6 text-sm font-normal text-white">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MostPopular;
