'use client';
import DashboardMovieCard from '@/components/DashboardMovieCard';
import Input from '@/components/Input';
import { useUser } from '@/utils/GetDataApi';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';

export default function Dashboard() {
  const [postId, setPostId] = useState(null);
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
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    genre: Yup.array()
      .of(Yup.string().required('Genre is required'))
      .required('Genre is required'),

    imageLink: Yup.string()
      .required('Image Link is required')
      .url('Invalid URL format'),
    movieLink: Yup.string()
      .required('Movie Link is required')
      .url('Invalid URL format'),
  });

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      await validationSchema.validate(post);

      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify(post),
      });
      mutate();
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
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async (id) => {
    setPostId(id);
  };

  useEffect(() => {
    if (postId) {
      // Fetch post data from server
      fetch(`/api/posts/${postId}`)
        .then((res) => res.json())
        .then((data) => setPost(data));
    }
  }, [postId]);

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(post);

      await fetch(`https://fawflix.vercel.app/api/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify(post),
      });
      setIsFormSubmitted(true);
      setPostId(null);

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
    } finally {
      setLoading(false);
    }
  };

  const { data, isLoading, mutate, isError } = useUser();

  return (
    <div>
      <div className="flex flex-row w-full">
        <div>
          {data?.reverse().map((movie) => (
            <DashboardMovieCard
              key={movie._id}
              movie={movie}
              customStyles=" movie_card w-[250px] h-[200px]  my-2"
              imageStyles=" h-[180px] w-[110px] image_hover "
              mutate={mutate}
              handleEdit={handleEdit}
            />
          ))}
        </div>

        <div className="ml-36">
          <h1 className="red_gradient">
            {postId ? 'Edit Movie' : 'Add Movies'}{' '}
          </h1>
          <form
            onSubmit={postId ? handleEditSubmit : handleSubmit}
            className="flex flex-col gap-4 w-96"
          >
            <input type="hidden" name="id" value={postId} />
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
              error={isFormSubmitted && validationSchema?.errors?.genre}
            />
            <Input
              placeholder="Release Date"
              value={post.releaseDate}
              onChange={(e) =>
                setPost({ ...post, releaseDate: e.target.value })
              }
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
              error={isFormSubmitted && validationSchema?.errors?.imageLink}
              url={true}
            />

            <Input
              placeholder="Movie Link"
              value={post.movieLink}
              onChange={(e) => setPost({ ...post, movieLink: e.target.value })}
              error={isFormSubmitted && validationSchema?.errors?.movieLink}
              url={true}
            />

            <button
              type="submit"
              onClick={postId ? handleEditSubmit : handleSubmit}
              className="button_style"
            >
              {' '}
              {!loading
                ? postId
                  ? 'Edit Movie '
                  : 'Add Movie'
                : 'Movie Submitting...'}
            </button>
          </form>
          {isFormSubmitted && (
            <div className="flex flex-col gap-4 w-96">
              <h1 className="red_gradient">Movie submitted successfully </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
