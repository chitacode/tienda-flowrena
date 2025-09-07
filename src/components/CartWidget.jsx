import React from 'react'
import Carrito from '/src/assets/cart3.png'


function CartWidget() {
  return (
    <div>CartWidget
      <img src={Carrito} alt="Carrito " style={{ width: '150px', height: 'auto' }} />
      
    </div>
  )
}

export default CartWidget;