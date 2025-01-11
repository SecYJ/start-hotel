const data = [
    {
        img: "https://i.imgur.com/yCqa27t.png",
        title: "秋季旅遊，豪華享受方案",
        desc: "秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。",
    },
    {
        img: "https://i.imgur.com/CB3ErOI.png",
        title: "輕鬆住房專案",
        desc: "我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。",
    },
    {
        img: "https://i.imgur.com/Hez2D5P.png",
        title: "耶誕快樂，住房送禮",
        desc: "聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！",
    },
];

const LatestNews = () => {
    return (
        <section className="bg-primary-10">
            <div className="container py-20">
                <div className="mb-10 space-y-6">
                    <h2 className="text-primary-100 grid gap-1 text-3xl lg:text-5xl">
                        <span>最新</span>
                        <span>消息</span>
                    </h2>
                    <div className="from-primary-100 h-0.5 w-35 bg-gradient-to-r to-white" />
                </div>
                <ul className="space-y-10">
                    {data.map((item) => (
                        <li
                            key={item.img}
                            className="grid lg:grid-cols-[4fr_8fr] lg:items-center lg:gap-6"
                        >
                            <img
                                src={item.img}
                                className="w-full object-cover"
                                alt={item.title}
                                loading="lazy"
                            />
                            <div className="mt-6 space-y-2">
                                <h3 className="text-3xl">{item.title}</h3>
                                <p className="text-neutral-80 text-sm font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default LatestNews;
