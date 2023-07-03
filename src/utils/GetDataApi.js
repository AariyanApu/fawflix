import useSWR from 'swr';

export function useUser() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(`/api/posts/`, fetcher);

  return {
    data: data,
    isLoading,
    isError: error,
  };
}
