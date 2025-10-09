import React from 'react'
import { CartContext } from '../context/CartContext'
import Carrito from '/src/assets/cart3.png'


function CartWidget() {
  const { cart } = useContext(CartContext)

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <img src={Carrito} alt="Carrito" style={{ width: '50px', height: 'auto' }} />
      <span>{cart.length}</span>
    </div>
  )
}

export default CartWidget;