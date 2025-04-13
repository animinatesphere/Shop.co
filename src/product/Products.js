// productData.js
import sleev1 from "../fashion/sleeve1.webp";
import sleev2 from "../fashion/sleeve2.webp";
import sleev3 from "../fashion/sleeve3.webp";
import sleev4 from "../fashion/sleeve4.webp";
const products = [
  {
    id: 1,
    name: "Gathered-sleeve Blazer",
    price: 600,
    originalPrice: 1200,
    discount: `50%`,
    rating: 4.5,
    reviews: 45,
    image1: sleev1,
    image2: sleev2,
    image3: sleev3,
    image4: sleev4,
    description:
      "The garments labelled as committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment. ",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Grey"],
    category: "T-shirts",
  },
  {
    id: 2,
    name: "Oversized Corduroy Shirt",
    price: 240,
    originalPrice: 260,
    discount: "8%",
    rating: 4.5,
    reviews: 150,
    image1:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_22_10.jpg?v=1727343293&width=600",
    image2:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_22_11.jpg?v=1727343292&width=493",
    image3:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_22_4.jpg?v=1716716827&width=493",
    image4:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_22_3.jpg?v=1716716827&width=493",
    description:
      "The garments labelled as committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment.",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Black", "Navy"],
    category: "T-shirts",
  },

  {
    id: 3,
    name: "Dress with Long Sleeves",
    price: 240,
    originalPrice: 260,
    discount: "8%",
    rating: 4.5,
    reviews: 150,
    image1:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_16_5.jpg?v=1716715586",
    image2:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_16_6.jpg?v=1716715482&width=493",
    image3:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_16_4.jpg?v=1716715586&width=493",
    image4:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_16_1.jpg?v=1716715586&width=493",
    description:
      "The garments labelled as committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment.",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Black", "Navy"],
    category: "T-shirts",
  },
  {
    id: 4,
    name: "Polo-neck Body Dress",
    price: 240,
    originalPrice: 260,
    discount: "8%",
    rating: 4.5,
    reviews: 150,
    image1:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_19_7.jpg?v=1716774667&width=600",
    image2:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_19_8.jpg?v=1716774667&width=493",
    image3:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_19_5.jpg?v=1716774667&width=493",
    image4:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_19_4.jpg?v=1716774667&width=493",
    description:
      "The garments labelled as committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact..",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Black", "Navy"],
    category: "T-shirts",
  },
  {
    id: 5,
    name: "Printed Long-sleeve Shirt",
    price: 240,
    originalPrice: 260,
    discount: "8%",
    rating: 4.5,
    reviews: 150,
    image1:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_13_7.jpg?v=1716715017&width=600",
    image2:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_13_8.jpg?v=1716715018&width=493",
    image3:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_13_1.jpg?v=1716715018&width=493",
    image4:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_13_2.jpg?v=1716715017&width=493",
    description:
      "The garments labelled as committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment.",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Black", "Navy"],
    category: "T-shirts",
  },
  {
    id: 6,
    name: "Long-sleeve Cotton Coats",
    price: 130,
    originalPrice: 260,
    discount: "50%",
    rating: 4.5,
    reviews: 150,
    image1:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_7_3.jpg?v=1716714183&width=600",
    image2:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_7_4.jpg?v=1716714184&width=493",
    image3:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_7_1.jpg?v=1716714184&width=493",
    image4:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_7_2.jpg?v=1716714183&width=493",
    description:
      "The garments labelled as committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment.",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Black", "Navy"],
    category: "T-shirts",
  },
  {
    id: 7,
    name: "Long Sleeve Shirts",
    price: 140,
    originalPrice: 260,
    discount: "40%",
    rating: 4.5,
    reviews: 150,
    image1:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_20_3.jpg?v=1716712926",
    image2:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_20_4.jpg?v=1716712789&width=493",
    image3:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_20_1.jpg?v=1716712787&width=493",
    image4:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_20_2.jpg?v=1716712926&width=493",
    description:
      "The garments labelled as committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment.",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Black", "Navy"],
    category: "T-shirts",
  },
  {
    id: 8,
    name: "Short Sleeve Sweater",
    price: 500,
    originalPrice: 1000,
    discount: "50%",
    rating: 4.5,
    reviews: 150,
    image1:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_17_3.jpg?v=1716696991&width=6000",
    image2:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_18_4.jpg?v=1716696991&width=493",
    image3:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_18_5.jpg?v=1716696991&width=493",
    image4:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_18_7.jpg?v=1716696991&width=493",
    description:
      "The garments labelled as committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment.",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Black", "Navy"],
    category: "T-shirts",
  },
  {
    id: 9,
    name: "Long-sleeve Sweater",
    price: 500,
    originalPrice: 1000,
    discount: "50%",
    rating: 4.5,
    reviews: 150,
    image1:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_11_3.jpg?v=1716696789",
    image2:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_11_4.jpg?v=1716696764&width=493",
    image3:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_11_1.jpg?v=1716696789&width=493",
    image4:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_11_2.jpg?v=1716696789&width=493",
    description:
      "The garments labelled as committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment.",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Black", "Navy"],
    category: "shirt",
  },
  {
    id: 10,
    name: "Cotton Sweatshirt Dress",
    price: 600,
    originalPrice: 1000,
    discount: "40%",
    rating: 4.5,
    reviews: 150,
    image1:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_2_10.jpg?v=1716713519&width=600",
    image2:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_2_11.jpg?v=1716713519&width=493",
    image3:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_2_5.jpg?v=1716713520&width=493",
    image4:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_2_6.jpg?v=1716713519&width=493",
    description:
      "The garments labelled as committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment.",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Black", "Navy"],
    category: "shirt",
  },
  {
    id: 11,
    name: "Colorful wind Coats",
    price: 600,
    originalPrice: 1000,
    discount: "40%",
    rating: 4.5,
    reviews: 150,
    image1:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_4_3.jpg?v=1727344090&width=600",
    image2:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_4_4.jpg?v=1727344090&width=493",
    image3:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_4_1.jpg?v=1727344090&width=493",
    image4:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_4_2.jpg?v=1727344090&width=493",
    description:
      "The garments labelled as committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment.",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Black", "Navy"],
    category: "shirt",
  },
  {
    id: 12,
    name: "Balloon-sleeved Dress",
    price: 600,
    originalPrice: 1000,
    discount: "40%",
    rating: 4.5,
    reviews: 150,
    image1:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_3_4.jpg?v=1716516576",
    image2:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_3_3.jpg?v=1716516576&width=493",
    image3:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_3_6.jpg?v=1716516576&width=493",
    image4:
      "https://rokan-theme.myshopify.com/cdn/shop/files/fashion_products_3_1.jpg?v=1716516576&width=493",
    description:
      "The garments labelled as committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment.",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Black", "Navy"],
    category: "shirt",
  },
  {
    id: 13,
    name: "Egrinma Top",
    price: 600,
    originalPrice: 1000,
    discount: "40%",
    rating: 4.5,
    reviews: 150,
    image1:
      "https://rokan-theme.myshopify.com/cdn/shop/files/sport_6_1.webp?v=1737444079&width=493",
    image2:
      "https://rokan-theme.myshopify.com/cdn/shop/files/sport_6_2.webp?v=1737444079&width=493",
    image3:
      "https://rokan-theme.myshopify.com/cdn/shop/files/sport_6_3.webp?v=1737444079&width=493",
    image4:
      "https://rokan-theme.myshopify.com/cdn/shop/files/sport_6_4.webp?v=1737444079&width=493",
    description:
      "The garments labelled as committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment.",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Black", "Navy"],
    category: "short",
  },
  {
    id: 14,
    name: "Women's Hoodie Croptop",
    price: 300,
    originalPrice: 600,
    discount: "50%",
    rating: 4.5,
    reviews: 150,
    image1:
      "https://rokan-theme.myshopify.com/cdn/shop/files/sport_7_4.webp?v=1737444574&width=600",
    image2:
      "https://rokan-theme.myshopify.com/cdn/shop/files/sport_7_1.webp?v=1737444574&width=493",
    image3:
      "https://rokan-theme.myshopify.com/cdn/shop/files/sport_7_2.webp?v=1737444574&width=493",
    image4:
      "https://rokan-theme.myshopify.com/cdn/shop/files/sport_7_3.webp?v=1737444571&width=493",
    description:
      "The garments labelled as committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment.",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Black", "Navy"],
    category: "short",
  },
  {
    id: 15,
    name: "V Neck Polo Tennis Dress",
    price: 300,
    originalPrice: 600,
    discount: "50%",
    rating: 4.5,
    reviews: 150,
    image1:
      "https://rokan-theme.myshopify.com/cdn/shop/files/sport_5_1.webp?v=1737443799&width=493",
    image2:
      "https://rokan-theme.myshopify.com/cdn/shop/files/sport_5_2.webp?v=1737443799&width=493",
    image3:
      "https://rokan-theme.myshopify.com/cdn/shop/files/sport_5_3.webp?v=1737443799&width=493",
    image4:
      "https://rokan-theme.myshopify.com/cdn/shop/files/sport_5_4.webp?v=1737443799&width=493",
    description:
      "The garments labelled as committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment.",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Black", "Navy"],
    category: "short",
  },
  {
    id: 16,
    name: "Mariah Pocket Short",
    price: 300,
    originalPrice: 600,
    discount: "50%",
    rating: 4.5,
    reviews: 150,
    image1:
      "https://rokan-theme.myshopify.com/cdn/shop/files/sport_4_1.webp?v=1737443504&width=493",
    image2:
      "https://rokan-theme.myshopify.com/cdn/shop/files/sport_4_2.webp?v=1737443504&width=493",
    image3:
      "https://rokan-theme.myshopify.com/cdn/shop/files/sport_4_3.webp?v=1737443504&width=493",
    image4:
      "https://rokan-theme.myshopify.com/cdn/shop/files/sport_4_4.webp?v=1737443504&width=493",
    description:
      "The garments labelled as committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment.",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Black", "Navy"],
    category: "short",
  },
  {
    id: 17,
    name: "Sierra Square Neck Top",
    price: 300,
    originalPrice: 600,
    discount: "50%",
    rating: 4.5,
    reviews: 150,
    image1:
      "https://rokan-theme.myshopify.com/cdn/shop/files/sport_3_1.webp?v=1737443379&width=493",
    image2:
      "https://rokan-theme.myshopify.com/cdn/shop/files/sport_3_2.webp?v=1737443379&width=493",
    image3:
      "https://rokan-theme.myshopify.com/cdn/shop/files/sport_3_3.webp?v=1737443379&width=493",
    image4:
      "https://rokan-theme.myshopify.com/cdn/shop/files/sport_3_4.webp?v=1737443379&width=493",
    description:
      "The garments labelled as committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment.",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Black", "Navy"],
    category: "short",
  },
  {
    id: 18,
    name: "Classic Sweatshirt",
    price: 300,
    originalPrice: 600,
    discount: "50%",
    rating: 4.5,
    reviews: 150,
    image1:
      "https://d91ztyz4qy326.cloudfront.net/shopking/87/conversions/1-preview.png",
    image2:
      "https://d91ztyz4qy326.cloudfront.net/shopking/88/conversions/2-preview.png",
    image3:
      "https://d91ztyz4qy326.cloudfront.net/shopking/89/conversions/3-preview.png",
    image4:
      "https://d91ztyz4qy326.cloudfront.net/shopking/90/conversions/4-preview.png",
    description:
      "The garments labelled as committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment.",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Black", "Navy"],
    category: "short",
  },
  {
    id: 19,
    name: "Team Red Hoodie",
    price: 300,
    originalPrice: 600,
    discount: "50%",
    rating: 4.5,
    reviews: 150,
    image1:
      "https://d91ztyz4qy326.cloudfront.net/shopking/99/conversions/1-preview.png",
    image2:
      "https://d91ztyz4qy326.cloudfront.net/shopking/100/conversions/2-preview.png",
    image3:
      "https://d91ztyz4qy326.cloudfront.net/shopking/101/conversions/3-preview.png",
    image4:
      "https://d91ztyz4qy326.cloudfront.net/shopking/102/conversions/4-preview.png",
    description:
      "The Classic French Terry Crew brings super-soft comfort to a style that's tried and true. It's a top you'll want to wear every day, and it's comfortable and durable enough that you can.  Soft Comfort French terry fabric is lightweight, soft, and comfortable  Durable Style Reinforced shoulder seams and ribbing enhance durability.",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Black", "Navy"],
    category: "short",
  },
  {
    id: 20,
    name: "Classics French Men's Hoodie",
    price: 300,
    originalPrice: 600,
    discount: "50%",
    rating: 4.5,
    reviews: 150,
    image1:
      "https://d91ztyz4qy326.cloudfront.net/shopking/93/conversions/1-preview.png",
    image2:
      "https://d91ztyz4qy326.cloudfront.net/shopking/94/conversions/2-preview.png",
    image3:
      "https://d91ztyz4qy326.cloudfront.net/shopking/95/conversions/3-preview.png",
    image4:
      "https://d91ztyz4qy326.cloudfront.net/shopking/96/conversions/4-preview.png",
    description:
      "The Classic French Terry Crew brings super-soft comfort to a style that's tried and true. It's a top you'll want to wear every day, and it's comfortable and durable enough that you can.  Soft Comfort French terry fabric is lightweight, soft, and comfortable  Durable Style Reinforced shoulder seams and ribbing enhance durability.",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Black", "Navy"],
    category: "short",
  },
];

// You can add methods to manipulate the data if needed
const getProductById = (id) => {
  return products.find((product) => product.id === id);
};

const getProductsByCategory = (category) => {
  return products.filter((product) => product.category === category);
};

const getDiscountedProducts = () => {
  return products.filter((product) => product.discount !== null);
};

// Export the data and methods
export {
  products,
  getProductById,
  getProductsByCategory,
  getDiscountedProducts,
};

// You can also make a default export if you just want the products
export default products;
