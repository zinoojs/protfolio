import React from "react";
import pic from "../img/three.jpg";
function Home() {
  return (
    <main>
      <img src={pic} alt="pic" className="absolute object-fit w-full h-full" />
      <section className="relative justify-center min-h-screen flex pt-52 lg:pt-64 lg:px-8">
        <h1 className="lg:text-6xl sm:text-3xl font-bold text-red-600 cursive leading-none lg:leading-snug home-name">
          Helo, I'm Kyawzinoo.
        </h1>
      </section>
    </main>
  );
}

export default Home;
