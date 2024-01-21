import React from 'react';
import './style.css';

interface Props {
    title: String;
}

export const MainTitle: React.FC<Props> = ({title}) => {
  return (
    <h2 className='main-title'>
        {title}
    </h2>
  );
}

export default MainTitle;