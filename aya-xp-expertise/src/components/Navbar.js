import React from "react";
import kanji from "../kanji.svg";

export const Navbar = () => (
  <nav className="navbar is-fixed-top" aria-label="main navigation">
    <div className="navbar-brand flex flex-row">
      <a className="navbar-item self-start">
        <img src={kanji} alt="Aya experience" width="28" height="28" />
      </a>
      <div className="ttu self-center ">Team</div>
    </div>
  </nav>
);
