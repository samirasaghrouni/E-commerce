import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <InstagramIcon></InstagramIcon>
            <FacebookIcon></FacebookIcon>
            < TwitterIcon></ TwitterIcon>
        </div>
        <p>$copy:2021 darellaula.com</p>
      
    </div>
  );
}

export default Footer;
