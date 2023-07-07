import Banner from '@/models/Banner';
import connect from '@/utils/db';
import { NextResponse } from 'next/server';

// Post a new post
export const POST = async (request) => {
  const body = await request.json();
  const newPost = new Banner(body);

  try {
    await connect();
    const post = await newPost.save();

    return new NextResponse(JSON.stringify(post), { status: 201 });
  } catch (error) {
    return new NextResponse('database error', { status: 500 });
  }
};

export const GET = async (request) => {
  // Fetch all posts
  try {
    await connect();
    const posts = await Banner.find();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse('database error', { status: 500 });
  }
};
