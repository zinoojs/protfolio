import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import sanityClient from "../client";
function Project() {
  const [project, setProject] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags,
        }`
      )
      .then((data) => setProject(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl justify-center flex mb-5 cursive">
          Project Lists
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome my projects page!
        </h2>
        <section className="grid grid-cols-2 gap-8">
          {project &&
            project.map((project, index2) => (
              <article
                className="relative rounded-lg shawdow-xl bg-white p-16"
                key={index2}
              >
                <span>
                  <h3 className="text-gray-800 hover:text-red-700 mb-2 font-bold text-3xl">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      alt={project.title}
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="text-gray-500 text-s space-x-4">
                    <span>
                      <strong className="font-bold">Finished on </strong>:{""}
                      {new Date(project.date).toLocaleDateString()}
                    </span>
                    <span>
                      <strong className="font-bold"> Company</strong>: {""}
                      {project.place}
                    </span>
                    <span>
                      <strong className="font-bold">Type</strong>:{""}
                      {project.projectType}
                    </span>
                    <p className="my-6 text-lg text-gray-700 leading-relaxed">
                      {project.desctiption}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-red-500 text-xl font-bold hover:underline hover:text-red-400"
                    >
                      View the project {""}
                      <span role="img" aria-label="right pointer">
                        ⏩{" "}
                      </span>
                    </a>
                  </div>
                </span>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}

export default Project;
