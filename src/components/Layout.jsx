import { Outlet } from "react-router-dom";
import Details from "./Details";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
       <Details />
       <Navbar/>
       <Outlet/>
       <Footer/>
    </>
  )
}

export default Layout