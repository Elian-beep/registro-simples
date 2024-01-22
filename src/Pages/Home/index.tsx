import React from 'react';
import './style.css';
import CardContainer from 'components/CardContainer';
import MainTitle from 'components/MainTitle';
import ButtonPrimary from 'components/ButtonPrimary';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();
  return (
    <CardContainer>
        <MainTitle title="Página inicial" />
        <ButtonPrimary onClick={() => navigate('/newperson')} title='Nova pessoa física' type='button' />
    </CardContainer>
  );
}

export default Home;