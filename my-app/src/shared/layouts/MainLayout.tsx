import { Footer } from "@/widgets/LayoutFooter/Footer"
import { Header } from "@/widgets/LayoutHeader/Header"
import { Outlet } from "react-router"


export const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}