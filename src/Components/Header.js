import * as React from "react";
import Name from "./Images/Name.png";
import {Link, useNavigate} from "react-router-dom";


export default function Header() {
  const navigate = useNavigate()
  const handleClick = () => {
    localStorage.clear();
    const path= '/'
    navigate(path)
  };
  return (
    <nav>
       <header>
    </header>
      <div className="flex ">
        <div className=" ms-15 p-4 bg-blue-900 w-1/5 md:flex utility justify-center">
          <img src={Name} alt="Furever Logo" className=" h-10 object-contain" />
        </div>

        <div className="flex bg-blue-900 w-3/5 md:flex utility items-center justify-center">
          <marquee className="text-base text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-urbanist">
            Welcome to Furevere! A Home Away from Home for Furry Friends
          </marquee>
        </div>

        <div className=" bg-blue-900 w-1/5 md:flex utility justify-center">
          <button
            onClick={handleClick}
            className="hover:scale-[1.01] ease-in-out active:scale-[.98] active:duration-75 transition-all py-2 rounded-md bg-blue-900 text-white sm:text-md md:text-lg lg:text-xl xl:text-2xl font-urbanist p-2"
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
}
