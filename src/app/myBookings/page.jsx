// "use client"
import TopBanner from '@/components/shared/TopBanner';
import ServicesTable from '@/components/Table/ServicesTable';
import Head from 'next/head';
import { headers } from 'next/headers';

const allMyBookings = async () => {
    const res = await fetch('http://localhost:3000/api/service', {
        headers: await headers()
    })
    const myBookingsData = await res.json()
    return myBookingsData
}
export default async function MyBookingsPage() {
    // const [myBookings, setMyBookings] = useState([])
    // // console.log(myBookings);
    // useEffect(() => {
    //     const allMyBookings = async () => {
    //         const res = await fetch('http://localhost:3000/api/service')
    //         const myBookingsData = await res.json()
    //         setMyBookings(myBookingsData)
    //     }
    //     allMyBookings()
    // }, []) 

    const myBookings = await allMyBookings()

    return (
        <>
            <Head>
                <title>My Bookings</title>
            </Head>
            <div className='pt-28 px-5 xl:px-0 min-h-screen container mx-auto'>
                <TopBanner pageContent={"Product Details"} pageName={"Cart Details"} />
                <ServicesTable myBookings={myBookings} />
            </div>
        </>
    );
};
