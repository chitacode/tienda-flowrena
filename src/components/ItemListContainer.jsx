import React from 'react'
import Items from './Items'
import items from '../data/items.json'


const ItemListContainer = () => {
  return (
    <div >
       {items.map(item => (
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