import React from 'react';
import './style.css';

interface Props {
  title: string;
  type: 'button' | 'submit';
  danger?: boolean;
  onClick?: () => void;
}

export const ButtonPrimary: React.FC<Props> = ({ title, type, danger=false, onClick }) => {
  return (
    <>
      {danger ?
        <button onClick={onClick} className='button-primary danger' type={type}>
          {title}
        </button>
        :
        <button onClick={onClick} className='button-primary' type={type}>
          {title}
        </button>
      }
    </>
  );
}

export default ButtonPrimary;