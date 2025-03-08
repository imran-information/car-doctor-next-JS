import dbConnect, { collectionName } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    const p = await params;
    const bookingCollection = dbConnect(collectionName.bookingCollection)
    const query = { _id: new ObjectId(p.id) }
    const booking = await bookingCollection.findOne(query)
    

    return NextResponse.json(booking);
}

