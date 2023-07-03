import { NextResponse } from 'next/server';

import MovieRequest from '@/models/MovieRequest';
import connect from '@/utils/db';

export const GET = async (request) => {
  // Fetch all posts
  try {
    await connect();
    const movieRequest = await MovieRequest.find();

    return new NextResponse(JSON.stringify(movieRequest), { status: 200 });
  } catch (error) {
    return new NextResponse('database error', { status: 500 });
  }
};

// Post a new movie request

export const POST = async (request) => {
  const body = await request.json();
  const newMovieRequest = new MovieRequest(body);

  try {
    await connect();
    const movieRequest = await newMovieRequest.save();

    return new NextResponse(JSON.stringify(movieRequest), { status: 201 });
  } catch (error) {
    return new NextResponse('database error', { status: 500 });
  }
};
