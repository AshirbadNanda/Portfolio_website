import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="flex justify-between items-center  bg-slate-700 h-20">
        <h1 className="text-white text-2xl   font-extrabold ">
          ASHIRBAD'S PORTFOLIO
        </h1>

        <div className="flex justify-between items-center gap-2 text-white font-serif font-bold uppercase h-20 ">
          <Link className="hover:text-blue-400" to="/">
            Home
          </Link>
          <Link className="hover:text-blue-400" to="/about">
            about
          </Link>
          <Link className="hover:text-blue-400" to="/projects">
            projects
          </Link>
          <Link className="hover:text-blue-400" to="/contacts">
            contacts
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
