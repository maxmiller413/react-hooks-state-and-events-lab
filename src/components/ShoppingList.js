import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  // console.log(items)

  const [category, setCategory] = useState("All")

  function handleCategoryChange(event) {
    // console.log(event.target.value)
    setCategory((category) => event.target.value)
    console.log(event.target.value)
  }

  // console.log(category)

  const itemCategory = items.filter((item) => {
    if(category === "All"){
      return true
    }
    else {
      return item.category === category
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange} >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
