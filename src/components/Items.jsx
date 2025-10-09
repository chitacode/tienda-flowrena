import React, { useContext } from 'react'
import styles from './Item.module.css'
import { CartContext } from '../context/CartContext'

function Items({ id, mensaje, precio, imagen, categoria, stock }) {
  const { cart, setCart } = useContext(CartContext)

  const productoEnCarrito = cart.find(item => item.id === id)
  const cantidadEnCarrito = productoEnCarrito ? productoEnCarrito.cantidad : 0

  const handleAgregar = () => {
    if (cantidadEnCarrito < stock) {
      if (productoEnCarrito) {
        setCart(cart.map(item =>
          item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
        ))
      } else {
        setCart([...cart, { id, mensaje, precio, imagen, categoria, cantidad: 1 }])
      }
    } else {
      alert(`Solo hay ${stock} unidades disponibles de ${mensaje}`)
    }
  }

  return (
    <div className={styles.itemsContainer}>
      <div className={styles.card}>
        <img src={imagen} alt={mensaje} className={styles.cardImg} />
        <div className={styles.cardBody}>
          <h3 className={styles.cardTitle}>{mensaje}</h3>
          <p className={styles.cardPrice}>Precio: ${precio}</p>
          <p className={styles.cardCategory}>Categoría: {categoria}</p>
          <p>ID: {id}</p>
          <p>Cantidad en carrito: {cantidadEnCarrito}</p>
          <p>Stock disponible: {stock}</p>
          <button className={styles.cardBtn} onClick={handleAgregar}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  )
}

export default Items
