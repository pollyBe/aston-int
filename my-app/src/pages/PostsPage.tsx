import { posts } from "@/shared/lib/mocks/mocks"
import { PostsList } from "@/widgets/PostsList/PostsList"
import styles from './PostsPage.module.css'

export const PostsPage = () => {
  const { container, title } = styles;
  return (
    <section className={container}>
      <h1 className={title}>Posts</h1>
      <PostsList data={posts} />
    </section>
  )
}