'use client';
import { Typography, Box, Grid, Button } from "@mui/material";
import Image from "next/image";
import Head from "next/head";
import aboutImg2 from "../../../public/assets/images/about_us/parts.jpg";
import aboutImg1 from "../../../public/assets/images/about_us/person.jpg";

export default function About() {
    return (
        <>
            <Head>
                <title>About Us - Car Doctor</title>
                <meta name="description" content="Learn more about Car Doctor, your trusted auto repair service." />
            </Head>

            <div className="pt-32 px-5 xl:px-0 min-h-screen container mx-auto">
                {/* Section 1 */}
                <Grid container spacing={6} alignItems="center" className="mb-10">
                    {/* Text Content */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" fontWeight={700} color="#FF3811" gutterBottom>
                            About Car Doctor
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            At Car Doctor, we specialize in providing top-quality auto repair and maintenance services.
                            Our expert team is dedicated to ensuring your vehicle runs smoothly and safely.
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            With years of experience and a passion for cars, we take pride in our transparent approach
                            and commitment to customer satisfaction.
                        </Typography>
                        <Button variant="contained" sx={{ mt: 2, backgroundColor: "#FF3811" }}>
                            Learn More
                        </Button>
                    </Grid>

                    {/* Image */}
                    <Grid item xs={12} md={6}>
                        <Box position="relative" width="100%" height={400}>
                            <Image
                                src={aboutImg1}
                                alt="Car Parts"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg shadow-lg"
                            />
                        </Box>
                    </Grid>
                </Grid>

                {/* Section 2 */}
                <Grid container spacing={6} alignItems="center" className="mt-16 flex-row-reverse mb-10">
                    {/* Image */}
                    <Grid item xs={12} md={6}>
                        <Box position="relative" width="100%" height={400}>
                            <Image
                                src={aboutImg2}
                                alt="Car Service"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg shadow-lg"
                            />
                        </Box>
                    </Grid>

                    {/* Text Content */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" fontWeight={700} color="#FF3811" gutterBottom>
                            Why Choose Us?
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            We use the latest diagnostic tools and technology to ensure accurate and efficient repairs.
                            Our certified technicians are skilled in handling all makes and models.
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            Whether it's routine maintenance or major repairs, we provide reliable and affordable services
                            to keep your vehicle in top condition.
                        </Typography>
                        <Button variant="contained" sx={{ mt: 2, backgroundColor: "#FF3811" }}>
                            Get in Touch
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}
