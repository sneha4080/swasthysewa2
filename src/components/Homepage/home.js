import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import Store from "./Store"; // Import the Store component
import "./Store.css"; // Make sure the path is correct
import { AppContext } from "../context/ProductContext";
import ProductList from "../Product/ProductList";

// const stores = [
//   {
//     name: "Elisbridge",
//     description: "Ground Floor, Chandanivas, Near Hriharanand Ashram, Elisbridge, Ahmedabad -380006.",
//     image: "https://lokswasthya.com/wp-content/uploads/2024/03/Card.png",
//     link: "#"
//   },
//   {
//     name: "Chandkheda",
//     description: "6 Kalash Residency, Kadi Nagarik Sahkari Bank Road Chandkheda, Ahmedabad 382424",
//     image: "https://lokswasthya.com/wp-content/uploads/2024/03/Card-2-1024x591.png",
//     link: "#"
//   },
//   {
//     name: "Nikol",
//     description: "A-10, Spanvally, Near Croma, Show Room, Nikol Road, Ahmedabad – 382350",
//     image: "https://lokswasthya.com/wp-content/uploads/2024/03/Card-1-1024x591.png",
//     link: "#"
//   }
// ];




const Home = (cart, setCart, items) => {

  if (!Array.isArray(cart)) {
    cart = []; // Ensure cart is an array before using it
  }
  const {myName} = useContext (AppContext)


  return (
    <div className="homepage">
      {/* Home Page Image */}
      <Link className="navbar-brand" to="/">
        <img
          src="/page1.png" // Path relative to the `public` folder
          alt="Home page"
          style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
        />
      </Link>

      {/* Store Cards */}
      {/* <h1 className="card-heading">Our Ayurveda Medicine Stores</h1>
      <div className="container">
        <div className="row">
          {stores.map((store, index) => (
            <Store
              key={index}
              name={store.name}
              description={store.description}
              image={store.image}
              link={store.link}
            />
          ))} */}
        {/* </div> */}
      {/* // </div> */}
      
      <ProductList/>
    
      
    </div>
  );
};

export default Home;
