"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../../public/assets/images/banner/1.jpg';
import img2 from '../../../public/assets/images/banner/2.jpg';
import img3 from '../../../public/assets/images/banner/3.jpg';
import img4 from '../../../public/assets/images/banner/4.jpg';
import img5 from '../../../public/assets/images/banner/5.jpg';
import img6 from '../../../public/assets/images/banner/6.jpg';

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const slides = [
    { image: img1, text: "Affordable Price For Car Servicing", subTitle: 'There are many variations of passages of  available, but the majority have suffered alteration in some form' },
    { image: img2, text: "Variations Of Passages Of Available", subTitle: 'There are many variations of passages of  available, but the majority have suffered alteration in some form' },
    { image: img3, text: "Majority Have Suffered Alteration", subTitle: 'There are many variations of passages of  available, but the majority have suffered alteration in some form' },
    { image: img4, text: "Discover More", subTitle: 'There are many variations of passages of  available, but the majority have suffered alteration in some form' },
    { image: img5, text: "Latest Project", subTitle: 'There are many variations of passages of  available, but the majority have suffered alteration in some form' },
    { image: img6, text: "Alif Auto Care L.L.C", subTitle: 'There are many variations of passages of  available, but the majority have suffered alteration in some form' },
];

export default function ImageSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,

    };

    return (
        <Box sx={{ width: "80%", margin: "auto", mt: 15 }}>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <Box key={index} sx={{ position: "relative" }}>
                        <Image
                            src={slide.image}
                            alt={slide.text}
                            style={{ borderRadius: "10px", width: "100%", height: "700px", objectFit: "cover" }}
                        />
                        <Box
                            sx={{
                                position: "absolute",
                                bottom: 0,
                                backgroundColor: "rgba(0, 0, 0, 0.1)",
                                padding: "20px 100px", // Increased padding
                                borderRadius: "5px",
                                width: "50%", // Ensures the box fits the content
                                height: '100%'
                            }}
                        >
                            <Typography variant="h1" color="white" fontWeight="bold" gutterBottom>
                                {slide.text}
                            </Typography>
                            {/* Example of adding a second line of text.  Customize as needed: */}
                            <Typography variant="h6" color="white">
                                {slide.subTitle}
                            </Typography>
                            <Button style={{
                                backgroundColor: "#FF3811",
                                marginTop:'20px',
                                color: "white",
                                fontWeight: 700,
                                padding: '10px 20px',
                                "&:hover": {
                                    backgroundColor: "#d32f0f",
                                },
                                width: '170px'
                            }} variant="contained">Discover More</Button>
                            <Button style={{
                                marginLeft: '10px',
                                marginTop:'20px',
                                color: "white",
                                fontWeight: 700,
                                padding: '10px 18px',
                                border: '2px solid',
                                width: '170px'
                            }} variant="outlined">Latest Project</Button>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}