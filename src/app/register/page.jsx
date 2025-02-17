import React from "react";
import { Box, TextField, Button, Typography, Grid } from "@mui/material";
import Image from "next/image";
import registerImg from "../../../public/assets/images/login/login.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function RegisterPage() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                height: "100vh",
                alignItems: "center",
                backgroundColor: "#F5F5F8",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "80%",
                    maxWidth: "1200px",
                    height: "700px",
                    boxShadow: 3,
                    backgroundColor: "#fff",
                    borderRadius: 2,
                    padding: 4,
                }}
            >
                {/* Left Image Section */}
                <Box sx={{ width: "50%", display: { xs: "none", md: "block" } }}>
                    <Image src={registerImg} alt="Register" layout="responsive" />
                </Box>

                {/* Form Section */}
                <Box
                    sx={{
                        width: "50%",
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <Typography variant="h4" align="center" sx={{ marginBottom: 4 }}>
                        Sign Up
                    </Typography>

                    <TextField
                        fullWidth
                        label="Your Name"
                        variant="outlined"
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Your Email"
                        variant="outlined"
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Your Password"
                        variant="outlined"
                        type="password"
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Confirm Password"
                        variant="outlined"
                        type="password"
                        sx={{ marginBottom: 3 }}
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            backgroundColor: "#FF3811",
                            marginBottom: 2,
                            padding: "12px",
                            fontWeight: "bold",
                        }}
                    >
                        Sign Up
                    </Button>

                    <Typography variant="body2" align="center" sx={{ marginBottom: 2 }}>
                        Already have an account? <a href="/login">Login</a>
                    </Typography>

                    {/* Social Login */}
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item>
                            <Button variant="outlined" sx={{ minWidth: 55, minHeight: 55, borderRadius: "50%", backgroundColor: "#F5F5F8" }}>
                                <FacebookIcon sx={{ color: "#3B5998" }} />
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" sx={{ minWidth: 55, minHeight: 55, borderRadius: "50%", backgroundColor: "#F5F5F8" }}>
                                <GoogleIcon sx={{ color: "#DB4437" }} />
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" sx={{ minWidth: 55, minHeight: 55, borderRadius: "50%", backgroundColor: "#F5F5F8" }}>
                                <LinkedInIcon sx={{ color: "#0A66C2" }} />
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}
