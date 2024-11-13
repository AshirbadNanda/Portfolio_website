import React from "react";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Contacts = () => {
  return (
    <>
      <div className="text-4xl bg-slate-600 font-serif font-bold h-60 uppercase text-center pt-24 text-white">
        For Contact Use Here
      </div>
      <form className="flex flex-col h-[540px] justify-center  items-center bg-slate-800 text-white gap-7 border-yellow-50">
        <input
          className="w-[25%] h-10 "
          type="text"
          placeholder="Enter Your FullName"
        />
        <input
          className="w-[25%] h-10"
          type="number"
          placeholder="Contact Number"
        />
        <input className="w-[25%] h-10" type="email" placeholder="Emailid" />
        <input
          className="bg-slate-900 text-white text-2xl w-24"
          type="submit"
        />
      </form>
      <div className=" bg-slate-600 text-2xl text-white flex justify-between items-center h-10">
        <a
          className="flex justify-center items-center"
          href="https://www.youtube.com/@ashirbadnanda9293"
        >
          Youtube
          <PiYoutubeLogoFill />
        </a>
        <a
          className="flex justify-center items-center "
          href="https://www.linkedin.com/"
        >
          LinkedIn
          <FaLinkedin />
        </a>
        <a
          className="flex justify-center items-center"
          href="https://github.com/"
        >
          GitHub
          <FaGithub />
        </a>
        <a className="flex justify-center items-center" href="">
          Facebook
          <FaFacebook />
        </a>
      </div>
      <center className="bg-slate-900 text-white ">
        Designed & Built by Ashirbad Nanda © 2024
      </center>
    </>
  );
};

export default Contacts;
