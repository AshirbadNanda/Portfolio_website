import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="flex flex-col items-center justify-center text-center  px-4">
        <h2 className="text-4xl font-bold text-blue-300 mb-4 pt-10">
          Hi, I'm Ashirbad Nanda
        </h2>
        <p className="text-lg text-gray-300 max-w-xl pt-10">
          I am a passionate Full Stack Web Developer skilled in creating dynamic
          and responsive web applications using modern technologies like React,
          Node.js, Express.js, and MongoDB.
        </p>
        <div className="mt-6">
          <Link
            to="/projects"
            className="bg-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition"
          >
            View My Work
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mt-16 px-8 h-96">
        <h3 className="text-3xl font-bold text-center text-blue-400 mb-8">
          Skills & Technologies
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
            "Python",
            "Git/GitHub",
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 py-4 rounded-lg shadow-md hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="mt-16 bg-gray-800 text-center py-4">
        <p className="text-gray-400">
          Designed & Built by Ashirbad Nanda © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default Home;
