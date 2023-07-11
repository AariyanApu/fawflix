import useSWR from 'swr';

export default function useUser() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR('/api/posts/', fetcher);

  return {
    data: data,
    isLoading,
    isError: error,
    mutate,
  };
}
