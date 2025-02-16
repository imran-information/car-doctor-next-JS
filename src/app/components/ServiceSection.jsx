''
import Heading from '@/components/shared/Heading';
import React from 'react';
import ServicesCard from './ServicesCard';
import dbConnect, { collectionName } from '@/lib/dbConnect';



export default async function ServiceSection() {
    const servicesData = await dbConnect(collectionName.services).find().toArray();


    return (
        <div className='w-4/5 mx-auto  mt-40 '>
            <div className="text-center px-96">
                <Heading content={"The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. "} title={'Our Service Area'} subTitle={'Service'} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-10  ">
                {
                    servicesData.map(service => <ServicesCard key={service._id} service={service} />)
                }
            </div>

        </div>
    );
}; 