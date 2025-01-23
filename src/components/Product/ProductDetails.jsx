// import React from "react";
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import "./ProductList.css";
// import ProductList from "./ProductList";
// import { items } from "../Data";

// export const ProductDetails = () => {
//   const { id } = useParams(); //id same name which inside given by the App.js  inside of Route pass
//   const [product, setProduct] = useState([]);
//   // const [items, setItems] = useState([]); // Initialize as an empty array


//   // for suggestion same product
//   const [reletedProducts, setReletedProducts] = useState([]);

//   useEffect(() => {
//     const filterProduct = items.filter((product) => product.id === id);
//     setProduct(filterProduct[0]);

//     const reletedProducts = items.filter(
//       (productCategoty) => productCategoty.category === product.category
//     );

//     setReletedProducts(reletedProducts);
//     // console.log("reletedProducts",reletedProducts)
//   }, [id, product.category]);

//   return (
//     <>
//       <div className="container pro">
//         <div className="img">
//           <img src={product.image} alt="" />
//         </div>
//         <div className="text-center">
//           <h1 className="card-title">{product.title}</h1>
//           <p className="card-text card-des">
//             {product.description || "Default Description"}
//           </p>
//           <p className="card-price">{product.price} &#8377;</p>
//           <p className="card-weight mt-1">{product.weight}</p>
//           <a href="/products" className="btn cart-btn">
//             Add To Cart
//           </a>
//         </div>
//       </div>

//       <ProductList items={reletedProducts} />
//     </>
//   );
// };






// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import { items } from "../Data"; // Import your product data here
// // import './ProductDetails.css';
// import "./ProductList.css";

// export const ProductDetails = () => {
//   const { id } = useParams(); // Get the product ID from the URL
//   const [product, setProduct] = useState(null);
//   const [recommendedProducts, setRecommendedProducts] = useState([]);

//   useEffect(() => {
//     // Find the product based on the ID
//     const foundProduct = items.find(item => item.id === parseInt(id));

//     if (foundProduct) {
//       setProduct(foundProduct);

//       // Filter recommended products based on the category
//       const relatedProducts = items.filter(
//         item => item.category === foundProduct.category && item.id !== foundProduct.id
//       );
//       setRecommendedProducts(relatedProducts);
//     }
//   }, [id]); // Re-run the effect when the product ID changes

//   if (!product) {
//     return <p>Loading...</p>; // Show loading if product data is not yet available
//   }

//   return (
//     <div className="product-details-container">
//       <div className="product-detail">
//         <div className="product-image">
//           <img src={product.image || "/"} alt={product.title} className="product-img" />
//         </div>
//         <div className="product-info">
//           <h1>{product.title}</h1>
//           <p>{product.description || "No description available"}</p>
//           <p><strong>Price: </strong>{product.price} &#8377;</p>
//           <p><strong>Weight: </strong>{product.weight}</p>
//           <a href="/products" className="btn cart-btn">Add to Cart</a>
//         </div>
//       </div>

//       {/* Recommended Products */}
//       <div className="recommended-products">
//         <h2>Recommended Products</h2>
//         <div className="row">
//           {recommendedProducts.map((item) => (
//             <div className="col-lg-4 col-md-6 my-3" key={item.id}>
//               <div className="card" style={{ width: "18rem" }}>
//                 <Link
//                   to={`/product/${item.id}`}
//                   style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center"
//                   }}
//                 >
//                   <img
//                     src={item.image || "/"}
//                     className="card-img img-details"
//                     alt={item.title || "Product Image"}
//                   />
//                 </Link>
//                 <div className="card-body">
//                   <h5 className="card-title">{item.title}</h5>
//                   <p className="card-text">{item.description || "No description available"}</p>
//                   <p className="card-price">{item.price} &#8377;</p>
//                   <a href="/products" className="btn cart-btn mx-3">Add To Cart</a>

//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default ProductDetails;



// bane kare
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { items } from "../Data"; // Assuming items are imported from a file
import "./ProductList.css";

export const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate(); // Use navigate to programmatically change the URL
  const [product, setProduct] = useState({});
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  // Function to update the main product and recommended products
  const updateProduct = (selectedProduct) => {
    setProduct(selectedProduct);

    // Filter recommended products based on the category of the selected product
    const similarProducts = items.filter(
      (item) => item.category === selectedProduct.category && item.id !== selectedProduct.id
    );

    setRecommendedProducts(similarProducts);
  };

  useEffect(() => {
    // Find the selected product by id
    const selectedProduct = items.find((item) => item.id === parseInt(id));

    if (selectedProduct) {
      updateProduct(selectedProduct);
    } else {
      // If no product is found, redirect to a 404 page or back to products list
      navigate("/404");
    }
  }, [id, navigate]);

  // Handle click on recommended product
  const handleRecommendedClick = (recommendedProduct) => {
    // Navigate to the selected product's page
    navigate(`/product/${recommendedProduct.id}`);
  };

  return (
    <div className="product-details-container">
      <div className="product-detail">
        <div className="product-image">
          <img src={product.image || "/"} alt={product.title} className="product-img" />
        </div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <p>{product.description || "No description available"}</p>
          <p><strong>Price: </strong>{product.price} &#8377;</p>
          <p><strong>Weight: </strong>{product.weight}</p>
          <a href="/products" className="btn cart-btn">Add to Cart</a>
        </div>
      </div>

      {/* Recommended Products */}
      <div className="recommended-products">
        <h2>Recommended Products</h2>
        <div className="row">
          {recommendedProducts.map((item) => (
            <div className="col-lg-4 col-md-6 my-3" key={item.id}>
              <div className="card" style={{ width: "18rem" }}>
                <Link
                  to={`/products/${item.id}`} // This should navigate to the correct product page
                  onClick={() => handleRecommendedClick(item)} // Handle the click to update the product
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                  
                >
                    <Link to={`/products/${product.id}`}
                                  style={{
                                      display: "flex",
                                      justifyContent:"center",
                                      alignItems:"center"
                                  }}></Link>

                  <img
                    src={item.image || "/"}
                    className="card-img img-details"
                    alt={item.title || "Product Image"}
                  />
                </Link>
                
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description || "No description available"}</p>
                  <p className="card-price">{item.price} &#8377;</p>
                  <p className="card-weight mt-1">{product.weight}</p>

                  <a href="/products" className="btn cart-btn mx-3">Add To Cart</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
