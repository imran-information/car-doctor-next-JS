import Heading from "@/components/shared/Heading";
import Image from "next/image";

export default function CoreFeatures() {
    const cards = [
        { title: "Expert Team", img: "/assets/icons/group.svg" },
        { title: "24/7 Support", img: "/assets/icons/person.svg" },
        { title: "Best Equipment", img: "/assets/icons/Wrench.svg" },
        { title: "100% Guaranty", img: "/assets/icons/check.svg" },
        { title: "Timely Delivery", img: "/assets/icons/deliveryt.svg" },
    ];

    return (
        <div className="container mx-auto my-24">
            <Heading
                center
                max
                subTitle={"Core Features"}
                title={"Why Choose Us"}
                content={`The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="h-[156px] border border-gray-300 rounded-xl flex flex-col items-center justify-center p-4 shadow-md 
                        transition duration-300 hover:bg-[#FF3811] group"
                    >
                        {/* Image wrapper with filter for hover effect */}
                        <div className="transition duration-300 group-hover:brightness-0 group-hover:invert">
                            <Image src={card.img} alt={card.title} width={48} height={48} />
                        </div>
                        {/* Text color change on hover */}
                        <h3 className="text-lg font-semibold mt-2 transition duration-300 group-hover:text-white">
                            {card.title}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
