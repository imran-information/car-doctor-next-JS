import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionName } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";



export const GET = async (request) => {
    const session = await getServerSession(authOptions)
    if (session) {
        const email = session?.user?.email
        const bookingCollection = dbConnect(collectionName.bookingCollection)
        const result = await bookingCollection.find({ email }).toArray()
        // console.log(result);
        return NextResponse.json(result);
    }
    return NextResponse.json({});

}


export const POST = async (request) => {
    const data = await request.json();
    const bookingCollection = dbConnect(collectionName.bookingCollection)
    const result = await bookingCollection.insertOne(data)
    // console.log(result);
    return NextResponse.json(result);
}