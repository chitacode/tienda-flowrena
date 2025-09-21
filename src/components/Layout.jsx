import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import styles from './Navbar.module.css';
import Logo from './Logo';
import CartWidget from './CartWidget';  

function Layout() {
  return (
    <div>
 <nav className={styles.navbar}>
  <div className={styles.logo}> <Logo/></div>
  <ul className={styles.navLinks}>
     <li>
       <Link to="/">Home</Link>
     </li>
     <li>
        <Link to="/productos">Productos</Link>
   </li>
   <li> 
        <Link to="/contacto">Contacto</Link>
    </li>      
  </ul>
   <div className= {styles.cart}><CartWidget/></div>
 </nav>  
 <Outlet/>
  </div>
)
}

export default Layout