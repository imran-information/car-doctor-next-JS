import { NextResponse } from 'next/server';
import dbConnect, { collectionName } from "@/lib/dbConnect";
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

export async function GET(request, { params }) {
    const p = await params;
    const serviceData = await dbConnect(collectionName.services).findOne({ _id: new ObjectId(p.id) });

    return NextResponse.json(serviceData);
}

export async function DELETE(request, { params }) {
    const session = getServerSession(authOptions)
    const p = await params;
    const bookingCollection = dbConnect(collectionName.bookingCollection)
    const query = { _id: new ObjectId(p.id) }
    const deletedBookingData = await bookingCollection.findOne(query)
    const isOwnerOk = deletedBookingData.email == (await session).user.email
    if (isOwnerOk) {
        const result = bookingCollection.deleteOne(query)
        return NextResponse.json({ message: `Service with id ${p.id} deleted`, result });
    }
    return NextResponse.json({ message: 'Unauthorized to delete this service' }, { status: 401 });
}


