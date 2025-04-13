import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../product/Products";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import "../Productdetails/ProductDetail.css";
import Navbar from "../navbar/Navbar";
import products from "../product/Products";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("details");
  const [mainImage, setMainImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [relatedProductsByCategory, setRelatedProductsByCategory] = useState(
    []
  );

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const productId = parseInt(id, 10);
        const foundProduct = getProductById(productId);

        if (foundProduct) {
          setProduct(foundProduct);
          setMainImage(foundProduct.image1);

          if (foundProduct.sizes && foundProduct.sizes.length > 0) {
            setSelectedSize(foundProduct.sizes[0]);
          }
          if (foundProduct.colors && foundProduct.colors.length > 0) {
            setSelectedColor(foundProduct.colors[0]);
          }

          // Find related products based on category
          const categoryProducts = products.filter(
            (p) =>
              p.category === foundProduct.category && p.id !== foundProduct.id
          );

          // Limit to 4 related products (or any number you prefer)
          setRelatedProductsByCategory(categoryProducts.slice(0, 4));
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const handleQuantityChange = (action) => {
    if (action === "increase") {
      setQuantity(quantity + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    console.log("Added to cart:", {
      product,
      size: selectedSize,
      color: selectedColor,
      quantity,
    });
    // Implement cart functionality here
  };

  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="star-rating">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={
              index < fullStars
                ? "star filled"
                : index === fullStars && hasHalfStar
                ? "star half-filled"
                : "star"
            }
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  if (isLoading) {
    return <div className="loading-container">Loading product...</div>;
  }

  if (!product) {
    return <div className="error-container">Product not found</div>;
  }

  // Sample reviews data
  const reviews = [
    {
      id: 1,
      author: "Sarah L.",
      rating: 5,
      date: "August 14, 2023",
      verified: true,
      content:
        "Love this shirt! The fit is perfect and the material is so comfortable. Would definitely buy more colors.",
    },
    {
      id: 2,
      author: "Alex R.",
      rating: 4,
      date: "August 12, 2023",
      verified: true,
      content:
        "The product is as described. The quality is exceptional and the design is simple yet effective. I've had many compliments while wearing it.",
    },
    {
      id: 3,
      author: "Ellen P.",
      rating: 5,
      date: "August 5, 2023",
      verified: true,
      content:
        "I bought this as a gift and the recipient absolutely loved it! Great quality and the design is unique. Fast shipping too.",
    },
    {
      id: 4,
      author: "Omar T.",
      rating: 3,
      date: "August 1, 2023",
      verified: true,
      content:
        "The color isn't exactly what I expected from the pictures, but the quality and fit are good. Might try a different color next time.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="product-page-container">
        <div className="breadcrumb">
          <span>Home</span> / <span>Shop</span> /{" "}
          <span>{product.category}</span> /{" "}
          <span className="current">{product.name}</span>
        </div>

        <div className="product-main-content">
          <div className="product-gallery">
            <div className="thumbnail-gallery">
              {product.image1 && (
                <div
                  className={`thumbnail ${
                    mainImage === product.image1 ? "active" : ""
                  }`}
                  onClick={() => handleImageClick(product.image1)}
                >
                  <img src={product.image1} alt={`${product.name} - View 1`} />
                </div>
              )}
              {product.image2 && (
                <div
                  className={`thumbnail ${
                    mainImage === product.image2 ? "active" : ""
                  }`}
                  onClick={() => handleImageClick(product.image2)}
                >
                  <img src={product.image2} alt={`${product.name} - View 2`} />
                </div>
              )}
              {product.image3 && (
                <div
                  className={`thumbnail ${
                    mainImage === product.image3 ? "active" : ""
                  }`}
                  onClick={() => handleImageClick(product.image3)}
                >
                  <img src={product.image3} alt={`${product.name} - View 3`} />
                </div>
              )}
              {product.image4 && (
                <div
                  className={`thumbnail ${
                    mainImage === product.image4 ? "active" : ""
                  }`}
                  onClick={() => handleImageClick(product.image4)}
                >
                  <img src={product.image4} alt={`${product.name} - View 4`} />
                </div>
              )}
            </div>

            <div className="main-image">
              <img src={mainImage || product.image1} alt={product.name} />
            </div>
          </div>

          <div className="product-info">
            <h1 className="product-title">{product.name}</h1>

            <div className="product-rating-reviews">
              <div className="rating-with-stars">
                <StarRating rating={product.rating} />
                <span className="rating-number">
                  {product.rating.toFixed(1)}
                </span>
              </div>
              <span className="review-count">({product.reviews} Reviews)</span>
            </div>

            <div className="product-price-section">
              <div className="price-info">
                <span className="current-price">${product.price}</span>
                {product.discount && (
                  <>
                    <span className="original-price">
                      ${product.originalPrice}
                    </span>
                    <span className="discount-badge">
                      {product.discount} OFF
                    </span>
                  </>
                )}
              </div>
              <p className="stock-info">
                Most people buy 2-4 items. Buy multiple items and save up to 20%
                off
              </p>
            </div>

            {product.colors && (
              <div className="product-colors-section">
                <h3>Color</h3>
                <div className="color-options">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`color-swatch ${
                        selectedColor === color ? "selected" : ""
                      }`}
                      style={{
                        backgroundColor: color.toLowerCase(),
                        border:
                          color.toLowerCase() === "white"
                            ? "1px solid #ddd"
                            : "none",
                      }}
                      onClick={() => setSelectedColor(color)}
                      aria-label={`Select ${color} color`}
                    />
                  ))}
                </div>
              </div>
            )}

            {product.sizes && (
              <div className="product-sizes-section">
                <div className="size-header">
                  <h3>Size</h3>
                  <button className="size-guide-btn">Size Guide</button>
                </div>
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

            <div className="product-actions-section">
              <div className="quantity-selector">
                <button
                  className="quantity-btn"
                  onClick={() => handleQuantityChange("decrease")}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="quantity-value">{quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={() => handleQuantityChange("increase")}
                >
                  +
                </button>
              </div>

              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                ADD TO CART
              </button>

              <button className="wishlist-btn">
                <AiOutlineHeart size={20} />
              </button>

              <button className="share-btn">
                <FiShare2 size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="product-tabs">
          <div className="tab-navigation">
            <button
              className={`tab-btn ${activeTab === "details" ? "active" : ""}`}
              onClick={() => setActiveTab("details")}
            >
              Product Details
            </button>
            <button
              className={`tab-btn ${activeTab === "shipping" ? "active" : ""}`}
              onClick={() => setActiveTab("shipping")}
            >
              Shipping & Returns
            </button>
            <button
              className={`tab-btn ${activeTab === "reviews" ? "active" : ""}`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "details" && (
              <div className="product-details">
                <p>{product.description}</p>
              </div>
            )}

            {activeTab === "shipping" && (
              <div className="shipping-returns">
                <h3>Shipping Information</h3>
                <p>Free standard shipping on orders over $100</p>
                <p>Standard shipping: 3-5 business days</p>
                <p>Express shipping: 2-3 business days</p>

                <h3>Return Policy</h3>
                <p>Returns accepted within 30 days of delivery</p>
                <p>Items must be unworn with original tags attached</p>
                <p>Refunds will be issued to the original payment method</p>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="reviews-section">
                <div className="reviews-summary">
                  <div className="overall-rating">
                    <div className="rating-number">
                      {product.rating.toFixed(1)}
                    </div>
                    <StarRating rating={product.rating} />
                    <div className="total-reviews">
                      {product.reviews} reviews
                    </div>
                  </div>
                </div>

                <div className="reviews-list">
                  {reviews.map((review) => (
                    <div key={review.id} className="review-item">
                      <div className="review-header">
                        <StarRating rating={review.rating} />
                        <div className="review-author">
                          <span className="author-name">{review.author}</span>
                          {review.verified && (
                            <span className="verified-badge">
                              ✓ Verified Purchase
                            </span>
                          )}
                        </div>
                        <div className="review-date">
                          Posted on {review.date}
                        </div>
                      </div>
                      <div className="review-content">
                        <p>{review.content}</p>
                      </div>
                    </div>
                  ))}

                  <button className="load-more-btn">Load More Reviews</button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="related-products">
          <h2>YOU MIGHT ALSO LIKE</h2>
          <div className="related-products-grid">
            {relatedProductsByCategory.length > 0 ? (
              relatedProductsByCategory.map((relatedProduct) => (
                <div key={relatedProduct.id} className="related-product-card">
                  <div className="related-product-image">
                    <img
                      src={relatedProduct.image1}
                      alt={relatedProduct.name}
                    />
                  </div>
                  <h3 className="related-product-name">
                    {relatedProduct.name}
                  </h3>
                  <div className="related-product-price">
                    <span className="current-price">
                      ${relatedProduct.price}
                    </span>
                    {relatedProduct.discount && (
                      <>
                        <span className="original-price">
                          ${relatedProduct.originalPrice}
                        </span>
                        <span className="discount">
                          {relatedProduct.discount}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p>No related products in this category.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
