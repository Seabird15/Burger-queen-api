import React, { useContext } from 'react'
import CartContext from "../../Context/CartContext";

function ItemCart({item}) {
  const {deleteItemToCart, addItemToCart} = useContext(CartContext)

  const {id} = item;

  return <div>
      <img src={item.img} alt={item.name}/>
      <div>
        <p>{item.name}</p>
        <p>HOLA</p>
        <div>
          <button onClick={()=> addItemToCart(item)}>AGREGAR</button>
          <button onClick={() => deleteItemToCart(id)}>SACAR</button>
        </div>
      </div>
      <div>
        <div>
          {item.amount}
          <p>Total: ${item.amount * item.price}</p>
        </div>
      </div>
      </div>
  
}

export default ItemCart