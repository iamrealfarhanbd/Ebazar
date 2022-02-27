import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <h1>For More Details or give Us Good Suggestion Please mail us</h1>
      <a className="mailBtn" href="mailto:iamfarhan09@gmail.com">
        <Button>Contact: iamfarhan09@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
