import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      {/* Intro Section */}
      <section className="text-center py-10">
        <h1 className="text-5xl font-bold text-blue-400 mb-4">Who Am I?</h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          I’m Ashirbad Nanda, a **Full Stack Web Developer** with a passion for
          crafting seamless, responsive, and efficient web applications. I
          specialize in **React.js**, **Node.js**, and **MongoDB**, and I love
          turning ideas into impactful digital solutions.
        </p>
      </section>

      {/* Core Values */}
      <section className="mt-16 px-4">
        <h2 className="text-3xl font-bold text-blue-300 text-center mb-8">
          Core Values
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              title: "Creativity",
              description:
                "Innovative problem-solving and out-of-the-box thinking.",
            },
            {
              title: "Efficiency",
              description: "Delivering optimized and performant solutions.",
            },
            {
              title: "Collaboration",
              description: "Believing in teamwork to build better software.",
            },
            {
              title: "Learning",
              description: "Continuously expanding knowledge in technology.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-md w-72 hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="mt-16 px-4">
        <h2 className="text-3xl font-bold text-blue-300 text-center mb-8">
          Achievements
        </h2>
        <ul className="text-gray-300 list-disc max-w-2xl mx-auto px-4">
          <li>
            Built a **Netflix Clone** using React.js, showcasing advanced
            frontend and API integration skills.
          </li>
          <li>
            Created a **Real-Time Chat Application** with Socket.io for seamless
            user communication.
          </li>
          <li>
            Designed a chatbot with **IBM Watson Assistant**, enhancing user
            interaction.
          </li>
          <li>
            Predicted crop yields using **Machine Learning**, achieving 80%
            accuracy.
          </li>
        </ul>
      </section>

      {/* Goals Section */}
      <section className="mt-16 px-4">
        <h2 className="text-3xl font-bold text-blue-300 text-center mb-8">
          Future Goals
        </h2>
        <div className="text-center text-gray-300 max-w-3xl mx-auto">
          <p className="mb-4">
            My ultimate goal is to lead innovative projects that drive change in
            industries through cutting-edge web development and AI. I’m
            currently exploring advanced machine learning and diving deeper into
            backend optimization.
          </p>
          <p>
            I aspire to create impactful solutions that not only solve problems
            but also inspire others to innovate.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 bg-gray-700 text-center py-4 w-full">
        <p className="text-gray-400">
          Designed & Built by Ashirbad Nanda © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default About;
