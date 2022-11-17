import React, { useContext } from 'react'
import CartContext from "../../Context/CartContext";

function ItemCart({item}) {
  const {deleteItemToCart, addItemToCart} = useContext(CartContext)

  const {id} = item;

  return <div>{item.name}</div>
  
}

export default ItemCart