'use client';

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
    { image: img5, text: "Latest Project", subTitle: 'Check out our latest car service projects' },
    { image: img2, text: "Expert Mechanics", subTitle: 'Highly skilled and trained professionals at your service' },
    { image: img3, text: "Reliable & Fast", subTitle: 'Your time matters, we provide quick and reliable services' },
    { image: img4, text: "Discover More", subTitle: 'Explore our wide range of car servicing solutions' },
    { image: img6, text: "Alif Auto Care L.L.C", subTitle: 'Your trusted partner in automotive care' },
    { image: img1, text: "Affordable Price For Car Servicing", subTitle: 'Quality service at the best price for all your car needs' },
];

export default function ImageSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true, // Add fade effect for smoother transitions
        responsive: [
            {
                breakpoint: 768, // Tablet
                settings: {
                    arrows: false,
                },
            },
            {
                breakpoint: 480, // Mobile
                settings: {
                    dots: false,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <Box sx={{ width: "100%", height: "100vh", overflow: "hidden", position: "relative" }}>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <Box key={index} sx={{ position: "relative", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Image
                            src={slide.image}
                            alt={slide.text}
                            layout="fill"
                            objectFit="cover" // Ensures the image covers the entire area
                            style={{
                                borderRadius: "15px",

                            }}
                        />
                        <Box
                            sx={{
                                position: "absolute",
                                bottom: "20px",
                                backgroundColor: "rgba(0, 0, 0, 0.6)", // Softer overlay
                                padding: { xs: "20px", sm: "40px 60px" },
                                borderRadius: "10px", // Rounded corners on the overlay box
                                width: "100%",
                                maxWidth: "60%",
                                left: "50%",
                                transform: "translateX(-50%)",
                                textAlign: "center",

                            }}
                        >
                            <Typography
                                variant="h3"
                                color="white"
                                fontWeight="800"
                                gutterBottom
                                sx={{
                                    fontSize: { xs: "2rem", sm: "3rem" },
                                    textTransform: "uppercase",
                                    letterSpacing: "2px",
                                    textShadow: "2px 2px 5px rgba(0,0,0,0.8)", // Text shadow for better visibility
                                }}
                            >
                                {slide.text}
                            </Typography>
                            <Typography
                                variant="body1"
                                color="white"
                                sx={{
                                    fontSize: { xs: "1.1rem", sm: "1.3rem" },
                                    mb: 3,
                                    letterSpacing: "1px",
                                    opacity: 0.9,
                                }}
                            >
                                {slide.subTitle}
                            </Typography>
                            <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                                <Button
                                    sx={{
                                        backgroundColor: "#FF3811",
                                        color: "white",
                                        fontWeight: 700,
                                        padding: "10px 20px",
                                        borderRadius: "8px",
                                        textTransform: "uppercase",
                                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                                        "&:hover": {
                                            backgroundColor: "#d32f0f",
                                            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.4)",
                                        },
                                    }}
                                    variant="contained"
                                >
                                    Discover More
                                </Button>
                                <Button
                                    sx={{
                                        padding: "10px 20px",
                                        border: "2px solid #FF3811",
                                        color: "#FF3811",
                                        fontWeight: 700,
                                        borderRadius: "8px",
                                        textTransform: "uppercase",
                                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                                        "&:hover": {
                                            backgroundColor: "#FF3811",
                                            color: "white",
                                            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.4)",
                                        },
                                    }}
                                    variant="outlined"
                                >
                                    Latest Project
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}
