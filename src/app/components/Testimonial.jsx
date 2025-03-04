"use client";

import { useState } from "react";
import Image from "next/image";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Heading from "@/components/shared/Heading";

const testimonials = [
    {
        name: "John Doe",
        review: "Excellent car service! The team was highly professional and attentive to every detail. They understood my needs perfectly and provided outstanding service. My car was thoroughly checked, and everything was completed on time. I would highly recommend this service to anyone looking for top-quality car maintenance.",
        img: "/assets/icons/person.svg",
        category: "Car Owner"
    },
    {
        name: "Jane Smith",
        review: "Absolutely loved the experience! From the initial inspection to the final service, the team provided exceptional support and guidance. Their expertise and attention to detail were impressive. The end result was a perfectly running car. A truly seamless experience that exceeded my expectations!",
        img: "/assets/icons/person.svg",
        category: "Driver"
    },
    {
        name: "Michael Johnson",
        review: "Reliable and trustworthy. The professionalism and dedication of the team were evident from the start. They went above and beyond to ensure that my car was in top shape. The service was quick, and the results were remarkable. Would definitely hire them again for all my car service needs.",
        img: "/assets/icons/person.svg",
        category: "Car Enthusiast"
    },
    {
        name: "Alice Brown",
        review: "Great customer support! The team was incredibly responsive and always willing to assist. They patiently answered all my questions and provided insightful recommendations for maintaining my car. Their commitment to customer satisfaction was outstanding. I'll definitely be back for future services.",
        img: "/assets/icons/person.svg",
        category: "Regular Client"
    },
    {
        name: "Robert Wilson",
        review: "Fast and efficient service. The entire process was smooth and hassle-free. The team demonstrated a deep understanding of car mechanics and delivered exactly what I needed. My car runs better than ever, and I’m extremely happy with the results. Highly recommend their services.",
        img: "/assets/icons/person.svg",
        category: "Business Driver"
    },
];


export default function TestimonialSection() {
    const [startIndex, setStartIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const itemsPerPage = 3;

    const nextTestimonial = () => {
        if (isTransitioning) return; // Prevent rapid clicking
        setIsTransitioning(true);

        setStartIndex((prevIndex) => {
            const nextIndex =
                prevIndex + itemsPerPage >= testimonials.length ? 0 : prevIndex + 1;
            return nextIndex;
        });

        setTimeout(() => {
            setIsTransitioning(false);
        }, 600); // Adjust the timeout to match the transition duration
    };

    const prevTestimonial = () => {
        if (isTransitioning) return; // Prevent rapid clicking
        setIsTransitioning(true);

        setStartIndex((prevIndex) => {
            const prevIndexVal =
                prevIndex === 0 ? testimonials.length - itemsPerPage : prevIndex - 1;
            return prevIndexVal;
        });

        setTimeout(() => {
            setIsTransitioning(false);
        }, 600); // Adjust the timeout to match the transition duration
    };

    return (
        <div className="container mx-auto my-24">
            <Heading
                center
                max
                subTitle="Testimonials"
                title="What Our Clients Say"
                content="See what our happy customers have to say about our services."
            />

            {/* Testimonial Cards */}
            <div
                className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 transition-all duration-700 ease-out transform ${isTransitioning ? "opacity-0" : "opacity-100"
                    }`}
                style={{
                    transform: isTransitioning ? "translateX(-20px)" : "translateX(0)",
                }}
            >
                {testimonials.slice(startIndex, startIndex + itemsPerPage).map((testimonial, index) => (
                    <div
                        key={index}
                        className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-lg transition-all duration-700 ease-out transform"
                    >
                        {/* User Info */}
                        <div className="flex items-center space-x-4">
                            <Image
                                src={testimonial.img}
                                alt={testimonial.name}
                                width={60}
                                height={60}
                                className="rounded-full"
                            />
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                                <p className="text-lg text-gray-600">{testimonial.category}</p>
                            </div>
                        </div>

                        {/* Testimonial Text */}
                        <p className="mt-6 text-gray-600 text-lg leading-7">{testimonial.review}</p>

                        {/* Star Ratings */}
                        <div className="flex space-x-1 mt-6">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="text-[#FF912C] text-xl" />
                            ))}
                        </div>

                        {/* Quote Icon */}
                        <div className="absolute top-6 right-6 w-14 h-14 bg-red-100 flex items-center justify-center rounded-full">
                            <Image src="/assets/icons/quote.svg" alt="Quote" width={28} height={28} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons (Centered) */}
            <div className="flex justify-center space-x-6 mt-8">
                <button
                    onClick={prevTestimonial}
                    className="w-14 h-14 bg-gray-300 flex items-center justify-center rounded-full hover:bg-gray-400 transition"
                >
                    <FaChevronLeft className="text-gray-700 text-2xl" />
                </button>

                <button
                    onClick={nextTestimonial}
                    className="w-14 h-14 bg-[#FF3811] flex items-center justify-center rounded-full hover:bg-[#d9300d] transition"
                >
                    <FaChevronRight className="text-white text-2xl" />
                </button>
            </div>
        </div>
    );
}
