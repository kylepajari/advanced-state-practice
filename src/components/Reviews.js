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
            const rating = review.rating;
            const stars = [];
            for (let i = 0; i < rating; i++) {
              stars.push(<span key={i} className="glyphicon glyphicon-star" />);
            }
            return (
              <div key={index} style={{ border: "1px solid black" }}>
                {review.description}
                <br />
                {stars}
              </div>
            );
          })}
        </div>
      );
    }
    return (
      <div>
        <button type="button" onClick={this.toggleReviews}>
          Toggle Reviews
        </button>
      </div>
    );
  }
}

Reviews.propTypes = {
  product: PropTypes.object
};

export default Reviews;
