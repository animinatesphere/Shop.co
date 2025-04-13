// In ProductDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // If using React Router
import { getProductById } from "../product/Products";
import "../Productdetails/ProductDetail.css"; // Create a separate CSS file for product details

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from URL params
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Convert id from string to number since URL params are strings
    const productId = parseInt(id, 10);
    const foundProduct = getProductById(productId);

    if (foundProduct) {
      setProduct(foundProduct);
      // Set first size and color as default if available
      if (foundProduct.sizes && foundProduct.sizes.length > 0) {
        setSelectedSize(foundProduct.sizes[0]);
      }
      if (foundProduct.colors && foundProduct.colors.length > 0) {
        setSelectedColor(foundProduct.colors[0]);
      }
    }
  }, [id]);

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

  const handleAddToCart = () => {
    // Implement your add to cart logic here
    console.log("Added to cart:", {
      product,
      size: selectedSize,
      color: selectedColor,
      quantity,
    });
    // You would typically dispatch an action here if using Redux
    // or call a context function if using Context API
  };

  if (!product) {
    return <div className="loading">Loading product...</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-detail-info">
          <h1 className="product-detail-name">{product.name}</h1>

          <div className="product-detail-rating">
            <StarRating rating={product.rating} />
            <span className="reviews-count">({product.reviews} reviews)</span>
          </div>

          <div className="product-detail-price">
            <span className="current-price">${product.price}</span>
            {product.discount && (
              <>
                <span className="original-price">${product.originalPrice}</span>
                <span className="discount">{product.discount}</span>
              </>
            )}
          </div>

          <p className="product-description">{product.description}</p>

          {product.sizes && (
            <div className="product-sizes">
              <h3>Size</h3>
              <div className="size-options">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-button ${
                      selectedSize === size ? "selected" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.colors && (
            <div className="product-colors">
              <h3>Color</h3>
              <div className="color-options">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`color-button ${
                      selectedColor === color ? "selected" : ""
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="quantity-selector">
            <h3>Quantity</h3>
            <div className="quantity-controls">
              <button
                className="quantity-button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="quantity-value">{quantity}</span>
              <button
                className="quantity-button"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="product-actions">
            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="wishlist-button">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
