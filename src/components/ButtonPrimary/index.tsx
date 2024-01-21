import React from 'react';
import './style.css';

interface Props {
    title: string;
    type: 'button' | 'submit';
}

export const ButtonPrimary: React.FC<Props> = ({title, type}) => {
  return (
    <button className='button-primary' type={type}>
        {title}
    </button>
  );
}

export default ButtonPrimary;