import { PostsPage } from '@/pages/PostsPage'
import '../App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { MainLayout } from '@/shared/layouts/MainLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<PostsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
