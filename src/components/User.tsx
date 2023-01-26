import React, { useState } from "react";
import Image from "../asset/Profile.png";
import { FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const getData = () => {
  let link = localStorage.getItem("user");
  if (link) {
    return JSON.parse(link);
  }
};

const User = () => {
  const [info, setInfo] = useState(getData());
  const [toggle, setToggle] = useState(false);
  const history = useNavigate();
  function logOut() {
    localStorage.removeItem("user");
    if (localStorage.getItem("user") == null) {
      setTimeout(() => history("/"), 2000);
    }
  }

  return (
    <div className="users">
      <div className="user">
        <img
          src={Image}
          alt="img"
          onClick={() => setToggle(toggle ? false : true)}
        />
      </div>
      <div
        className={toggle ? "info" : "hidden"}
        onMouseLeave={() => setToggle(false)}
      >
        <h2>{info.username}</h2>
        <h4>
          <CgProfile /> Profile
        </h4>
        <h4>
          <FiSettings /> Settings
        </h4>
        <button type="submit" onClick={logOut}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default User;
