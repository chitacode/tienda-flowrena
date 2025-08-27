import React from 'react';
import logoImg from '../img/logo.png';

const Logo = () => {
  return (
    <div className="logo">
         <img src={logoImg} alt="Flowrena" />
      <h2>Flowrena</h2>
    </div>
  );
}

export default Logo;