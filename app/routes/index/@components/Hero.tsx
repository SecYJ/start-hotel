import { Button } from "@/components/ui/Button";
import { Link } from "@tanstack/react-router";

const Hero = () => {
    return (
        <section className="relative">
            <div className="relative">
                <picture>
                    <source
                        srcSet="https://i.imgur.com/2TDrHNx.png"
                        type="image/png"
                        media="(min-width: 1024px)"
                        sizes="100vw"
                    />
                    <source
                        srcSet="https://i.imgur.com/ela6xtC.png"
                        type="image/png"
                        sizes="100vw"
                    />
                    <img
                        src="https://i.imgur.com/ela6xtC.png"
                        className="h-dvh w-full"
                    />
                </picture>
                <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="absolute top-1/2 left-1/2 container -translate-x-1/2 -translate-y-1/2 gap-38 lg:grid lg:grid-cols-[1fr_2fr] lg:items-center">
                <div className="space-y-10">
                    <h1 className="text-primary-100 grid gap-2 text-center lg:text-left">
                        <span className="text-3xl/[33px] lg:text-[2.5rem]/12">
                            享樂酒店
                        </span>
                        <span>Enjoyment Luxury Hotel</span>
                    </h1>
                    <div className="from-primary-100 hidden h-0.5 w-full bg-gradient-to-r to-white lg:block" />
                </div>
                <div className="bg-primary-100 gradient-to-b from-primary-100 mx-auto mt-5 mb-10 h-21 w-0.5 to-white lg:hidden" />
                {/* <div className="border-custom-gray-100 bg-gray-custom-100 mx-auto grid h-[420px] w-[291px] content-center rounded-[2.5rem] border-t border-r backdrop-blur-[20px] lg:h-[678px] lg:w-auto lg:pr-50"> */}
                <div className="border-custom-gray-100 bg-gray-custom-100 mx-auto grid h-[420px] w-[clamp(291px,100vw-291px,678px)] content-center rounded-[2.5rem] border-t border-r backdrop-blur-[20px] lg:h-[678px] lg:w-auto lg:pr-50">
                    <div className="-translate-x-5 lg:-translate-x-12">
                        <p className="grid gap-2 text-5xl text-white lg:text-[100px]/30">
                            <span>高雄</span>
                            <span>豪華住宿之選</span>
                        </p>
                        <p className="text-neutral-40 mt-6 mb-10">
                            我們致力於為您提供無與倫比的奢華體驗與優質服務
                        </p>
                        <Button asChild>
                            <Link className="flex h-14 w-full items-center gap-4 bg-white p-5">
                                <span className="ml-auto">立即訂房</span>
                                <span className="h-px w-20 bg-black" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
