import { Footer } from "@/widgets/LayoutFooter/Footer"
import { Header } from "@/widgets/LayoutHeader/Header"

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}