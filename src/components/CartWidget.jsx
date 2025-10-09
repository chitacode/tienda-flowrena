import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Carrito from '/src/assets/cart3.png';


function CartWidget() {
  const { cart } = useContext(CartContext)

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <img src={Carrito} alt="Carrito" style={{ width: '50px', height: 'auto' }} />
     <div style={{ background: 'red', borderRadius: '50%', color: 'white', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {cart.length}
     </div>
    </div>
  )
}

export default CartWidget;