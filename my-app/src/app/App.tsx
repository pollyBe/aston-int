import '../App.css'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { RouterProvider } from 'react-router-dom'
import { routes } from './providers/router/routes'

function App() {
  return (
       <MainLayout>
        <RouterProvider router={routes}/>
      </MainLayout>
  )
}

export default App
