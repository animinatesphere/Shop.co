// In NewArrivals.js
import React from "react";
import { Link } from "react-router-dom"; // If using React Router
import "./NewArrivals.css";
import products from "../product/Products";

const NewArrivals = () => {
  // No need to define products array here, it's imported

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= Math.floor(rating) ? "star filled" : "star"}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="new-arrivals-section">
      <div className="arrivals-container">
        <h2 className="section-title">NEW ARRIVALS</h2>

        <div className="product-grid">
          {products.slice(0, 4).map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="product-card"
            >
              <div className="product-image">
                <img src={product.image1} alt={product.name} />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-rating">
                  <StarRating rating={product.rating} />
                  <span className="reviews-count">({product.reviews})</span>
                </div>
                <div className="product-price">
                  <span className="current-price">${product.price}</span>
                  {product.discount && (
                    <>
                      <span className="original-price">
                        ${product.originalPrice}
                      </span>
                      <span className="discount">{product.discount}</span>
                    </>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="view-all-container">
          <Link to="/more-new-arrival">
            <button className="view-all-btn">View All</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
