import React from 'react';
import './style.css';
import IChildren from '../../interfaces/IChildren';

export const CardContainer: React.FC<IChildren> = ({children}) => {
  return (
    <div className='container'>
        {children}
    </div>
  );
}

export default CardContainer;