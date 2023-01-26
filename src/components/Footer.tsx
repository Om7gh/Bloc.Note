import React from "react";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <h3>Copyright &copy; {year}</h3>
      <div className="social-media">
        <a href={"https://web.facebook.com/omar.ghazi.7549185"} target="_blank">
          <FiFacebook />
        </a>
        <a
          href={"https://www.linkedin.com/in/omar-ghazi-b41494239/"}
          target="_blank"
        >
          <FiLinkedin />
        </a>
        <a href={"https://www.instagram.com/om7_gh/"} target="_blank">
          <FiInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
