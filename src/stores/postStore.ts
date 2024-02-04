import { uniqBy } from "lodash";
import { create } from "zustand";

import { Post } from "../types/types";
type PostStore = {
  posts: Post[];
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  setPosts: (post: Post[]) => void;
  addPosts: (post: Post[]) => void;
};

export const usePostStore = create<PostStore>((set) => ({
  posts: [],
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setPosts: (posts: Post[]) => set({ posts }),
  addPosts: (newPosts: Post[] | null) => {
    if (newPosts) {
      set((prev) => {
        const uniqueNewPosts = [];
        console.log("from here", newPosts);
        for (const post of newPosts) {
          if (!prev.posts.find((p) => p.url === post.url)) {
            uniqueNewPosts.push(post);
          }
        }
        if (uniqueNewPosts.length === 0) return prev;
        const uniquePosts = uniqBy([...uniqueNewPosts, ...prev.posts], "url");
        return { posts: uniquePosts };
      });
    }
  },
}));
