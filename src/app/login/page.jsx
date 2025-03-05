import { Box } from "@mui/material";
import Image from "next/image";
import loginImg from "../../../public/assets/images/login/login.svg"; 
import LoginForm from "./components/LoginForm";

const LoginPage = () => {
    return (
        <div className="container mx-auto py-32 px-5 xl:px-0 min-h-screen flex items-center justify-center">
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center", // Center items vertically
                    width: "100%", 
                    boxShadow: 3,
                    backgroundColor: "#fff",
                    borderRadius: 2,
                    padding: { xs: 2, sm: 4 },
                    flexDirection: { xs: "column", md: "row" }, // Column on small, row on large
                    gap: 3, // Adds spacing between sections
                }}
            >
                {/* Left - Login Form */}
                <Box  sx={{ flex: 1, display: "flex", justifyContent: "center",  }}>
                    <LoginForm />
                </Box>

                {/* Right - Image Section */}
                <Box sx={{ flex: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
                    <Image src={loginImg} alt="Login" width={500} height={500} />
                </Box>
            </Box>
        </div>
    );
};

export default LoginPage;
