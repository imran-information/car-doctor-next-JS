import { Box } from "@mui/material";

import Image from "next/image";
import registerImg from "../../../public/assets/images/login/login.svg";
import RegisterForm from "./components/RegisterForm";

export default function RegisterPage() {

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
                {/* Left Image Section */}
                <Box sx={{ width: { xs: "100%", md: "45%" }, display: { xs: "none", md: "block" } }}>
                    <Image src={registerImg} alt="Register" layout="responsive" />
                </Box>

                <RegisterForm />
            </Box>
        </div>
    );
}
