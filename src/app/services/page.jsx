import Heading from '@/components/shared/Heading';
import React from 'react';
import dbConnect, { collectionName } from '@/lib/dbConnect';
import ServicesCard from '../components/ServicesCard';



export default async function Services() {
    const servicesData = await dbConnect(collectionName.services).find().toArray();


    return (
        <div className='pt-24 px-5 xl:px-0 min-h-screen container mx-auto'>
            <Heading center max content={"The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. "} title={'Our Service Area'}  />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10  ">
                {
                    servicesData.map(service => <ServicesCard key={service._id} service={service} />)
                }
            </div>


        </div>
    );
}; 