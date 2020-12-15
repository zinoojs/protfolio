import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
function Navbar() {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center text-red-100 py-6 px-3 mr-4 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Zinoo
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center text-red-200 py-3 px-3 my-6 hover:text-green-800 text-lg"
          >
            About
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center text-red-200 py-3 px-3 my-6 hover:text-green-800 rounded text-lg"
          >
            Blog
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center text-red-200 py-3 px-3 my-6 hover:text-green-800 rounded text-lg"
          >
            Project
          </NavLink>
        </nav>
        <div className="inline-flex p-3 my-6">
          <SocialIcon
            url="https://github.com/zinoojs"
            fgColor="#fff"
            target="_blank"
            className="mr-4"
            style={{ width: 35, height: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/zin-oo/"
            fgColor="#fff"
            target="_blank"
            className="mr-4"
            style={{ width: 35, height: 35 }}
          />
          <SocialIcon
            url="https://www.facebook.com/zinoo.dex"
            fgColor="#fff"
            target="_blank"
            className="mr-4"
            style={{ width: 35, height: 35 }}
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
