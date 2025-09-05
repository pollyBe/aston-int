import { posts } from "@/shared/lib/mocks/mocks"
import { PostsListWithLoading } from "@/widgets/PostsList/index.ts"
import styles from './PostsPage.module.css'
import { useEffect, useState } from "react";

export const PostsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const { container, title } = styles;

  return (
    <section className={container}>
      <h1 className={title}>Posts</h1>
      <PostsListWithLoading isLoading={isLoading} data={posts} />
    </section>
  )
}