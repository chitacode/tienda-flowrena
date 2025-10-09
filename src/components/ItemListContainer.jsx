import React, { useState, useEffect } from 'react'
import Items from './Items'
import { getItems } from '../firebase'

const ItemListContainer = () => {
  const [categoria, setCategoria] = useState("todo")
  const [productos, setProductos] = useState([])

  
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsFirebase = await getItems()
        setProductos(itemsFirebase)
      } catch (error) {
        console.error("Error al traer productos:", error)
      }
    }
    fetchItems()
  }, [])

 
  const productosFiltrados = categoria === "todo"
    ? productos
    : productos.filter(item => item.categoria.toLowerCase() === categoria)

  return (
    <div>
      <div className="category-buttons">
        <button onClick={() => setCategoria("todo")}>Todos</button>
        <button onClick={() => setCategoria("remera")}>Remeras</button>
        <button onClick={() => setCategoria("buzo")}>Buzos</button>
        <button onClick={() => setCategoria("gorra")}>Gorras</button>
      </div>

      {productosFiltrados.map(item => (
        <Items
          key={item.id}
          id={item.id}
          mensaje={item.mensaje}
          precio={item.precio}
          imagen={item.imagen}
          categoria={item.categoria}
          stock={item.stock} 
        />
      ))}
    </div>
  )
}

export default ItemListContainer