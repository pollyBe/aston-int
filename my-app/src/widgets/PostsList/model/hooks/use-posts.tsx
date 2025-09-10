import { posts } from "@/shared/lib/mocks/posts";

export const usePosts = () => {
  return { posts, isLoading: false, error: null };
};