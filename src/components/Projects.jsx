import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Snake Eating Game",
      description: "A simple snake game where the snake grows as it eats food.",
      github: "https://github.com/AshirbadNanda/Snake-Eating-game",
    },
    {
      name: "Rock Paper Scissor Game",
      description:
        "A classic rock-paper-scissor game where you play against the computer.",
      github: "https://github.com/AshirbadNanda/Rock-Paper-Scissor-Game",
    },
    {
      name: "GitHub Profile Searcher",
      description:
        "Search GitHub profiles and display their public information.",
      github: "https://github.com/AshirbadNanda/GITHUB-PROFILE-SEARCHER",
    },
    {
      name: "Agricultural Crop Yield Estimation Tool",
      description:
        "A tool to estimate crop yields based on historical data using machine learning.",
      github:
        "https://github.com/AshirbadNanda/Agricultural-Crop-Yield-Estimation-Tool",
    },
    {
      name: "Netflix UI Clone",
      description:
        "A Netflix UI clone created using HTML, CSS, and JavaScript.",
      github: "https://github.com/AshirbadNanda/Netflix-UI-CLONE",
    },
    {
      name: "Netflix MERN",
      description:
        "A full-stack Netflix clone built using MongoDB, Express, React, and Node.js (MERN).",
      github: "https://github.com/AshirbadNanda/NETFLIX_MERN",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10">
      <section className="text-center">
        <h1 className="text-4xl font-extrabold text-blue-400 mb-6">
          My Projects
        </h1>
        <p className="text-gray-300 text-lg mb-10">
          Explore some of my projects that demonstrate my full-stack and machine
          learning skills. Click on the links to check out the code on GitHub.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
              {project.name}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md inline-block transition-all duration-300"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Projects;
