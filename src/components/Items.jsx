import React from 'react'
import styles from './Item.module.css';

function Items({id, mensaje, precio, imagen, categoria}) {
  return (
    <div className={styles.itemsContainer}>
     <div className={styles.card}>
      <img src={imagen} alt={mensaje} className={styles.cardImg} />
     <div className= {styles.cardBody}>
      <h3 className= {styles.cardTitle}>{mensaje}</h3>
      <p className= {styles.cardPrice}>Precio: ${precio}</p>
      <p className= {styles.cardCategory}>Categoría: {categoria}</p>
      <p>ID: {id}</p>
      <button className= {styles.cardBtn}>Agregar al carrito</button>
    </div>
    </div>
    </div>
  )
}

export default Items