import React, { useState } from "react";

function Item({ name, category }) {

  const [itemIn,setItemIn]=useState(false)

  function handleCart(){
  setItemIn(!itemIn);

setItemIn? removeFromCart():addToCart()
}

function addToCart(){
  console.log('Add to Cart')
}
function removeFromCart(){
  console.log('Remove from Cart')
}
  return (
    <li className={itemIn? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
