import { useQuery } from "@tanstack/react-query";

import { getUrl, listUrl } from "./urls";
import { Post } from "../types/Post";

export const useGetPosts = (type: string | null) => {
  return useQuery<Post[], Error>({
    queryKey: ["posts", type],
    enabled: Boolean(type),
    queryFn: () =>
      fetch(getUrl(type!))
        .then((res) => res.json())
        .then((data) => data.posts),
    select: (data) => data.reverse(),
    staleTime: 1000 * 60 * 5,
  });
};

export const useGetPostTypes = () => {
  return useQuery<string[], Error>({
    queryKey: ["types"],
    queryFn: () =>
      fetch(listUrl())
        .then((res) => res.json())
        .then((data) => data.scrapers),
    staleTime: Infinity,
  });
};
