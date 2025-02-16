"use client";
import Heading from "@/components/shared/Heading";
import Image from "next/image";
import imgPerson from '../../../public/assets/images/about_us/person.jpg'
import imgParts from '../../../public/assets/images/about_us/parts.jpg'
import { Button } from "@mui/material";

export default function AboutUsSection() {


    return (
        <div className="w-4/5 mx-auto my-32">
            <div className="flex gap-10">
                <div className="flex-1 relative">
                    <Image className="rounded-lg  pr-20 pe-20" src={imgPerson} alt="imgPerson" />
                    <Image className="rounded-lg absolute w-96 end-2 top-60 border-4 p-2" src={imgParts} alt="imgParts" />
                </div>
                <div className="flex-1">
                    <Heading pe={'pe-40'} subTitle={'About Us'} title={'We are qualified & of experience in this field'} content={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."} />
                    <Heading pe={'pe-40'} subTitle={' '} title={' '} content={"The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."} />
                    <Button style={{
                        backgroundColor: "#FF3811",
                        marginTop: '20px',
                        color: "white",
                        fontWeight: 700,
                        padding: '10px 20px',
                        "&:hover": {
                            backgroundColor: "#d32f0f",
                        },
                        width: '170px'
                    }} variant="contained">Get More Info</Button>
                </div>
            </div>
        </div>
    );
}