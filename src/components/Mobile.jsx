import React, {  useState } from "react";
import { motion } from "framer-motion";
import { useDetectClickOutside } from "react-detect-click-outside";
// import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";

const Mobile = ({ nav, close }) => {
  const [menuOpen, setMenu] = useState(false);
  const [menuOpen1, setMenu1] = useState(false);
  const [menuOpen2, setMenu2] = useState(false);
  const [menuOpen3, setMenu3] = useState(false);
  // useEffect(() => {
  //   setMenu(false);
  //   setMenu1(false);
  // }, []);

  const closeDropdown = () => {
    setMenu(false);
    setMenu1(false);
    setMenu2(false);
    setMenu3(false);
  };

  const ref = useDetectClickOutside({ onTriggered: closeDropdown });

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-150%" },
  };

  const mvariants = {
    open: { opacity: 1, height: "100%", width: "100%" },
    closed: { opacity: 0, height: 0, width: 0 },
  };

  const livariants = {
    open: { opacity: 1, height: "auto", x: 0 },
    closed: { opacity: 0, height: 0, x: 250 },
  };

  return (
    // <OutsideClickHandler
    //   onOutsideClick={() => {
    //     close();
    //   }}
    // >
    <motion.div
      // variants={mvariants}
      // animate={nav ? "open" : "closed"}
      // transition={{ duration: 0.5 }}
      ref={ref}
      className={
        !nav
          ? "hidden"
          : "md:hidden absolute dark:bg-gray-800 bg-zinc-200 w-screen text-white mx-auto font-yanone text-lg"
      }
    >
      <motion.div
        // variants={mvariants}
        // animate={nav ? "open" : "closed"}
        // transition={{ duration: 0.5 }}
        className="absolute top-4 right- w-screen"
      >
        <motion.ul
          variants={mvariants}
          animate={nav ? "open" : "closed"}
          initial={false}
          transition={{ duration: 1 }}
          className="bg-gray-800 shadow-2xl leading-9 font-bold h-full w-screen py-5"
        >
          <motion.li
            variants={livariants}
            animate={nav ? "open" : "closed"}
            transition={{ duration: 0.5 }}
            className=" hover:bg-orange-500 hover:text-white px-5 py-1 border-b-[0.5px]"
          >
            <Link to="/" className="w-full flex items-center justify-between" onClick={close}>
              Home
            </Link>
          </motion.li>

          <motion.li
            variants={livariants}
            animate={nav ? "open" : "closed"}
            transition={{ duration: 0.5 }}
            className=" hover:bg-orange-500 hover:text-white px-5 py-1 border-b-[0.5px]"
          >
            <Link
              className=" w-full flex items-center justify-between"
              onClick={() => {
                setMenu((menuOpen) => !menuOpen);
              }}
            >
              About
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </Link>

            {/* <!-- Submenu starts --> */}
            <motion.ul
              initial={false}
              animate={menuOpen ? "open" : "closed"}
              variants={variants}
              className="bg-white  text-gray-800 shadow-2xl w-full z-40 absolute right-[0.01rem] top-28 "
            >
              <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                <Link to="/about" className="px-5 py-3 text-lg w-full flex items-center justify-between bg-slate-100" onClick={close}>
                  Who We Are
                </Link>
              </li>
              <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                <Link to="/board" onClick={close} className="text-lg px-5 py-3 w-full flex items-center justify-between">
                  Board of Directors
                </Link>
              </li>
              <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                <Link to="/office" onClick={close} className="text-lg px-5 py-3 w-full flex items-center justify-between bg-slate-100">
                  Office Management
                </Link>
              </li>
            </motion.ul>
            {/* <!-- Submenu ends --> */}
          </motion.li>

          <motion.li
            variants={livariants}
            animate={nav ? "open" : "closed"}
            transition={{ duration: 0.5 }}
            className=" hover:bg-orange-500 hover:text-white px-5 py-1 relative border-b-[0.5px]"
          >
            <Link
              className="flex items-center w-full justify-between"
              onClick={() => {
                setMenu1((menuOpen1) => !menuOpen1);
              }}
            >
              Services{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </Link>

            {/* <!-- Submenu starts --> */}

            <motion.ul
              initial={false}
              animate={menuOpen1 ? "open" : "closed"}
              variants={variants}
              className="bg-white text-gray-800 w-full z-30 absolute top-12 right-[0.01rem] shadow-2xl"
            >
              <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                <Link to="/loans" onClick={close} className="px-5 py-3 text-lg flex items-center justify-between bg-slate-100">
                  Loans
                </Link>
              </li>
              <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                <Link to="/savings" onClick={close} className="px-5 py-3 text-lg flex items-center justify-between ">
                  Savings
                </Link>
              </li>
              <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                <Link to="/guarantorship" onClick={close} className="px-5 py-3 text-lg flex items-center justify-between bg-slate-100">
                  Guarantorship
                </Link>
              </li>
            </motion.ul>
            {/* <!-- Submenu ends --> */}
          </motion.li>
          <motion.li
            variants={livariants}
            animate={nav ? "open" : "closed"}
            transition={{ duration: 0.5 }}
            className=" hover:bg-orange-500 hover:text-white px-5 py-1 border-b-[0.5px]"
          >
            <Link
              className="flex items-center  w-full justify-between"
              onClick={() => {
                setMenu2((menuOpen2) => !menuOpen2);
              }}
            >
              Membership
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </Link>

            {/* <!-- Submenu starts --> */}
            <motion.ul
              initial={false}
              animate={menuOpen2 ? "open" : "closed"}
              variants={variants}
              className="bg-white text-gray-800 shadow-2xl w-full z-20 absolute right-[0.01rem] top-[12.6rem]"
            >
              <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                <Link to="/individual" onClick={close} className="px-5 py-3 text-lg flex items-center justify-between bg-slate-100">
                  Individual Membership
                </Link>
              </li>
              <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                <Link to="/junior" onClick={close} className="px-5 py-3 text-lg flex items-center justify-between ">
                  Junior Mmembership
                </Link>
              </li>
              <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                <Link to="/chama" onClick={close} className="px-5 py-3 text-lg flex items-center justify-between bg-slate-100">
                  Group/Chama Membership
                </Link>
              </li>
            </motion.ul>
            {/* <!-- Submenu ends --> */}
          </motion.li>

          <motion.li
            variants={livariants}
            animate={nav ? "open" : "closed"}
            transition={{ duration: 0.5 }}
            className=" hover:bg-orange-500 hover:text-white px-5 py-1 border-b-[0.5px]"
          >
            <Link
              className="flex 1 items-center  w-full justify-between"
              onClick={() => {
                setMenu3((menuOpen3) => !menuOpen3);
              }}
            >
              Resources
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </Link>

            {/* <!-- Submenu starts --> */}
            <motion.ul
              initial={false}
              animate={menuOpen3 ? "open" : "closed"}
              variants={variants}
              className="bg-white text-gray-800 shadow-2xl w-full z-10 absolute right-[0.01rem] top-[15.4rem]"
            >
              <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                <Link to="/news" onClick={close} className="px-5 py-3 text-lg flex items-center justify-between bg-slate-100">
                  News
                </Link>
              </li>
              <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                <Link to="/downloads" onClick={close} className="px-5 py-3 text-lg flex items-center justify-between">
                  Downloads
                </Link>
              </li>
              <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                <Link to="/faq" onClick={close} className="px-5 py-3 text-lg flex items-center justify-between bg-slate-100">
                  FAQs
                </Link>
              </li>
            </motion.ul>
            {/* <!-- Submenu ends --> */}
          </motion.li>

          <motion.li
            variants={livariants}
            animate={nav ? "open" : "closed"}
            transition={{ duration: 0.5 }}
            className=" hover:bg-orange-500 hover:text-white px-5 py-1 "
          >
            <Link to="/contact" onClick={close} className="w-full flex items-center justify-between">
              Contact
            </Link>
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
    // </OutsideClickHandler>
  );
};

export default Mobile;
