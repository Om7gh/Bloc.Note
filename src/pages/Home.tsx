import React from "react";
import image from "../asset/home.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="left">
        <h2>Hey and welcome in Note Book.</h2>
        <h4>Small platform</h4>
        <p>
          We offer you a small service that you can save your important note
          easy
        </p>
        <button>
          <Link to={"/notePage"} style={{ textDecoration: "none", color:"#18171d" }}>Get Started</Link>
        </button>
      </div>
      <div className="right">
        <img src={image} alt="image" width={500} />
      </div>
    </div>
  );
};

export default Home;
