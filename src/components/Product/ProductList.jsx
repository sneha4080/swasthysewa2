// import React from "react";
// import { Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ProductList = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true); // Loading state
//     const [error, setError] = useState(null); // Error state

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const { data } = await axios.get("http://localhost:5000/api/products");
//                 setProducts(data);
//             } catch (err) {
//                 setError("Failed to fetch products"); // Set error if request fails
//             } finally {
//                 setLoading(false); // Stop loading after data is fetched or error occurs
//             }
//         };
//         fetchProducts();
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>; // Show loading message while fetching
//     }

//     if (error) {
//         return <div>{error}</div>; // Show error message if there's an issue
//     }

//     return (
//         <div>
//             <h2>Products</h2>
//             <ul>
//                 {products.length === 0 ? (
//                     <li>No products available</li> // Show message if no products
//                 ) : (
//                     products.map((product) => (
//                         <li key={product._id}>
//                             <h3>{product.name}</h3>
//                             <p>{product.description}</p>
//                             <p>Price: ${product.price}</p>
//                         </li>
//                     ))
//                 )}
//             </ul>
//         </div>
//     );
// };

// export default ProductList;


const ProductList = () => (
    <div>
        <h2>Product List jju</h2>
    </div>
);

export default ProductList;
