import { NextResponse } from 'next/server';

import Post from '@/models/Post';
import connect from '@/utils/db';

export const GET = async (request) => {
  // Fetch all posts
  try {
    await connect();
    const posts = await Post.find();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse('database error', { status: 500 });
  }
};

// Post a new post
export const POST = async (request) => {
  const body = await request.json();
  const newPost = new Post(body);

  try {
    await connect();
    const post = await newPost.save();

    return new NextResponse(JSON.stringify(post), { status: 201 });
  } catch (error) {
    return new NextResponse('database error', { status: 500 });
  }
};
