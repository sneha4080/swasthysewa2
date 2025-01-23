// import React from "react";
// import { items } from "../Data";
// import { Link } from "react-router-dom";
// import './ProductList.css';

//product display kare 
//       const ProductList = (item) => {
//         const productList = [];

//         for (let i = 0; i < items.length; i++) {
//           const product = items[i];
//           productList.push(
//             // <div className="card-container">
//             <div className="col-lg-4  col-lg-3, col-md-4, col-sm-6 my-3 " key={product.id}>
//               <div className="card" style={{ width: "18rem" }}>
//                 <Link to={`/products/ ${product.id}`}
//                 style={{
//                     display: "flex",
//                     justifyContent:"center",
//                     alignItems:"center"
//                 }}>

//                 <img src={product.image || "/"} className="card-img-top card-img" alt={product.title || "Product Image"} />
//                    </Link>
//                 <div className="card-body">
//                   <h5 className="card-title">{product.title}</h5>
//                   <p className="card-text card-des">{product.description || "Default Description"}</p>
//                   <p className="card-price">{product.price} &#8377;</p>
//                   <p className="card-weight mt-1">{product.weight}</p>
//                   <a href="/products" className="btn cart-btn mx-3">Add To Cart</a>
//                 </div>
//               </div>

//             </div>
//           );
//         }

//         return (
//           <div className="m-5">
//             <div className="row">

//               {productList}
//             </div>
//           </div>
//         );
//       };



//   export default ProductList;





//serch kari aape 
// import React from "react";
// import { Link } from "react-router-dom";
// import "./ProductList.css";

// const ProductList = ({ items }) => {
//   const productList = [];
//   // Ensure `items` is an array
//   if (!Array.isArray(items)) {
//     console.error("Expected 'items' to be an array, got:", items);
//     return <p>No products available to display.</p>;
//   }

//   return (
//     <div className="m-5">
//       <div className="row">
//         {items.map((product) => (
//           <div
//             className="col-lg-4 col-md-6 col-sm-6 my-3"
//             key={product.id}
//           >
//             <div className="card" style={{ width: "18rem" }}>
//               <Link
//                 to={`/products/${product.id}`}
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <img
//                   src={product.image || "/"}
//                   className="card-img-top card-img"
//                   alt={product.title || "Product Image"}
//                 />
//               </Link>
//               <div className="card-body">
//                 <h5 className="card-title">{product.title}</h5>
//                 <p className="card-text card-des">
//                   {product.description || "Default Description"}
//                 </p>
//                 <p className="card-price">{product.price} &#8377;</p>
//                 <p className="card-weight mt-1">{product.weight}</p>
//                 <a href="/products" className="btn cart-btn mx-3">
//                   Add To Cart
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;


// bane thay
// import React from "react";
// import { items as allItems } from "../Data"; // Import all products
// import { Link } from "react-router-dom";

// import "./ProductList.css";

// const ProductList = ({ items, cart, setCart }) => {

//   const addToCart = (id, price, title, description, weight, image) => {
//     const obj = {
//       id, price, title, description, weight, image
//     }
//     setCart([...cart, obj]);
//     console.log("cart element = ", cart)
//   }
//   // Use all items if `items` is not provided or empty
//   const productsToDisplay = items && items.length > 0 ? items : allItems;

//   return (
//     <div className="m-5">
//       <div className="row">
//         {productsToDisplay.map((product) => (
//           <div className="col-lg-4 col-md-6 col-sm-6 my-3" key={product.id}>
//             <div className="card" style={{ width: "18rem" }}>
//               <Link
//                 to={`/products/${product.id}`}
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <img
//                   src={product.image || "/"}
//                   className="card-img-top card-img"
//                   alt={product.title || "Product Image"}
//                 />
//               </Link>
//               <div className="card-body">
//                 <h5 className="card-title">{product.title}</h5>
//                 <p className="card-text card-des">
//                   {product.description || "Default Description"}
//                 </p>
//                 <p className="card-price">{product.price} &#8377;</p>
//                 <p className="card-weight mt-1">{product.weight}</p>
//                 <button href="/products"
//                   onClick={() => addToCart(product.id, product.price, product.title, product.description, product.weight, product.image)}
//                   className="btn cart-btn mx-3">
//                   Add To Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;






import React, { useState } from "react";
import { items as allItems } from "../Data"; // Import all products
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./ProductList.css";

const ProductList = ({ items, cart, setCart }) => {
  const addToCart = (id, price, title, description, weight, image) => {
    const obj = {
      id,
      price,
      title,
      description,
      weight,
      image,
    };

    // Add to cart
    setCart([...cart, obj]);

    // Show success toast notification
    toast.success(`${title} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    console.log("Cart updated:", cart);
  };

  // Use all items if `items` is not provided or empty
  const productsToDisplay = items && items.length > 0 ? items : allItems;

  return (
    <div className="m-5">
      <ToastContainer /> {/* Toast container for notifications */}
      <div className="row">
        {productsToDisplay.map((product) => (
          <div className="col-lg-4 col-md-6 col-sm-6 my-3" key={product.id}>
            <div className="card" style={{ width: "18rem" }}>
              <Link
                to={`/products/${product.id}`}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={product.image || "/"}
                  className="card-img-top card-img"
                  alt={product.title || "Product Image"}
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text card-des">
                  {product.description || "Default Description"}
                </p>
                <p className="card-price">{product.price} &#8377;</p>
                <p className="card-weight mt-1">{product.weight}</p>
                <button
                  onClick={() =>
                    addToCart(
                      product.id,
                      product.price,
                      product.title,
                      product.description,
                      product.weight,
                      product.image
                    )
                  }
                  className="btn cart-btn mx-3"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
