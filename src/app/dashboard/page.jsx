"use client";
import DashboardForm from "@/components/DashboardForm";
import DashboardMovieCard from "@/components/DashboardMovieCard";
import MovieRequestCard from "@/components/MovieRequestCard";
import useUser from "@/utils/GetDataApi";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import useSWR from "swr";
import * as Yup from "yup";

export default function Dashboard() {
  const [postId, setPostId] = useState(null);
  const [addBanner, setAddBanner] = useState(false);
  const [post, setPost] = useState({
    title: "",
    desc: "",
    imageLink: "",
    movieLink: "",
    genre: "",
    releaseDate: "",
    director: "",
    cast: "",
    language: "",
  });

  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    genre: Yup.array()
      .of(Yup.string().required("Genre is required"))
      .required("Genre is required"),

    imageLink: Yup.string()
      .required("Image Link is required")
      .url("Invalid URL format"),
    movieLink: Yup.string()
      .required("Movie Link is required")
      .url("Invalid URL format"),
  });

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      await validationSchema.validate(post);
      addBanner
        ? await fetch("/api/banner", {
            method: "POST",
            body: JSON.stringify(post),
          })
        : await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify(post),
          });

      mutate();
      setIsFormSubmitted(true);
      setPost({
        title: "",
        desc: "",
        imageLink: "",
        movieLink: "",
        genre: "",
        releaseDate: "",
        director: "",
        cast: "",
        language: "",
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

      await fetch(`/api/posts/${postId}`, {
        method: "PUT",
        body: JSON.stringify(post),
      });
      setIsFormSubmitted(true);
      setPostId(null);

      setPost({
        title: "",
        desc: "",
        imageLink: "",
        movieLink: "",
        genre: "",
        releaseDate: "",
        director: "",
        cast: "",
        language: "",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data for Movie Card
  const { data, isLoading, mutate, isError } = useUser();

  // Fetch data for Movie Request Card

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: movieCardData, mutate: mutate1 } = useSWR("/api/help", fetcher);

  // Authentication
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;

  if (status === "loading") {
    return <p>Hang on there...</p>;
  }

  if ((status === "authenticated") & (userEmail === "fawflix44@gmail.com")) {
    return (
      <div>
        <div className="flex w-full flex-row">
          <div>
            {data?.reverse().map((movie) => (
              <DashboardMovieCard
                key={movie._id}
                movie={movie}
                customStyles=" movie_card w-[250px] h-[200px]  my-2"
                imageStyles=" h-[180px] w-[110px] image_hover "
                mutate={mutate}
                handleEdit={handleEdit}
                addBanner={addBanner}
              />
            ))}
          </div>

          <div className="ml-36">
            <div className="my-4 flex items-center justify-between">
              <h1 className="red_gradient">
                {postId
                  ? "Edit Movie"
                  : addBanner
                    ? "Add Banner "
                    : "Add Movies "}
                Here ...
              </h1>

              <button
                onClick={() => setAddBanner((prevValue) => !prevValue)}
                className="button_style h-10 w-28"
              >
                {addBanner ? "Add Movies" : "Add Banner"}
              </button>
            </div>
            <DashboardForm
              postId={postId}
              handleSubmit={handleSubmit}
              handleEditSubmit={handleEditSubmit}
              post={post}
              setPost={setPost}
              loading={loading}
              isFormSubmitted={isFormSubmitted}
              validationSchema={validationSchema}
            />
            <button onClick={() => signOut()}>Sign out</button>

            {isFormSubmitted && (
              <div className="flex w-96 flex-col gap-4">
                <h1 className="red_gradient">Movie submitted successfully </h1>
              </div>
            )}
            {/* Movie Request Card */}
            <div className="mt-10 flex w-96 flex-col gap-4">
              <h1 className="red_gradient">Movie Request</h1>
              <div className="flex w-96 flex-col gap-4">
                {movieCardData?.reverse().map((movie) => (
                  <MovieRequestCard
                    key={movie._id}
                    movie={movie}
                    mutate1={mutate1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>You are not authorized to view this page</h1>
        <button onClick={() => signIn("google")} className="button_style mt-5 ">
          Sign in
        </button>
      </div>
    );
  }
}
