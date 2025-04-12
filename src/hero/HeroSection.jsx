import React from "react";
import "../hero/herosection.css";
import star1 from "../assets/star1 (2).png";
import star2 from "../assets/star2.png";
import shop from "../assets/shop-co.jpg";
export const HeroSection = () => {
  return (
    <>
      <div className="her0-bus">
        {/* hero-container */}
        <div className="hero-container">
          {/* hero1 */}
          <div className="hero-1">
            <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="bro">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <div className="hero-1-butt">
              <button>Shop Now</button>
            </div>
            {/* hero-num */}
            <div className="hero-num">
              {/* hero-num1 */}
              <div className="hero-num1">
                <p className="am"> 200+</p>
                <p className="in">International Brands</p>
              </div>
              {/* end of hero-num1 */}
              {/* hero-num1 */}
              <div className="hero-num1">
                <p className="am">2,000+</p>
                <p className="in">High-Quality Products</p>
              </div>
              {/* end of hero-num1 */}
              {/* hero-num1 */}
              <div className="hero-num1">
                <p className="am">30,000+</p>
                <p className="in">Happy Customers</p>
              </div>
              {/* end of hero-num1 */}
            </div>
            {/* end of hero-num */}
          </div>
          {/*end of  hero1 */}
          {/* hero2 */}
          <div className="hero2">
            <div className="hero2-image1">
              <img src={star1} alt="" />
            </div>
            <div className="hero2-image2">
              {/* <img src={shop} alt="" /> */}
            </div>
            <div className="hero2-image3">
              <img src={star2} alt="" />
            </div>
          </div>
          {/*end of  hero2 */}
        </div>
        {/* end of hero-container */}
      </div>
    </>
  );
};
