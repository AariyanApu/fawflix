import { NextResponse } from 'next/server';

import Post from '@/models/Post';
import connect from '@/utils/db';

export const GET = async (request, { params }) => {
  // Fetch post by id

  const { id } = params;

  try {
    await connect();
    const post = await Post.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse('database error', { status: 500 });
  }
};
