''
import Heading from '@/components/shared/Heading';
import React from 'react';
import ServicesCard from './ServicesCard';
import dbConnect, { collectionName } from '@/lib/dbConnect';



export default async function ServiceSection() {
    const servicesData = await dbConnect(collectionName.services).find().toArray();


    return (
        <div className='container mx-auto mb-24 xl:mt-40'>

            <Heading center max content={"The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. "} title={'Our Service Area'} subTitle={'Service'} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10  ">
                {
                    servicesData.map(service => <ServicesCard key={service._id} service={service} />)
                }
            </div>

        </div>
    );
}; 