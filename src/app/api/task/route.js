import Todo from '../../model';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

async function connectToDB() {
    if(mongoose.connection.readyState >=1) {
        return;
    }
    await mongoose.connect('mongodb://localhost:27017/todo');

}
export async function GET(request) {
    try{
        await connectToDB();
        const todos=await Todo.find({});
        const data=JSON.parse(JSON.stringify(todos));
        return NextResponse.json(JSON.stringify(data), {status: 200});


    }catch(error) {
        return NextResponse.json({error: 'Failed to fetch todos'}, {status: 500});

    }

}

export async function POST(request) {
    try{
        await connectToDB();
        const {title}=await request.json();
        const newTodo=new Todo({title});
        await newTodo.save();
        const todos=await Todo.find({});
        const data=JSON.parse(JSON.stringify(todos));
        return NextResponse.json(JSON.stringify(data), {status: 200});


    }catch(error) {
        return NextResponse.json({error: 'Failed to create todos'}, {status: 500});

    }

}

export async function DELETE(request) {
    try{
        await connectToDB();
        const {title}=await request.json();
        const deleted=await Todo.findOneAndDelete({title});
        const todos=await Todo.find({});
        const data=JSON.parse(JSON.stringify(todos));
        return NextResponse.json(JSON.stringify(data), {status: 200});


    }catch(error) {
        return NextResponse.json({error: 'Failed to delete todos'}, {status: 500});

    }

}

