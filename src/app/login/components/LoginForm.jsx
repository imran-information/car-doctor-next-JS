"use client"
import { Box, Button, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { signIn } from "next-auth/react"
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "material-react-toastify";
import SocialLogin from "./SocialLogin";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        toast.success('Submitting....');
        try {
            const res = await signIn("credentials", { email, password, callbackUrl: '/', redirect: false })

            if (res.ok) {
                toast.success('Login Successfully.');
                router.push("/")

            } else {
                console.log(error);
                toast.error('AUthentication Failed');
            }

        } catch (error) {
            console.log(error);
            toast.error('AUthentication Failed');
        }
    }

    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                <Box
                    sx={{
                        width: "100%",
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
                        name="email"
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
                        name="password"
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
                        type="submit"
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
                    <SocialLogin />
                </Box>
            </form>
        </Box>
    );
}
