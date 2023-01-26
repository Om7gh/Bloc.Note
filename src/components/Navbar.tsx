import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuRound } from "react-icons/cg";
import { RiCloseCircleFill } from "react-icons/ri";
import User from "./User.tsx";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <div className="logo">
        <h2>My Note.</h2>
      </div>
      <ul className={toggle ? "show " : "hide"}>
        <Link onClick={() => setToggle(false)} to="/">
          Home
        </Link>
        <Link onClick={() => setToggle(false)} to="/about">
          about
        </Link>
        <Link onClick={() => setToggle(false)} to="/notePage">
          my note
        </Link>
        {localStorage.getItem("user") ? null : (
          <Link onClick={() => setToggle(false)} to="/register">
            register
          </Link>
        )}
      </ul>
      {toggle == false ? (
        <CgMenuRound
          className="menu"
          onClick={() => setToggle(toggle ? false : true)}
        />
      ) : (
        <RiCloseCircleFill
          className="menu"
          onClick={() => setToggle(toggle ? false : true)}
        />
      )}
      {localStorage.getItem("user") && <User />}
    </nav>
  );
};

export default Navbar;
