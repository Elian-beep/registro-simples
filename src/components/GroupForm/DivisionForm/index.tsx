import React from 'react';
import './style.css';
import IChildren from 'interfaces/IChildren';

export const Divisionform: React.FC<IChildren> = ({children}) => {
  return (
    <div className='content-division-form'>
        {children}
    </div>
  );
}

export default Divisionform;