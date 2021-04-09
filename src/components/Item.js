import React, { useState } from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false)


  function handleAddItemClick() {
    setIsInCart((isInCart) => !isInCart)
    console.log(isInCart)
  }
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddItemClick} >
        {isInCart ? "Remove From" : "Add To"} Cart
      </button>
    </li>
  );
}

export default Item;
