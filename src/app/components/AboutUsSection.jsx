"use client";
import Heading from "@/components/shared/Heading";
import Image from "next/image";
import imgPerson from '../../../public/assets/images/about_us/person.jpg'
import imgParts from '../../../public/assets/images/about_us/parts.jpg'
import { Button } from "@mui/material";

export default function AboutUsSection() {
    return (
        <div className="container mx-auto my-24   ">
            <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center  ">
                {/* Left Section: Image */}
                <div className="relative flex-1 ">
                    <Image
                        className="rounded-lg shadow-lg lg:w-11/12"
                        src={imgPerson}
                        alt="imgPerson"
                        layout="intrinsic"
                    />
                    <Image
                        className="absolute rounded-lg w-40  lg:w-56 xl:w-96 md:top-48 md:-right-3 xl:top-64 xl:-right-4  hidden md:block border-4 border-white shadow-lg"
                        src={imgParts}
                        alt="imgParts"
                    />
                </div>

                {/* Right Section: Text Content */}
                <div className="flex-1  text-center md:text-left">
                    <Heading
                        subTitle="About Us"
                        title="We are qualified & experienced in this field"
                        content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                    />
                    <Heading
                        maxNone={false}
                        center={false}
                        subTitle=""
                        title=""
                        content="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                    />
                    <div className="text-center md:text-left">
                        <Button
                            sx={{
                                backgroundColor: "#FF3811",
                                marginTop: "20px",
                                color: "white",
                                fontWeight: 700,
                                padding: "12px 30px",
                                borderRadius: "50px",
                                "&:hover": {
                                    backgroundColor: "#d32f0f",
                                },
                                width: "fit-content",
                                marginInline: "auto",
                            }}
                            variant="contained"
                        >
                            Get More Info
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
