import React from 'react';
import logoImg from '/src/assets/logo.png';

const Logo = () => {
  return (
    <div className="logo">
         <img src={logoImg} alt="Flowrena" style={{ width: '150px', height: 'auto' }} />
      <h2>Flowrena</h2>
    </div>
  );
}

export default Logo;