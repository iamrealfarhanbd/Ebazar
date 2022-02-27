import React from "react";
// import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import {FaSearch} from 'react-icons/all'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { useSelector } from "react-redux";
// AiOutlineShoppingCart
// const options = {
  
//   burgerColorHover: "#eb4034",
//   logo,
//   logoWidth: "20vmax",
//   navColor1: "white",
//   logoHoverSize: "10px",
//   logoHoverColor: "#eb4034",
//   link1Text: "Home",
//   link2Text: "Products",
//   link3Text: "Contact",
//   link4Text: "About",
//   link1Url: "/",
//   link2Url: "/products",
//   link3Url: "/contact",
//   link4Url: "/about",
//   link1Size: "1.3vmax",
//   link1Color: "rgba(35, 35, 35,0.8)",
//   nav1justifyContent: "flex-end",
//   nav2justifyContent: "flex-end",
//   nav3justifyContent: "flex-start",
//   nav4justifyContent: "flex-start",
//   link1ColorHover: "#eb4034",
//   link1Margin: "1vmax",
//   profileIconUrl: "/login",
//   profileIconColor: "rgba(35, 35, 35,0.8)",
//   searchIconColor: "rgba(35, 35, 35,0.8)",
//   cartIconColor: "rgba(35, 35, 35,0.8)",
//   profileIconColorHover: "#eb4034",
//   searchIconColorHover: "#eb4034",
//   cartIconColorHover: "#eb4034",
//   cartIconMargin: "1vmax",
// };

const Header = ({ user }) => {
  const { cartItems } = useSelector((state) => state.cart);
  // return <ReactNavbar {...options} />;
  return (
    <> 
      <nav className=" navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"> <img className="nav-logo" src={logo} alt="Ebazar" />  </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="Navbar navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</ Link >
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/contact"}>Contact</ Link >
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/about"}>About</ Link >
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/products"}>Product</ Link >
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/search"}><FaSearch/></ Link >
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/cart"}><ShoppingCartIcon style={{ color: cartItems.length > 0 ? "tomato" : "unset" }} />{cartItems.length}</ Link >
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Login"}>Login</ Link >
              </li>
             
          
            </ul>
          </div>
        </div>
      </nav>
     </>
  )
};

export default Header;
