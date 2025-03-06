"use client";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";
import { Box, TextField, Button, Typography, Grid, IconButton, InputAdornment } from "@mui/material";
import { registerUser } from "@/app/actions/auth/registerUser";
import SocialLogin from "@/app/login/components/SocialLogin";
import { toast } from "material-react-toastify";

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword((prev) => !prev);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value.trim();
        const confirmPassword = form.confirmPassword.value.trim();

        // Validate required fields
        if (!name || !email || !password || !confirmPassword) {
            toast.error("All fields are required!");
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Invalid email format!");
            return;
        }

        // Validate password length
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long!");
            return;
        }

        // Validate password match
        if (password !== confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        // If all validations pass, call registerUser
        await registerUser({ name, email, password });
    };



    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                width: { xs: "100%", md: "50%" },
                padding: { xs: "20px", sm: "30px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <Typography variant="h3" fontWeight={700} align="center" sx={{ marginBottom: 4 }} color="#FF3811">
                Sign Up
            </Typography>
            <TextField
                fullWidth
                name="name"
                label="Your Name"
                variant="outlined"
                required
                sx={{
                    "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": { borderColor: "#FF3811" },
                    },
                    "& .MuiInputLabel-root": { color: "#000" },
                    "& .MuiInputLabel-root.Mui-focused": { color: "#FF3811" },
                    marginBottom: 2,
                }}
            />
            <TextField
                fullWidth
                name="email"
                label="Your Email"
                variant="outlined"
                required
                sx={{
                    "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": { borderColor: "#FF3811" },
                    },
                    "& .MuiInputLabel-root": { color: "#000" },
                    "& .MuiInputLabel-root.Mui-focused": { color: "#FF3811" },
                    marginBottom: 2,
                }}
            />
            <TextField
                fullWidth
                name="password"
                label="Your Password"
                variant="outlined"
                required
                type={showPassword ? "text" : "password"}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": { borderColor: "#FF3811" },
                    },
                    "& .MuiInputLabel-root": { color: "#000" },
                    "& .MuiInputLabel-root.Mui-focused": { color: "#FF3811" },
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
            <TextField
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                variant="outlined"
                required
                type={showConfirmPassword ? "text" : "password"}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": { borderColor: "#FF3811" },
                    },
                    "& .MuiInputLabel-root": { color: "#000" },
                    "& .MuiInputLabel-root.Mui-focused": { color: "#FF3811" },
                    marginBottom: 3,
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={toggleConfirmPasswordVisibility} edge="end">
                                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />

            <Button
                fullWidth
                type="submit"
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
                Already have an account? <Link className="text-[#FF3811] font-bold" href="/login">Login</Link>
            </Typography>

            <Typography variant="body2" align="center" sx={{ marginBottom: 2 }}>
                Or Sign Up with
            </Typography>

            <SocialLogin />
        </Box>
    );
};

export default RegisterForm;
