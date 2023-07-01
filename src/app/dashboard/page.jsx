'use client';
import { useState } from 'react';

export default function Dashboard() {
  const [post, setPost] = useState({
    title: '',
    desc: '',
    imageLink: '',
    movieLink: '',
  });

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      await fetch('https://fawflix.vercel.app/api/posts', {
        method: 'POST',
        body: JSON.stringify(post),
      });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(post);

  return (
    <div>
      <h1>Dashboard</h1>

      <form onSubmit={handleSubmit}>
        <label> Title </label>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <label> Description </label>
        <input
          type="text"
          name="desc"
          placeholder="Description"
          value={post.desc}
          onChange={(e) => setPost({ ...post, desc: e.target.value })}
        />

        <label> Image Link </label>
        <input
          type="text"
          name="imageLink"
          placeholder="Image Link"
          value={post.imageLink}
          onChange={(e) => setPost({ ...post, imageLink: e.target.value })}
        />
        <label> Movie Link </label>
        <input
          type="text"
          name="movieLink"
          placeholder="Movie Link"
          value={post.movieLink}
          onChange={(e) => setPost({ ...post, movieLink: e.target.value })}
        />
        <button type="submit" onClick={handleSubmit}>
          {' '}
          {!loading ? 'Send Message' : 'Sending...'}
        </button>
      </form>
    </div>
  );
}
