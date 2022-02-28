import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (

      <div className="course-block col-lg-4 col-md-6 col-sm-12" >
              <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="image">
                  <a to={`/product/${product._id}`}><img src={product.images[0].url} alt={product.name} /></a>
                </div>
                <div className="lower-content">
                  <h4><Link to={`/product/${product._id}`}>{product.name}</Link></h4>
                  <div className="uni-name">{product.category}</div>
                  <div className="rating">
           
                    <strong><Rating {...options} /></strong>
                    <i>({product.numOfReviews} Reviews)</i>
                  </div>
                  <div className="price">{`Tk. ${product.price}`}</div>
                  <div className="clearfix">
                    <div className="pull-left">
                      <div className="hovers">         
                      <span> Status: </span> <b className={product.Stock < 1 ? "redColor" : "greenColor"}> {product.Stock < 1 ? "OutOfStock" : "InStock"}</b>
                      </div>
                    </div>
                    <div className="pull-right">
                      <Link  to={`/product/${product._id}`} className="enroll-now  text-center">More Details</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>



  );
};

export default ProductCard;
    // <Link className="productCard" to={`/product/${product._id}`}>
    //   <img src={product.images[0].url} alt={product.name} />
    //   <p>{product.name}</p>
    //   <div>
    //     <Rating {...options} />{" "}
    //     <span className="productCardSpan">
    //       {" "}
    //       ({product.numOfReviews} Reviews)
    //     </span>
    //   </div>
    //   <span>{`Tk. ${product.price}`}</span>
    // </Link>
   
      {/* Course Column */}