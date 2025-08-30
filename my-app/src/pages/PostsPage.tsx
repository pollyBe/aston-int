import { PostsList } from "@/widgets/PostsList/PostsList"

const postsData = [
  { title: 'Lorem ipsum dolor sit amet', img: '', description: 'lorem consectetur adipisicing elit. Ipsa consequatur delectus ab quod. Necessitatibus culpa aliquid tempora provident dolor nostrum assumenda numquam odit laborum? Sequi nobis voluptatibus non quis beatae.', },
  { title: 'Lorem ipsum dolor sit amet', img: '', description: 'lorem consectetur adipisicing elit. Ipsa consequatur delectus ab quod. Necessitatibus culpa aliquid tempora provident dolor nostrum assumenda numquam odit laborum? Sequi nobis voluptatibus non quis beatae.', },
  { title: 'Lorem ipsum dolor sit amet', img: '', description: 'lorem consectetur adipisicing elit. Ipsa consequatur delectus ab quod. Necessitatibus culpa aliquid tempora provident dolor nostrum assumenda numquam odit laborum? Sequi nobis voluptatibus non quis beatae.', },
  { title: 'Lorem ipsum dolor sit amet', img: '', description: 'lorem consectetur adipisicing elit. Ipsa consequatur delectus ab quod. Necessitatibus culpa aliquid tempora provident dolor nostrum assumenda numquam odit laborum? Sequi nobis voluptatibus non quis beatae.', },
  { title: 'Lorem ipsum dolor sit amet', img: '', description: 'lorem consectetur adipisicing elit. Ipsa consequatur delectus ab quod. Necessitatibus culpa aliquid tempora provident dolor nostrum assumenda numquam odit laborum? Sequi nobis voluptatibus non quis beatae.', },
  { title: 'Lorem ipsum dolor sit amet', img: '', description: 'lorem consectetur adipisicing elit. Ipsa consequatur delectus ab quod. Necessitatibus culpa aliquid tempora provident dolor nostrum assumenda numquam odit laborum? Sequi nobis voluptatibus non quis beatae.', },
  { title: 'Lorem ipsum dolor sit amet', img: '', description: 'lorem consectetur adipisicing elit. Ipsa consequatur delectus ab quod. Necessitatibus culpa aliquid tempora provident dolor nostrum assumenda numquam odit laborum? Sequi nobis voluptatibus non quis beatae.', },
  { title: 'Lorem ipsum dolor sit amet', img: '', description: 'lorem consectetur adipisicing elit. Ipsa consequatur delectus ab quod. Necessitatibus culpa aliquid tempora provident dolor nostrum assumenda numquam odit laborum? Sequi nobis voluptatibus non quis beatae.', },
  { title: 'Lorem ipsum dolor sit amet' , img: '', description: 'lorem consectetur adipisicing elit. Ipsa consequatur delectus ab quod. Necessitatibus culpa aliquid tempora provident dolor nostrum assumenda numquam odit laborum? Sequi nobis voluptatibus non quis beatae.', }
]

export const PostsPage = () => {
  return (
    <section>
      <h1>Posts</h1>
      <PostsList data={postsData} />
    </section>
  )
}