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
