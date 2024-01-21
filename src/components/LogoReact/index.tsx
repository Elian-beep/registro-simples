import React, { useEffect, useState } from 'react';
import './style.css';
const LogoReactMobile = require('assets/images/logo-react-mobile.png');
const LogoReactLaptop = require('assets/images/logo-react-laptop.png');

export const LogoReact = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const LogoReactResize = windowWidth > 769 ? LogoReactLaptop : LogoReactMobile;

  return (
    <div className='content-logo'>
      <img src={LogoReactResize} alt="Logo do React" />
      <span>React</span>
    </div>
  );
}

export default LogoReact;