import React from "react";
import GithubLogo from "../assets/GITHUBicon.png";

function Footer() {
  return (
    <footer className="mb-1 pb-1 flex justify-around items-center py-4 mx-auto text-center flex-col container lg:flex-row gap-5 lg:gap-0 bg-white text-black">
      <div className="text-black bg-white">
        <h4 className="text-black bg-white text-md">
          &copy; {new Date().getFullYear()}
        </h4>
      </div>
    </footer>
  );
}

export default Footer;
