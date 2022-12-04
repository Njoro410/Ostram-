/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logo from "../images/Logo.png";
import { motion, useScroll } from "framer-motion";
import { useEffect } from "react";
import Mobile from "./Mobile";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";

const path01Variants = {
  open: { d: "M3.06061 2.99999L21.0606 21" },
  closed: { d: "M0 9.5L24 9.5" },
};

const path02Variants = {
  open: { d: "M3.00006 21.0607L21 3.06064" },
  moving: { d: "M0 14.5L24 14.5" },
  closed: { d: "M0 14.5L15 14.5" },
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  // const handleClick = () => setNav(!nav);
  const [animation, setAnimation] = useState("closed");
  const handleClose = () => {setNav(false);setAnimation("closed")}


  
 

  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
      setNav(false);
      setAnimation("closed");
      // console.log("visible");
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
      // console.log("hidden");
    }
  }

  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const variants = {
    /** this is the "visible" key and it's respective style object **/
    visible: { opacity: 1, y: 0 },
    /** this is the "hidden" key and it's respective style object **/
    hidden: { opacity: 0, y: -25 },
  };

  const onClick = () => {
    setAnimation("moving");
    setTimeout(() => {
      setAnimation(animation === "closed" ? "open" : "closed");
    }, 200);
    if (animation === "open") {
      // console.log("closed")
      setNav(false);
      // handleClick()
    } else {
      // console.log("open")
      setNav(true);
    }
  };

  // const closeX = () => {
  //   if (nav === true) {
  //     setAnimation("closed");
  //   } else {
  //     setAnimation("closed");
  //   }
  // };

  return (
    <motion.header
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.2 }}
      className="sticky  top-0 z-30 w-full md:px-2 py-4 bg-white  shadow-2xl transition duration-700"
    >
      <div className="container mx-auto flex justify-between items-center font-extrabold">
        <img
          src={logo}
          alt="ostram logo"
          className="h-14 md:h-24 pl-8 md:pl-8"
        />

        <ul className="hidden md:flex space-x-6 text-sm lg:text-lg">
          <li>
            <Link className="hover:text-orange-500  transition duration-300" to="/">
                Home
            </Link>
          </li>
          <li className="flex items-center relative group">
            <Link className="mr-1 group-hover:text-orange-500 transition duration-300 ">About</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 group-hover:text-orange-500 group-hover:rotate-180 transition-transform duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>

            {/* <!-- Submenu starts --> */}
            <ul className="absolute z-10 bg-white p-3 w-52 top-6 transform scale-0 group-hover:scale-100 transition duration-500 ease-in-out origin-top shadow-lg border">
              <li className="text-sm hover:bg-orange-100 leading-8">
                <Link to="/about" className="px-2 w-full">
                  Who We Are
                </Link>
              </li>
              <li className="text-sm hover:bg-orange-100 leading-8">
                <Link to="/board" className="px-2 w-full">
                  {" "}
                 
                    Board of Directors
                  
                </Link>
              </li>
              <li className="text-sm hover:bg-orange-100 leading-8">
                <Link to="/office" className="px-2 w-full">
                  {" "}
                  
                    Office Management
              
                </Link>
              </li>
            </ul>
            {/* <!-- Submenu ends --> */}
          </li>
          <li className="flex items-center relative group">
            <a
             
              className="mr-1 group-hover:text-orange-500 transition duration-300"
            >
              Services
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 group-hover:text-orange-500 group-hover:rotate-180 transition-transform duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>

            {/* <!-- Submenu starts --> */}
            <ul className="absolute z-10 bg-white p-3 w-52 top-6 transform scale-0 group-hover:scale-100 transition duration-500 ease-in-out origin-top shadow-lg border">
              <li className="text-sm hover:bg-orange-100 leading-8">
                <Link to="/accounts" className="px-2">
                  {" "}
                  
                    Savings
                  
                </Link>
              </li>

              <li className="text-sm hover:bg-orange-100 leading-8">
                <Link to="/loans" className="px-2">
                  {" "}
                 
                    Loans
                 
                </Link>
              </li>

              <li className="text-sm hover:bg-orange-100 leading-8">
                <Link to="/guarantorship" className="px-2">
                  {" "}
                  
                    Guarantorship
                
                </Link>
              </li>
            </ul>
            {/* <!-- Submenu ends --> */}
          </li>
          <li className="flex items-center relative group">
            <Link to="/membership" className="mr-1 group-hover:text-orange-500 transition duration-300">
              {" "}

                Membership
    
            </Link>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 group-hover:text-orange-500 group-hover:rotate-180 transition-transform duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>

            {/* <!-- Submenu starts --> */}
            <ul className="absolute z-10 bg-white p-2 w-56 top-6 transform scale-0 group-hover:scale-100 transition duration-500 ease-in-out origin-top shadow-2xl border">
              <li className="text-sm hover:bg-orange-100 leading-8">
                <Link to="/individual" className="px-2">
                  {" "}
                 
                    Individual Membership
                
                </Link>
              </li>
              <li className="text-sm hover:bg-orange-100 leading-8">
                <Link to="/junior" className="px-2">
                  {" "}
                 
                    Junior Membership
                 
                </Link>
              </li>
              <li className="text-sm hover:bg-orange-100 leading-8">
                <Link to="/chama" className="px-2">
                  {" "}
                  
                    Joint/Chama Membership
                  
                </Link>
              </li>
            </ul>
            {/* <!-- Submenu ends --> */}
          </li>
          <li className="flex items-center relative group">
            <a
             
              className="mr-1 group-hover:text-orange-500 transition duration-300"
            >
              Resources
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 group-hover:text-orange-500 group-hover:rotate-180 transition-transform duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>

            {/* <!-- Submenu starts --> */}
            <ul className="absolute z-10 bg-white p-3 w-52 top-6 transform scale-0 group-hover:scale-100 transition duration-500 ease-in-out origin-top shadow-lg border">
              <li className="text-sm hover:bg-orange-100 leading-8">
                <Link to="/news" className="px-2">
                  {" "}
                  
                    News
                  
                </Link>
              </li>
              <li className="text-sm hover:bg-orange-100 leading-8">
                <Link to="/downloads" className="px-2">
                  {" "}
                  
                    Downloads
                 
                </Link>
              </li>
              <li className="text-sm hover:bg-orange-100 leading-8">
                <Link to="/faq" className="px-2">
                  {" "}
                  
                    FAQs
                  
                </Link>
              </li>
            </ul>
            {/* <!-- Submenu ends --> */}
          </li>
          <li>
            <Link to="/contact" className="mr-1 hover:text-orange-500 transition duration-300">
              {" "}

                Contact
    
            </Link>
          </li>
        </ul>

        <a
          
          className="bg-red-400 px-5 py-1 rounded-3xl hover:bg-red-500 text-white hidden md:flex invisible"
          role="button"
        >
          Social buttons
        </a>
        {/* <motion.div

          className="md:hidden mr-4"
          onClick={handleClick}
        >
          {!nav ? (
            <AiOutlineMenu fontSize="2rem" />
          ) : (
            <AiOutlineClose fontSize="2rem" />
          )}
        </motion.div> */}

        <button className="md:hidden mr-4" onClick={onClick}>
          <svg width="24" height="24" viewBox="0 0 24 24" className="h-8 w-8">
            <motion.path
              stroke="#030000"
              animate={animation}
              variants={path01Variants}
            />
            <motion.path
              stroke="#000000"
              animate={animation}
              variants={path02Variants}
            />
          </svg>
        </button>
      </div>

      {/* <!-- Mobile menu --> */}
      <OutsideClickHandler
        onOutsideClick={() => {
          // handleClose();
          // closeX()
          // setAnimation(nav === false ? "closed" : "closed");
        }}
      >
        <Mobile nav={nav} close={handleClose} />
      </OutsideClickHandler>
    </motion.header>
  );
};

export default Navbar;
