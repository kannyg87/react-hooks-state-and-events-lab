import React, { useState } from "react";

function Item({ name, category }) {
  const [itemCart, setItemCart] = useState(false);
  const res = itemCart ? "in-cart" : "";
  function handleItem() {
    setItemCart(!itemCart)
  }
  return (
    <li className={res}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleItem}>Add to Cart</button>
    </li>
  );
}

export default Item;
