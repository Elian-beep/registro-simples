import React from 'react';
import './style.css';

interface Props {
    title: string;
}

export const SubTitle: React.FC<Props> = ({title}) => {
  return (
    <p className='sub-title'>
        {title}
    </p>
  );
}

export default SubTitle;