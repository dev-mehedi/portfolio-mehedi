import React from "react";

const projects = [
  {
    title: "E-commerce Platform",
    desc: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include real-time inventory management, user authentication, and a responsive design.",
    image: "https://via.placeholder.com/400x200",
    demo: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    desc: "A React-based task manager with real-time updates using WebSockets. Includes features like drag-and-drop task organization, team collaboration, and data visualization.",
    image: "https://via.placeholder.com/400x200",
    demo: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    desc: "A responsive portfolio website built with React and CSS. Features smooth scrolling, dynamic content loading, and a custom-built slider component.",
    image: "https://via.placeholder.com/400x200",
    demo: "#",
    github: "#",
  },
];

const ProjectCard: React.FC<{ project: (typeof projects)[0] }> = ({
  project,
}) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6 flex-grow flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.desc}</p>
      </div>
      <div className="flex space-x-4">
        <a
          href={project.demo}
          className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
        >
          Live Demo
        </a>
        <a
          href={project.github}
          className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 transition-colors"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
);

const PersonalProjectComponent: React.FC = () => {
  return (
    <>
      <section id="projects" className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Personal Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/projects"
              className="inline-flex items-center text-gray-700 hover:text-gray-900"
            >
              View More Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalProjectComponent;
