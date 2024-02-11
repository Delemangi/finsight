import { useQuery } from "@tanstack/react-query";

import { getUrl, listUrl, questionsUrl } from "./urls";
import { Post } from "../types/Post";
import { Question } from "../types/Question";

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

export const useGetQuestions = () => {
  return useQuery<Question[], Error>({
    queryKey: ["questions"],
    queryFn: () => fetch(questionsUrl()).then((res) => res.json()),
    staleTime: Infinity,
  });
};
