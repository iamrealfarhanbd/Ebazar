import React from "react";
// import playStore from "../../../images/playstore.png";
// import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
	
  return (


    <footer className="main-footer">
		<div className="circle-layer"></div>
		<div className="pattern-layer-one" style={{backgroundImage: 'url(images/background/pattern-12.png)'}}></div>
		<div className="pattern-layer-two" style={{backgroundImage: 'url(images/background/pattern-13.png)'}}></div>
		<div className="pattern-layer-three" style={{backgroundImage: 'url(images/background/pattern-14.png)'}}></div>
		<div className="pattern-layer-four" style={{backgroundIimage: 'url(images/background/pattern-13.png)'}}></div>
    	<div className="auto-container">
            <div className="widgets-section">
            	<div className="row clearfix">
					<div className="footer-column col-lg-5 col-md-12 col-sm-12">
						<div className="footer-widget logo-widget">
							<div className="logo">
								<Link to="/"><img className="nav-logo" src={logo} alt="Ebazar" /> </Link>
							</div>
							<ul className="info-list">
								<li>Tel:<Link to="tel:+8801787295541"> 017-8729-5541</Link></li>
								<li>Email:<Link to="iamfarhan09@gmail.com"> iamfarhan09@gmail.com</Link></li>
							</ul>
							<ul className="social-box">
								<li className="twitter"><Link target="_blank" to={{ pathname: "http://www.twitter.com/iamrealfarhanbd" }} className="fa fa-twitter"></Link ></li>
								<li className="pinterest"><Link target="_blank" to={{ pathname: "http:/www.pinterest.com/iamrealfarhanbd" }} className="fa fa-pinterest-p"></Link ></li>
								<li className="facebook"><Link target="_blank" to={{ pathname: "http://www.facebook.com/iamrealfarhanbd"}} className="fa fa-facebook-f"></Link ></li>
								<li className="dribbble"><Link target="_blank" to={{ pathname: "http://www.dribbble.com/iamrealfarhanbd" }} className="fa fa-dribbble"></Link ></li>
							</ul>
							<div className="text">Get started now and take advantage of <br/> our Valentine's day offer Now.</div>
						</div>
					</div>
					
					<div className="footer-column col-lg-7 col-md-12 col-sm-12">
						<div className="row clearfix">
							<div className="column col-lg-4 col-md-4 col-sm-12">
								<h5>About</h5>
								<ul className="list">
                <li>
                <Link  to="/">Home</ Link >
              </li>
              <li>
                <Link  to={"/contact"}>Contact</ Link >
              </li>
              <li>
                <Link  to={"/about"}>About</ Link >
              </li>
              <li>
                <Link  to={"/products"}>Product</ Link >
              </li>
     
								</ul>
							</div>
							<div className="column col-lg-4 col-md-4 col-sm-12">
								<h5>Resourse</h5>
								<ul className="list">
									<li><Link to="#">Terms of use</Link ></li>
									<li><Link to="#">Contact Us</Link ></li>
									<li><Link to="#">FAQ</Link ></li>
									<li><Link to="#">Our Partners</Link ></li>
									<li><Link to="#">Redeem Voucher</Link ></li>
								</ul>
							</div>
						</div>
					</div>
					
				</div>
			</div>
            <div className="lower-box">
            	<div className="row clearfix">
					<div className="col-lg-6 col-lg-6 col-sm-12">
						<div className="subscribe-form">
							<h6>Newsletter</h6>
							<form method="post" action="mailto:iamfarhan09@gmail.com">
								<div className="form-group">
									{/* <input type="email" name="email" placeholder="iamfarhan" required value="iamfarhan09@gmail.com"/> */}
                  <li className="input-value">iamfarhan09@gmail.com</li>
     
									<button type="submit" className="submit-btn"><span className="icon flaticon-right-arrow-2"></span></button>
								</div>
							</form>
						</div>
					</div>
					<div className="col-lg-6 col-lg-6 col-sm-12">
						<div className="text">Do you have any Query? We need Your Suggestion <br/> you can give us your opinion,</div>
						
					</div>
				</div>
			</div>
			
			<div className="footer-bottom">
				<div className="row clearfix">
					<div className="copyright-column col-lg-6 col-md-12 col-sm-12">
						<div className="copyright">Copyright 2022, All Right Reserved</div>
					</div>
					
					<div className="nav-column col-lg-6 col-md-12 col-sm-12">
						<ul>
							<li><Link to="about.html">SiteMap</Link ></li>
							<li><Link to="about.html">Privacy Policy</Link ></li>
						</ul>
					</div>
					
				</div>
			</div>
			
		</div>
	</footer>
  );
};

export default Footer;
    // <footer id="footer">
    //   <div className="leftFooter">
    //     <h4>DOWNLOAD OUR APP</h4>
    //     <p>Download App for Android and IOS mobile phone</p>
    //     <img src={playStore} alt="playstore" />
    //     <img src={appStore} alt="Appstore" />
    //   </div>

    //   <div className="midFooter">
    //     <h1>Ebazar.</h1>
    //     <p>High Quality is our first priority</p>

    //     <p>Copyrights 2022 &copy; Farhan And Mahi</p>
    //   </div>

    //   <div className="rightFooter">
    //     <h4>Follow Us</h4>
    //     <Link to="http://instagram.com/iamrealfarhanbd">Instagram</Link >
    //     <Link to="http://instagram.com/iamrealfarhanbd">Facebook</Link >
    //   </div>
    // </footer>
