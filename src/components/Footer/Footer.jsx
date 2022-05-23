import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <a className="atag" href="mailto:hammadn788@gmail.com" color="white"><span>hammadn788@gmail.com</span></a>
        <div className="f-icons">
      <a href="https://www.instagram.com/hammad2980/">    <Insta color="white" size={"3rem"} /></a>
         <a href="https://www.facebook.com/hammad.nadeem.50767"> <Facebook color="white" size={"3rem"} /></a>
         <a href="https://github.com/hammad-air"> <Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
