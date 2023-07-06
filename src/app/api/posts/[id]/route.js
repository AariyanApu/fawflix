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

export const DELETE = async (request, { params }) => {
  // Delete post by id

  const { id } = params;

  try {
    await connect();
    await Post.findByIdAndDelete(id);

    return new NextResponse('Post has been deleted', { status: 200 });
  } catch (error) {
    return new NextResponse('database error', { status: 500 });
  }
};

// Edit post by id
export const PUT = async (request, { params }) => {
  const { id } = params;
  const {
    title,
    desc,
    imageLink,
    movieLink,
    genre,
    releaseDate,
    director,
    cast,
    language,
  } = request.body;

  try {
    await connect();
    await Post.findByIdAndUpdate(id, {
      title,
      desc,
      imageLink,
      movieLink,
      genre,
      releaseDate,
      director,
      cast,
      language,
    });

    return new NextResponse('Post has been edited', { status: 200 });
  } catch (error) {
    return new NextResponse('database error', { status: 500 });
  }
};
