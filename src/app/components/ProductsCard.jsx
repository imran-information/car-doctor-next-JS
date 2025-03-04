import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

export default function ProductsCard({ product }) {
    const { title, img, price, _id, rating, productName } = product;

    return (
        <Link href={`/products/${_id}`} passHref>
            <Card className='p-3'
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
                <div className="bg-[#F3F3F3] rounded-md">
                    <CardMedia className='mx-auto'
                        component="img"
                        alt={title}
                        image={img}
                        sx={{
                            height: '200px',
                            width: "50%",
                            objectFit: "cover",
                            padding: "15px",
                        }}
                    />
                </div>
                <CardContent className='text-center'>
                    <Typography gutterBottom >
                        {"⭐".repeat(rating)}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {productName}
                    </Typography>
                    <Typography variant="h6" sx={{ color: "#FF3811" }}>
                        ${price}
                    </Typography>
                </CardContent>

            </Card>
        </Link>
    );
}