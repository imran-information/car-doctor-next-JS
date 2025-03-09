import BookingUpdateForm from "@/components/BookingUpdate/BookingUpdateForm";
import TopBanner from "@/components/shared/TopBanner";
import Head from "next/head";
import { headers } from "next/headers";

export default async function UpdateBookingPage({ params }) {
    const p = await params;
    const response = await fetch(`https://car-doctor-next-js.vercel.app/api/myBookings/${p.id}`, {
        headers: new Headers(await headers())
    })
    const bookingData = await response.json()

    return (
        <>
            <Head>
                <title>Update Booking</title>
            </Head>
            <div className='pt-28 px-5 xl:px-0 min-h-screen container mx-auto'>
                <TopBanner pageContent={"Update Booking"} pageName={"Update Booking"} />
                <BookingUpdateForm bookingData={bookingData} />
            </div>
        </>
    );
};

;