// import { HomeTest } from '@/components/home/HomeTest'
import { Home } from "@/components/home/Home"
import  NavBar  from "@/components/navBar/NavBar"
import { Footer } from "@/components/footer/Footer"
import { BrowserRouter, Route, Routes } from 'react-router-dom'



export const PublicRoutes = {
  home: '/',
}

export const PrivateRoutes = {
  createProject: '/createProject'
}

export const RouterProvider: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path={PublicRoutes.home} element={<Home/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
