"use client";

import Image from "next/image";
import Heading from "@/components/shared/Heading";

const testimonials = [
    {
        name: "John Doe",
        review: "Excellent service! The team was very professional and completed the work on time.",
        img: "/assets/icons/person.svg",
    },
    {
        name: "Jane Smith",
        review: "Absolutely loved the experience! Highly recommend their services.",
        img: "/assets/icons/person.svg",
    },
    {
        name: "Michael Johnson",
        review: "Reliable and trustworthy. Would definitely hire them again.",
        img: "/assets/icons/person.svg",
    },
];

export default function TestimonialSection() {
    return (
        <div className="container mx-auto my-24">
            <Heading
                center
                max
                subTitle="Testimonials"
                title="What Our Clients Say"
                content="See what our happy customers have to say about our services."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 rounded-xl p-6 shadow-md transition duration-300 hover:bg-[#FF3811] hover:text-white"
                    >
                        <div className="flex items-center space-x-4">
                            <Image
                                src={testimonial.img}
                                alt={testimonial.name}
                                width={50}
                                height={50}
                                className="rounded-full"
                            />
                            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                        </div>
                        <p className="mt-4 text-gray-600 transition duration-300 hover:text-white">
                            {testimonial.review}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
