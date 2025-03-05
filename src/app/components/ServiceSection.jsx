import Heading from '@/components/shared/Heading';
import React from 'react';
import ServicesCard from './ServicesCard';
import dbConnect, { collectionName } from '@/lib/dbConnect';
import { Button, } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



export default async function ServiceSection() {
    const servicesData = await dbConnect(collectionName.services).find().limit(8).toArray();


    return (
        <div className='container mx-auto mb-24 xl:mt-40 p-5 xl:p-0'>

            <Heading center max content={"The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. "} title={'Our Service Area'} subTitle={'Service'} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10  ">
                {
                    servicesData.map(service => <ServicesCard key={service._id} service={service} />)
                }
            </div>
            <div className="flex justify-center">
                <Button
                    sx={{
                        padding: "10px 20px",
                        border: "2px solid #FF3811",
                        color: "#FF3811",
                        fontWeight: 700,
                        borderRadius: "8px",
                        textTransform: "uppercase",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                        "&:hover": {
                            backgroundColor: "#FF3811",
                            color: "white",
                            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.4)",
                        },
                    }}
                    variant="outlined"
                >
                    More Services <ArrowForwardIcon sx={{ ml: 1 }} />
                </Button>
            </div>

        </div>
    );
}; 