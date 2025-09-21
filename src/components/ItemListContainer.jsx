import React from 'react'
import Items from './Items'
import items from '../data/items.json'
import { useState } from 'react';


const ItemListContainer = () => {
const [categoria, setCategoria] = useState("todo");

  const productosFiltrados = categoria === "todo" ? items
      : items.filter((items) => items.categoria.toLowerCase() === categoria);
  
      return (

        
    <div >
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
        />
      ))}
    </div>
  )
}

export default ItemListContainer