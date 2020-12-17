import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import robo from "../img/dev.jpg";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
function About() {
  const [author, setAuthor] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);
  if (!author) return <div>Loading ...</div>;
  return (
    <main className="relative">
      <img src={robo} alt="robotic" className="absolute w-full rounded-lg " />
      <div className="p-10 lg:pt-48 mx-auto relative container">
        <section className="bg-green-800 lg:flex rounded-lg shadow-2xl p-20">
          <img
            src={urlFor(author.authorImage).url()}
            alt={author.name}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-green-300 mb-4">
              hi!, I'm {""}
              <span className="text-green-100">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContent
                blocks={author.bio}
                projectId="jvzd1uth"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;
