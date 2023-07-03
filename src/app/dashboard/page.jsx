'use client';
import Input from '@/components/Input';
import { useState } from 'react';

export default function Dashboard() {
  const [post, setPost] = useState({
    title: '',
    desc: '',
    imageLink: '',
    movieLink: '',
    genre: '',
    releaseDate: '',
    director: '',
    cast: '',
    language: '',
  });

  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify(post),
      });
      setLoading(false);
      setIsFormSubmitted(true);
      setPost({
        title: '',
        desc: '',
        imageLink: '',
        movieLink: '',
        genre: '',
        releaseDate: '',
        director: '',
        cast: '',
        language: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  // const { user, isLoading, isError } = useUser();

  // console.log(user + 'from swr');
  return (
    <div>
      <div className="flex flex-col ">
        <h1 className="red_gradient">Add Movies </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-96">
          <Input
            placeholder="Title"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />

          <Input
            placeholder="Description"
            value={post.desc}
            onChange={(e) => setPost({ ...post, desc: e.target.value })}
          />

          <Input
            placeholder="Genre"
            value={post.genre}
            onChange={(e) =>
              setPost({ ...post, genre: e.target.value.split(',') })
            }
          />
          <Input
            placeholder="Release Date"
            value={post.releaseDate}
            onChange={(e) => setPost({ ...post, releaseDate: e.target.value })}
          />

          <Input
            placeholder="Director"
            value={post.director}
            onChange={(e) => setPost({ ...post, director: e.target.value })}
          />
          <Input
            placeholder="Cast"
            value={post.cast}
            onChange={(e) => setPost({ ...post, cast: e.target.value })}
          />

          <Input
            placeholder="Language"
            value={post.language}
            onChange={(e) => setPost({ ...post, language: e.target.value })}
          />

          <Input
            placeholder="Image Link"
            value={post.imageLink}
            onChange={(e) => setPost({ ...post, imageLink: e.target.value })}
          />

          <Input
            placeholder="Movie Link"
            value={post.movieLink}
            onChange={(e) => setPost({ ...post, movieLink: e.target.value })}
          />
          <button type="submit" onClick={handleSubmit} className="button_style">
            {' '}
            {!loading ? 'Submit Movie ' : 'Movie Submitting...'}
          </button>
        </form>
        {isFormSubmitted && (
          <div className="flex flex-col gap-4 w-96">
            <h1 className="red_gradient">Movie Submitted successfully </h1>
          </div>
        )}
      </div>
    </div>
  );
}
