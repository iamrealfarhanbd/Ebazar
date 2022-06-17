import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/iamrealfarhanbd/";
  };
  return (
    <div className="aboutSection container">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div className="col-md-6">
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/ddsstur6v/image/upload/v1644755549/images/farhan_vob815.jpg"
              alt="Founder"
            />
            <Typography>Farhan Ahmed</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>

          </div>
        </div>
            <span className="about-project">
            This is our versity Project Ebazar wesbite made by Farhan And Mahi.
            </span>
            <span className="about-project">
                Which name is Ebazar
            </span>
      </div>
    </div>
  );
};

export default About;
