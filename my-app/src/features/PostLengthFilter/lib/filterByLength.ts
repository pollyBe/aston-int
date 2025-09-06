interface Post {
  id: number
  title: string
  img: string
  description: string
  comments: { userName: string; comment: string }[]
}

export function filterByLength(posts: Post[], minLength: number, maxLength: number): Post[] {
  return posts.filter((post) => {
    const len = post.title.trim().length
    return len >= minLength && len <= maxLength
  })
}
