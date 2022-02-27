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
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
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
          <div className="aboutSectionContainer2">
          <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/ddsstur6v/image/upload/v1644913930/images/WhatsApp_Image_2022-02-13_at_10.14.01_PM_cxm6ls.jpg"
              alt="Founder"
            />
            <Typography>Ashfaq Mahbub Mahi</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
          </div>
        </div>
            <span className="about-project">
            This is our versity Project Ecommerce wesbite made by Farhan And Mahi.
            </span>
            <span className="about-project">
                Which name is Ebazar
            </span>
      </div>
    </div>
  );
};

export default About;
