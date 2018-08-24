import React from "react";
import kanji from "../kanji.svg";
import computer from "../computer_animated.svg";

export const Navbar = () => (
  <nav className="navbar is-fixed-top" aria-label="main navigation">
    <div className="navbar-brand flex flex-row items-center">
      <a
        className="navbar-item dib self-center"
        href="http://aya-experience.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={kanji} alt="Aya experience" height="20" width="20" />
      </a>
      <div className="ttu tc flex-auto self-center">Team</div>
      <div className="self-center pt2 pr2">
        <img src={computer} alt="Aya experience" width="30" />
      </div>
    </div>
  </nav>
);
