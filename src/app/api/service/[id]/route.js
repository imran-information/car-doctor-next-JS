import { NextResponse } from 'next/server';
import dbConnect, { collectionName } from "@/lib/dbConnect";
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

export async function GET(request, { params }) {
    const serviceId = await params?.id;
    const serviceData = await dbConnect(collectionName.services).findOne({ _id: new ObjectId(serviceId) });

    return NextResponse.json(serviceData);
}



export async function PUT(request, { params }) {
    const { id } = params;
    const data = await request.json();
    // Handle the update of the service with the given id
    // Example: const updatedService = await updateService(id, data);

    return NextResponse.json({ message: `Service with id ${id} updated`, data });
}

export async function DELETE(request, { params }) {
    const session = getServerSession(authOptions)
    const id = await params?.id;
    const bookingCollection = dbConnect(collectionName.bookingCollection)
    const query = { _id: new ObjectId(id) }
    const deletedBookingData = await bookingCollection.findOne(query)
    const isOwnerOk = deletedBookingData.email == (await session).user.email
    if (isOwnerOk) {
        const result = bookingCollection.deleteOne(query)
        return NextResponse.json({ message: `Service with id ${id} deleted`, result });
    }
    return NextResponse.json({ message: 'Unauthorized to delete this service' }, { status: 401 });
}


