import React from "react";
import { Box, TextField, Button, Typography, Grid } from "@mui/material";
import Image from "next/image";
import loginImg from "../../../public/assets/images/login/login.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const LoginPage = () => {
    return (
        <div  >
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
                        <Image src={loginImg} alt="Login" layout="responsive" />
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
                            Login
                        </Typography>

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
        </div>
    );
};

export default LoginPage;
