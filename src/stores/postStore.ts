import { uniqBy } from "lodash";
import { create } from "zustand";

import { Post } from "../types/Post";

type PostStore = {
  posts: Post[];
  types: string[];
  type: string | null;
  isLoading: boolean;
  setPosts: (post: Post[]) => void;
  setTypes: (types: string[]) => void;
  addPosts: (post: Post[]) => void;
  setType: (type: string) => void;
  setIsLoading: (isLoading: boolean) => void;
};

export const usePostStore = create<PostStore>((set) => ({
  posts: [],
  types: [],
  type: null,
  isLoading: false,
  setPosts: (posts: Post[]) => set({ posts }),
  setTypes: (types: string[]) => set({ types }),
  addPosts: (newPosts: Post[] | null) => {
    if (newPosts) {
      set((prev) => {
        const uniqueNewPosts = [];

        for (const post of newPosts) {
          if (!prev.posts.find((p) => p.url === post.url)) {
            uniqueNewPosts.push(post);
          }
        }

        if (uniqueNewPosts.length === 0) {
          return prev;
        }

        const uniquePosts = uniqBy([...uniqueNewPosts, ...prev.posts], "url");
        return { posts: uniquePosts };
      });
    }
  },
  setType: (type: string) => set({ type }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));
