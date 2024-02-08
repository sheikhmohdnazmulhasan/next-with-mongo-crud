import connectMongoDb from '@/libs/mongodb';
import Topic from '@/models/topic';
import { NextResponse } from 'next/server';

export async function POST(request) {

    const { title, description } = await request.json();
    await connectMongoDb();
    await Topic.create({ title, description });
    return NextResponse.json({ message: 'topic created' }, { status: 201 })
};

export async function GET() {
    await connectMongoDb();
    const topics = await Topic.find();
    return NextResponse.json({ topics });
};

