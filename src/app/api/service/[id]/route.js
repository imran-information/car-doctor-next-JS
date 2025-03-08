import { NextResponse } from 'next/server';
import dbConnect, { collectionName } from "@/lib/dbConnect";
import { ObjectId } from 'mongodb';

export async function GET(request, { params }) {
    const serviceId = await params.id;
    const serviceData = await dbConnect(collectionName.services).findOne({ _id: new ObjectId(serviceId) });

    return NextResponse.json(serviceData);
}

export async function POST(request) {
    const data = await request.json();
    // Handle the creation of a new service
    // Example: const newService = await createService(data);

    return NextResponse.json({ message: 'Service created', data });
}

export async function PUT(request, { params }) {
    const { id } = params;
    const data = await request.json();
    // Handle the update of the service with the given id
    // Example: const updatedService = await updateService(id, data);

    return NextResponse.json({ message: `Service with id ${id} updated`, data });
}

export async function DELETE(request, { params }) {
    const { id } = params;
    // Handle the deletion of the service with the given id
    // Example: await deleteService(id);

    return NextResponse.json({ message: `Service with id ${id} deleted` });
}