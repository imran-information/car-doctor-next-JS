'use client';
import { Typography, Box, Grid, TextField, Button, IconButton } from "@mui/material";
import Image from "next/image";
import Head from "next/head";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import contactImg from "../../../public/assets/images/about_us/person.jpg";
import Heading from "@/components/shared/Heading";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Us - Car Doctor</title>
                <meta name="description" content="Get in touch with Car Doctor for auto repair services." />
            </Head>

            <div className="pt-24 px-5 xl:px-0 min-h-screen container mx-auto">
                <Heading center content={"Reach out to us for expert car services. Our team is ready to assist you."} max title={" Contact Us"} />

                <Grid container spacing={6} alignItems="center" className="pt-20">
                    {/* Left Side - Contact Form */}
                    <Grid item xs={12} md={6}>
                        <Box position="relative" width="100%" height={400}>
                            <Image
                                src={contactImg}
                                alt="Contact Us"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg shadow-lg"
                            />
                        </Box>

                        <Box className="mt-6 space-y-4">
                            <Box display="flex" alignItems="center" gap={2}>
                                <IconButton sx={{ backgroundColor: "#FF3811", color: "white" }}>
                                    <PhoneIcon />
                                </IconButton>
                                <Typography variant="body1">+1 234 567 890</Typography>
                            </Box>

                            <Box display="flex" alignItems="center" gap={2}>
                                <IconButton sx={{ backgroundColor: "#FF3811", color: "white" }}>
                                    <EmailIcon />
                                </IconButton>
                                <Typography variant="body1">support@cardoctor.com</Typography>
                            </Box>

                            <Box display="flex" alignItems="center" gap={2}>
                                <IconButton sx={{ backgroundColor: "#FF3811", color: "white" }}>
                                    <LocationOnIcon />
                                </IconButton>
                                <Typography variant="body1">123 Car Doctor St, Auto City, USA</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    {/* Right Side - Image & Contact Info */}
                    <Grid item xs={12} md={6}>
                        <Box className="p-6 rounded-lg shadow-lg bg-white">
                            <Typography variant="h5" fontWeight={600} gutterBottom>
                                Send Us a Message
                            </Typography>
                            <form>
                                <TextField
                                    label="Your Name"
                                    fullWidth
                                    margin="normal"
                                    required
                                    variant="outlined"
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            "&.Mui-focused fieldset": {
                                                borderColor: "#FF3811",
                                            },
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "#000",
                                        },
                                        "& .MuiInputLabel-root.Mui-focused": {
                                            color: "#FF3811",
                                        },
                                    }}
                                />
                                <TextField
                                    label="Email Address"
                                    fullWidth
                                    margin="normal"
                                    required
                                    type="email"
                                    variant="outlined"
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            "&.Mui-focused fieldset": {
                                                borderColor: "#FF3811",
                                            },
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "#000",
                                        },
                                        "& .MuiInputLabel-root.Mui-focused": {
                                            color: "#FF3811",
                                        },
                                    }}
                                />
                                <TextField
                                    label="Message"
                                    fullWidth
                                    margin="normal"
                                    required
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            "&.Mui-focused fieldset": {
                                                borderColor: "#FF3811",
                                            },
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "#000",
                                        },
                                        "& .MuiInputLabel-root.Mui-focused": {
                                            color: "#FF3811",
                                        },
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    sx={{ mt: 2, backgroundColor: "#FF3811" }}
                                    fullWidth
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </form>



                        </Box>
                    </Grid>

                </Grid>
            </div>
        </>
    );
}
