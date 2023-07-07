import { NextResponse } from 'next/server';

import MovieRequest from '@/models/MovieRequest';
import connect from '@/utils/db';
export const DELETE = async (request, { params }) => {
  // Delete post by id

  const { id } = params;

  try {
    await connect();
    await MovieRequest.findByIdAndDelete(id);

    return new NextResponse('Post has been deleted', { status: 200 });
  } catch (error) {
    return new NextResponse('database error', { status: 500 });
  }
};
