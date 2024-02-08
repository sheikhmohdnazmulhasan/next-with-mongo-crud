import connectMongoDb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newTitle: title, newDescription: description } = await request.json();
    await connectMongoDb();
    await Topic.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: 'topic updated' }, { status: 200 });
};