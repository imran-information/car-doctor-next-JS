import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

export default function ServicesCard({ service }) {
    const { title, img, price, _id } = service;

    return (
        <Link href={`/services/${_id}`} passHref>
            <Card
                sx={{
                    maxWidth: 600,
                    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: 6,
                        cursor: "pointer",
                    },
                }}
            >
                <CardMedia
                    component="img"
                    alt={title}
                    image={img}
                    sx={{
                        height: 250,
                        width: "100%",
                        objectFit: "cover",
                        padding: "15px",
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="h6" sx={{ color: "#FF3811" }}>
                        Price: ${price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button sx={{ fontWeight: 700 }} size="medium">
                        Learn More <ArrowForwardIcon sx={{ ml: 1 }} />
                    </Button>
                </CardActions>
            </Card>
        </Link>
    );
}