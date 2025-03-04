import Heading from '@/components/shared/Heading';
import TeamCard from './TeamCard';
import dbConnect, { collectionName } from '@/lib/dbConnect';

export default async function TeamSection() {
    const teamData = await dbConnect(collectionName.teams).find().toArray();


    return (
        <div className='container mx-auto '>
            <Heading center content={`The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `} max subTitle={"Team"} title={"Meet Our Team"} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10  ">
                {
                    teamData.map(team => <TeamCard team={team} key={team._id} />)
                }
            </div>
        </div>
    );
}; 