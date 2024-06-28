import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AppLogo from "../assets/AppLogo.png";
import { GlobalContext } from "../context/GlobalContext";
import GithubLogo from "../assets/GITHUBicon.png";

function Header() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <nav className="flex justify-between  items-center py-6 mx-auto text-center flex-col container lg:flex-row gap-5 lg:gap-0 ">
      <h2 className="font-semibold text-2xl">
        <NavLink to={"/"}>
          <img src={AppLogo} alt="Logo" className="w-12 bg-white" />
        </NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          placeholder="🔍 Search Items ... 🍕🍔"
          className="bg-white/75 p-3 py-2 px-8 rounded-full outline-none lg:w-96 shadow-lg border border-gray-100 focus:border-gray-200 shadow-red-100 focus:shadow-red-200"
        />
      </form>

      <ul className="flex gap-5">
        <li className="py-1 hover:scale-105 transition-transform">
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li className="py-1 hover:scale-105 transition-transform">
          <NavLink
            to={"/favourite"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Favourites
          </NavLink>
        </li>
        <li className=" hover:scale-105 transition-transform">
          <a className="text-xl" href="https://github.com/AVIN4SH">
            <img
              src={GithubLogo}
              alt="Github Logo"
              className="w-9  bg-black rounded-full"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
