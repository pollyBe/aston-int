import { posts } from "@/shared/lib/mocks/mocks"
import { PostsList } from "@/widgets/PostsList/PostsList"

export const PostsPage = () => {
  return (
    <section>
      <h1>Posts</h1>
      <PostsList data={posts} />
    </section>
  )
}