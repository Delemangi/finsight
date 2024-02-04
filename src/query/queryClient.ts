import { QueryClient, useQuery, useMutation } from "@tanstack/react-query";

import { Post } from "../types/types";
export const queryClient = new QueryClient();

const BASE_URL = "http://heckgaming.com:3000";

export const getUrl = (scraperType: string) => `${BASE_URL}/get/${scraperType}`;

export const deleteUrl = () => `${BASE_URL}/delete`;

export const listUrl = () => `${BASE_URL}/list`;

export const useDeleteCache = () => {
  const deleteData = async () => {
    const response = await fetch(deleteUrl(), {
      method: "DELETE",
    });
    return response.json();
  };

  return useMutation({
    mutationFn: deleteData,
  });
};

export const useGetJobs = () => {
  return useQuery<Post[], Error>({
    queryKey: ["jobs"],
    queryFn: () =>
      fetch(getUrl("jobs"))
        .then((res) => res.json())
        .then((data) => data.posts),
  });
};

export const useGetPostsByType = (type: string) => {
  return useQuery<Post[], Error>({
    queryKey: [type],
    queryFn: () =>
      fetch(getUrl(type))
        .then((res) => res.json())
        .then((data) => data.posts),
  });
};
