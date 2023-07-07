import Input from './Input';

export default function DashboardForm({
  handleSubmit,
  handleEditSubmit,
  postId,
  post,
  setPost,
  isFormSubmitted,
  validationSchema,
  loading,
}) {
  return (
    <form
      onSubmit={postId ? handleEditSubmit : handleSubmit}
      className="flex flex-col gap-4 w-96"
    >
      <input type="hidden" name="id" value={postId} />
      <Input
        placeholder="Title"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        error={isFormSubmitted && validationSchema?.errors?.title}
      />

      <Input
        placeholder="Description"
        value={post.desc}
        onChange={(e) => setPost({ ...post, desc: e.target.value })}
      />

      <Input
        placeholder="Genre"
        value={post.genre}
        onChange={(e) => setPost({ ...post, genre: e.target.value.split(',') })}
        error={isFormSubmitted && validationSchema?.errors?.genre}
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
  );
}
