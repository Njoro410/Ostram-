import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Board from "./pages/Board";
import Office from "./pages/Office";
import Loans from "./pages/Loans";
import Accounts from "./pages/Accounts";
import Membership from "./pages/Membership";
import Savings from "./pages/Savings";
import Deposits from "./pages/Deposits";
import FAQ from "./pages/FAQ";
import Downloads from "./pages/Downloads";
import News from "./pages/News";
import Contact from "./pages/Contact";
import ScrollToTop from "react-scroll-to-top";
import Individual from "./pages/Individual";
import Chama from "./pages/Chama";
import Junior from "./pages/Junior";
import Guarantorship from "./pages/Guarantorship";
import { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {

  // Scroll to top of page when changing routes
  // https://reactrouter.com/web/guides/scroll-restoration/scroll-to-top
  function ScrollTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <div className="font-mont dark:text-white">
      <BrowserRouter>
        <ScrollToTop smooth color="#f97316" className="flex justify-center items-center" />
        <Details />
        <Navbar />
        <ScrollTop />
        {/* <div className="bg-gray-800 text-white"> */}
          <Routes>

            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/board' element={<Board />} />
            <Route path='/office' element={<Office />} />
            <Route path='/accounts' element={<Accounts />} />
            <Route path='/loans' element={<Loans />} />
            <Route path='/membership' element={<Membership />} />
            <Route path='/savings' element={<Savings />} />
            <Route path='/deposits' element={<Deposits />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path='/downloads' element={<Downloads />} />
            <Route path='/news' element={<News />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/individual' element={<Individual />} />
            <Route path='/chama' element={<Chama />} />
            <Route path='/junior' element={<Junior />} />
            <Route path='/guarantorship' element={<Guarantorship />} />
          </Routes>
        {/* </div> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
