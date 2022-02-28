import React, { Fragment, useEffect } from "react";

import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          
          <section className="banner-section">
          <div className="auto-container">
                <div className="pattern-layer-six" style={{backgroundImage: 'url(/assets/images/main-slider/pattern-4.png)'}}></div>
          <div className="pattern-layer-seven" style={{backgroundImage: 'url(/assets/images/main-slider/pattern-5.png)'}}></div>
          <div className="pattern-layer-eight" style={{backgroundImage: 'url(/assets/images/main-slider/icon-2.png)'}}></div>
          <div className="row clearfix">
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="pattern-layer-one" style={{backgroundImage: 'url(/assets/images/main-slider/pattern-1.png)'}}></div>
                <div className="pattern-layer-two" style={{backgroundImage: 'url(/assets/images/main-slider/pattern-2.png)'}}></div>
                <div className="pattern-layer-three" style={{backgroundImage: 'url(/assets/images/main-slider/icon-1.png)'}}></div>
                <div className="pattern-layer-four" style={{backgroundImage: 'url(/assets/images/main-slider/pattern-3.png)'}}></div>
                <div className="pattern-layer-five" style={{backgroundImage: 'url(/assets/images/main-slider/icon-2.png)'}}></div>
                <div className="image">
                  <img src="/assets/images/main-slider/ebazarBanner.png " alt="" />
                </div>
                <div className="image-two">
                  <img src="/assets/images/main-slider/pattern-6.png" alt="" />
                </div>
                <div className="image-content" style={{backgroundImage: 'url(/assets/images/main-slider/image-4.png)'}}>
                  <p>87% of people <br/> Buying</p>
                </div>
              </div>
			  	</div>
				
				<div className="content-column col-lg-6 col-md-12 col-sm-12">
					<div className="inner-column">
						<div className="title">Buy Your Product From Ebazar</div>
						<h1>For a better Service and a better life</h1>
						<div className="btns-box">
							<Link to="/products"  className="theme-btn btn-style-one" ><span className="txt">Browse Products </span></Link>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</section>
          {/* Home page banner section End */}


          {/* <h2 className="homeHeading">Featured Products</h2>




          <div className="container" id="container"> */}
           <section className="courses-section">
        <div className="pattern-layer" style={{backgroundImage: 'url(/assets/images/background/pattern-2.png)'}} />
        <div className="circle-one paroller" data-paroller-factor="-0.20" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="horizontal" />
        <div className="circle-two paroller" data-paroller-factor="0.20" data-paroller-factor-lg="-0.20" data-paroller-type="foreground" data-paroller-direction="horizontal" />
        <div className="auto-container mx-auto">
          <div className="sec-title centered">
            <h2>Discover the perfect Product for you.</h2>
            <div className="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur Duis aute irure dolor in reprehenderit in</div>
          </div>
          <div className="row clearfix">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
					

        </div>
        <div className="btns-box mx-auto text-center">
							<Link to="/products"  className="theme-btn btn-style-one" ><span className="txt">Browse Products </span></Link>
						</div> 
        </div>
      </section>
    

          
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
