import React from "react";
import Navbar from "../navbar/Navbar";
import "../page/homepage.css";
import { HeroSection } from "../hero/HeroSection";
import NewArrivals from "../newarrival/NewArrivals";
const HomePage = () => {
  return (
    <div className="bus-container">
      <Navbar />
      <HeroSection />
      <NewArrivals />
    </div>
  );
};

export default HomePage;

// Sure! To add product detail navigation functionality when a product is clicked, you'll need to:

// Wrap each product card in a clickable element (like a link)
// Set up routing to handle product detail pages
// Pass the product ID in the URL

// Here's a quick hint on how to implement this:
// jsx// In your product card, wrap it with a Link or use onClick with navigation
// import { Link } from 'react-router-dom';

// // Inside your product map function:
// {products.map((product) => (
//   <Link
//     to={`/product/${product.id}`}
//     key={product.id}
//     className="product-card"
//   >
//     {/* Your existing product card content */}
//   </Link>
// ))}
// Alternatively, if you're not using React Router:
// jsx// Using onClick with navigation function
// <div
//   key={product.id}
//   className="product-card"
//   onClick={() => navigateToProduct(product.id)}
//   style={{ cursor: 'pointer' }}
// >
//   {/* Your existing product card content */}
// </div>

// // Define this function to handle navigation
// const navigateToProduct = (productId) => {
//   window.location.href = `/product/${productId}`;
//   // Or using React Router's navigate function
//   // navigate(`/product/${productId}`);
// };
// Then create a separate ProductDetail component that retrieves the product ID from the URL parameters and displays the full product information based on that ID.
