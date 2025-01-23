





import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items as allItems } from "../Data";
import ProductList from "./ProductList";

export const SearchItem = () => {
  const { term } = useParams();
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const filteredData = allItems.filter((p) =>
      p.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredItems(filteredData);
  }, [term]);

  return (
    <div>
      {/* <h6 className="m-5"> {term}</h6> */}
      <ProductList items={filteredItems} />
    </div>
  );
};
