import React from 'react';
import './style.css';
import IChildren from 'interfaces/IChildren';

export const GroupForm: React.FC<IChildren> = ({children}) => {
  return (
    <div className='container-group-form'>
      {children}
    </div>
  );
}

export default GroupForm;