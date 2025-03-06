"use client"
import { GitHub } from "@mui/icons-material";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, Grid } from "@mui/material";
import { toast } from "material-react-toastify";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SocialLogin() {
    const router = useRouter()
    const session = useSession()
    const handleSocialLogin = async (providerName) => {
        try {
            await signIn(providerName);
        } catch (error) {
            console.error(`Error logging in with ${providerName}:`, error);
        }
    };

    useEffect(() => {
        if (session.status == 'authenticated') {
            router.push("/")
            toast.success('Login Successfully.');
        }
    }, [session.status])

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item>
                <Button
                    onClick={() => handleSocialLogin("facebook")}
                    variant="outlined"
                    sx={{ minWidth: 55, minHeight: 55, borderRadius: "50%", borderColor: "#FF3811", backgroundColor: "#F5F5F8" }}
                >
                    <GitHub sx={{ color: "#3B5998" }} />
                </Button>
            </Grid>
            <Grid item>
                <Button
                    onClick={() => handleSocialLogin("google")}
                    variant="outlined"
                    sx={{ minWidth: 55, minHeight: 55, borderRadius: "50%", borderColor: "#FF3811", backgroundColor: "#F5F5F8" }}
                >
                    <GoogleIcon sx={{ color: "#DB4437" }} />
                </Button>
            </Grid>
            <Grid item>
                <Button
                    onClick={() => handleSocialLogin("linkedin")}
                    variant="outlined"
                    sx={{ minWidth: 55, minHeight: 55, borderRadius: "50%", borderColor: "#FF3811", backgroundColor: "#F5F5F8" }}
                >
                    <LinkedInIcon sx={{ color: "#0A66C2" }} />
                </Button>
            </Grid>
        </Grid>
    );
}
