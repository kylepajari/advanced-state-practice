import React, { Component } from "react";
import PropTypes from "prop-types";

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showReviews: false,
      product: props.product
    };
  }

  toggleReviews = () => {
    this.setState({ showReviews: !this.state.showReviews });
  };

  render() {
    if (this.state.showReviews) {
      return (
        <div>
          <button onClick={this.toggleReviews}>Toggle Reviews</button>
          {this.state.product.reviewsArray.map((review, index) => {
            return (
              <div key={index}>
                {review.description}
                {review.rating}
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div>
          <button type="button" onClick={this.toggleReviews}>
            Toggle Reviews
          </button>
        </div>
      );
    }
  }
}

Reviews.propTypes = {
  product: PropTypes.object
};

export default Reviews;
