import React from 'react'
import {Link, Outlet} from 'react-router-dom'
function Layout() {
  return (
    <div>

 <nav>
  <u>
     <li>
       <Link to="/">Home</Link>
     </li>
     <li>
        <Link to="/productos">Productos</Link>
   </li>
   <li> 
        <Link to="/contacto">Contacto</Link>
    </li>      
  </u>
 </nav>  
 <Outlet/>
    
    </div>
)
}

export default Layout