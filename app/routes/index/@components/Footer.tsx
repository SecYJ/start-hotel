import Facebook from "@/assets/icons/facebook.svg?react";
import Instagram from "@/assets/icons/instagram.svg?react";
import Whatsapp from "@/assets/icons/whatsapp.svg?react";

const CONTACT_LIST = [
    {
        title: "TEL",
        text: "+886-7-1234567",
    },
    {
        title: "FAX",
        text: "+886-7-1234567",
    },
    {
        title: "MAIL",
        text: "elh@hexschool.com",
    },
    {
        title: "WEB",
        text: "www.elhhexschool.com.tw",
    },
];

const Footer = () => {
    return (
        <footer className="bg-neutral-bg py-20 text-white">
            <div className="container space-y-20">
                <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
                    <div className="space-y-10">
                        <img
                            src="https://i.imgur.com/ctt3hEv.png"
                            loading="lazy"
                            alt="Hotel"
                        />
                        <div className="flex gap-4">
                            <div className="grid size-10 place-items-center rounded-full border border-white">
                                <Facebook className="size-6" />
                            </div>
                            <div className="grid size-10 place-items-center rounded-full border border-white">
                                <Instagram className="size-6" />
                            </div>
                            <div className="grid size-10 place-items-center rounded-full border border-white">
                                <Whatsapp className="size-6" />
                            </div>
                        </div>
                    </div>
                    {/* NOTE: loop the contact item */}
                    <div className="grid-cols-2 gap-x-20 space-y-4 gap-y-10 lg:grid">
                        {CONTACT_LIST.map((item) => (
                            <ContactItem key={item.title} {...item} />
                        ))}
                    </div>
                </div>

                {/* NOTE: HERE */}
                <div className="justify-between space-y-4 font-normal lg:flex">
                    <p>806023 台灣高雄市新興區六角路123號</p>
                    <p>© 享樂酒店 2023 All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const ContactItem = ({ title, text }: { title: string; text: string }) => {
    return (
        <div className="space-y-2">
            <p>{title}</p>
            <p className="text-neutral-40 text-sm lg:text-base">{text}</p>
        </div>
    );
};

export default Footer;
