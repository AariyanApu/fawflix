import useSWR from 'swr';

export function useUser(id) {
  console.log(id + 'from  getSingleDataApi');
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://fawflix.vercel.app/api/posts/${id}`,
    fetcher,
  );

  return {
    data: data,
    isLoading,
    isError: error,
  };
}
