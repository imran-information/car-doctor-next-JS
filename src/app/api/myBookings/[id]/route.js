import { authOptions } from '@/lib/authOptions';
import dbConnect, { collectionName } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    const p = await params;
    const session = getServerSession(authOptions)
    const bookingCollection = dbConnect(collectionName.bookingCollection)
    const query = { _id: new ObjectId(p.id) }
    const booking = await bookingCollection.findOne(query)
    const isOwnerOk = booking.email == (await session)?.user?.email
    if (isOwnerOk) {
        return NextResponse.json(booking);
    }
    return NextResponse.json({ message: 'Forbidden Get Action' }, { status: 401 });
}

export async function PATCH(request, { params }) {
    const p = await params;
    const session = getServerSession(authOptions)
    const bookingCollection = dbConnect(collectionName.bookingCollection)
    const query = { _id: new ObjectId(p.id) }
    const body = await request.json()
    const bookingData = await bookingCollection.findOne(query)
    const isOwnerOk = bookingData.email == (await session)?.user?.email
    if (isOwnerOk) {
        const filter = {
            $set: {
                ...body
            }
        }
        const option = {
            upsert: true
        }
        const updatedRes = await bookingCollection.updateOne(query, filter, option)
        revalidatePath('/myBookings')
        return NextResponse.json(updatedRes);
    }
    return NextResponse.json({ message: 'Forbidden Update Action' }, { status: 401 });
}
