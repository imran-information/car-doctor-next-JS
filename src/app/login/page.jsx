"use client";

import React, { useState } from "react";
import { Box, TextField, Button, Typography, Grid, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Image from "next/image";
import loginImg from "../../../public/assets/images/login/login.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

    return (
        <div className="container mx-auto pt-32 px-5 xl:px-0 min-h-screen">
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    boxShadow: 3,
                    backgroundColor: "#fff",
                    borderRadius: 2,
                    padding: { xs: 2, sm: 4 },
                    flexDirection: { xs: "column", md: "row" },
                }}
            >
                {/* Form Section */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "50%" },
                        padding: { xs: "20px", sm: "30px" },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <Typography variant="h3" fontWeight={700} align="center" sx={{ marginBottom: 4 }} color="#FF3811">
                        Login Now
                    </Typography>
                    <TextField
                        fullWidth
                        label="Your Email"
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
                            marginBottom: 2,
                        }}
                    />
                    <TextField
                        fullWidth
                        label="Your Password"
                        variant="outlined"
                        type={showPassword ? "text" : "password"}
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
                            marginBottom: 2,
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={togglePasswordVisibility} edge="end">
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
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
                        Sign In
                    </Button>

                    <Typography variant="body2" align="center" sx={{ marginBottom: 2 }}>
                        Don't have an account? <Link className="text-[#FF3811] font-bold" href="/register">Sign Up</Link>
                    </Typography>

                    <Typography variant="body2" align="center" sx={{ marginBottom: 2 }}>
                        Or Sign In with
                    </Typography>

                    {/* Social Login */}
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item>
                            <Button variant="outlined" sx={{ minWidth: 55, minHeight: 55, borderRadius: "50%", borderColor: "#FF3811", backgroundColor: "#F5F5F8" }}>
                                <FacebookIcon sx={{ color: "#3B5998" }} />
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" sx={{ minWidth: 55, minHeight: 55, borderRadius: "50%", borderColor: "#FF3811", backgroundColor: "#F5F5F8" }}>
                                <GoogleIcon sx={{ color: "#DB4437" }} />
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" sx={{ minWidth: 55, minHeight: 55, borderRadius: "50%", borderColor: "#FF3811", backgroundColor: "#F5F5F8" }}>
                                <LinkedInIcon sx={{ color: "#0A66C2" }} />
                            </Button>
                        </Grid>
                    </Grid>
                </Box>

                {/* Right Image Section */}
                <Box sx={{ width: { xs: "100%", md: "45%" }, display: { xs: "none", md: "block" } }}>
                    <Image src={loginImg} alt="Login" layout="responsive" />
                </Box>
            </Box>
        </div>
    );
};

export default LoginPage;