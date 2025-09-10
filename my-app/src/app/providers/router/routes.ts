import { AlbumPhotos } from '@/pages/AlbumPhotos'
import { HomePage } from '@/pages/HomePage'
import { PostPage } from '@/pages/PostPage'
import { PostsPage } from '@/pages/PostsPage'
import { UserAlbum } from '@/pages/UserAlbum'
import { UserPage } from '@/pages/UserPage'
import { UserPosts } from '@/pages/UserPosts'
import { UsersPage } from '@/pages/UsersPage'
import { UserTodos } from '@/pages/UserTodos'
import { createBrowserRouter } from 'react-router-dom'

export const routes = createBrowserRouter([
  {
    path: '/',
    index: true,
    Component: HomePage,
  },
  {
    path: '/posts',
    Component: PostsPage,
    children: [{ path: '/posts/:id', Component: PostPage }],
  },
  {
    path: '/users',
    Component: UsersPage,
  },
  {
    path: '/users/:id',
    Component: UserPage,
    children: [
      {
        path: '/users/:id/albums',
        Component: UserAlbum,
        children: [{ path: '/users/:id/albums/:id/photos', Component: AlbumPhotos }],
      },
      { path: '/users/:id/posts', Component: UserPosts },
      { path: '/users/:id/todos', Component: UserTodos },
    ],
  },
])
