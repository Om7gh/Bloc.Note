import React from "react";
import image from "../asset/about.svg";

const About = () => {
  return (
    <div className="about">
      <div className="left">
        <img src={image} alt="image" width={400} />
      </div>
      <div className="right">
        <h2>what about ?</h2>
        <p>
          i'm Omar a front-end developer , I build this small app for testing
          new skills , in this app you can create and save your important note,
          that you can return on it whenever you want. I hope you like it.
        </p>
      </div>
    </div>
  );
};

export default About;
