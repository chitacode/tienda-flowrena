import React from 'react';
import CartWidget from './CartWidget';
import Logo from './Logo'; 
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
       <div className={styles.logo}> <Logo/></div>
        <ul className={styles.navLinks}>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#productos">Productos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    <div className= {styles.cart}>
    <CartWidget/>
    </div>
    </nav>
    
  );
};

export default Navbar;