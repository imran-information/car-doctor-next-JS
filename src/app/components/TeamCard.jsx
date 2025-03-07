import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

export default function TeamCard({ team }) {
    const { _id, name, expertise, facebook, twitter, instagram, linkedin, image } = team;

    return (

        <Card sx={{
            maxWidth: 600,
            transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
                cursor: "pointer",
            },
        }} className="  rounded-xl border border-gray-200 shadow-md  "
        >
            {/* Image Container */}

            <CardMedia
                component="img"
                alt={name}
                image={image}
                className="h-48 w-48 object-cover  transition-transform duration-300 hover:scale-110"
            />


            {/* Content */}
            <CardContent className="text-center space-y-2">
                {/* Name & Expertise */}
                <Typography variant="h5" className="font-semibold text-gray-800">
                    {name}
                </Typography>
                <Typography variant="body1" className="text-gray-600">
                    {expertise}
                </Typography>

                {/* Social Links */}
                <div className="flex justify-center space-x-3 mt-2">
                    {facebook && (
                        <a href={facebook} target="_blank" rel="noopener noreferrer">
                            <Facebook className="text-blue-600 hover:text-blue-800 transition" />
                        </a>
                    )}
                    {twitter && (
                        <a href={twitter} target="_blank" rel="noopener noreferrer">
                            <Twitter className="text-blue-400 hover:text-blue-600 transition" />
                        </a>
                    )}
                    {instagram && (
                        <a href={instagram} target="_blank" rel="noopener noreferrer">
                            <Instagram className="text-pink-500 hover:text-pink-700 transition" />
                        </a>
                    )}
                    {linkedin && (
                        <a href={linkedin} target="_blank" rel="noopener noreferrer">
                            <LinkedIn className="text-blue-700 hover:text-blue-900 transition" />
                        </a>
                    )}
                </div>
            </CardContent>
        </Card>

    );
}
