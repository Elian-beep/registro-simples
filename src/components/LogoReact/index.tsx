import React from 'react';
import './style.css';
const LogoReactMobile = require('../../assets/images/logo-react.png');

export const LogoReact = () => {
  return (
    <div className='content-logo'>
        <img src={LogoReactMobile} alt="Logo do React" />
        <span>React</span>
    </div>
  );
}

export default LogoReact;