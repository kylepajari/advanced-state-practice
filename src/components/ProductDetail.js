import React from "react";
import Reviews from "./Reviews";
import PropTypes from "prop-types";

function ProductDetail(props) {
  const { name, description, rating, imgUrl } = props.product;
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<span key={i} className="glyphicon glyphicon-star" />);
  }

  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img style={{ width: "320px", height: "150px" }} src={imgUrl} alt="" />
        <div className="caption">
          <h4>
            <a href="#">{name}</a>
          </h4>
          <p>{description}</p>
        </div>
        <div className="ratings">
          <p className="pull-right">15 reviews</p>
          <p>{stars}</p>
          <Reviews product={props.product} />
        </div>
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object
};
export default ProductDetail;
