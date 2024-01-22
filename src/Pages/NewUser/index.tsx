import React, { useEffect, useState } from 'react';
import './style.css';
import CardContainer from 'components/CardContainer';
import MainTitle from 'components/MainTitle';
import InputDefault from 'components/InputDefault';
import ButtonPrimary from 'components/ButtonPrimary';
import { useNavigate } from 'react-router-dom';

const ArrowUploadMobile = require('assets/icons/arrow-upload-mobile.png');
const ArrowUploadLaptop = require('assets/icons/arrow-upload-laptop.png');

export const NewUser = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });
  const navigate = useNavigate();
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

  const ArrowUploadResize = windowWidth > 769 ? ArrowUploadLaptop : ArrowUploadMobile;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate('/newperson');
  }

  return (
    <CardContainer>
      <MainTitle title="Cadastrar Usuário" />
      <div className="content-new-user">
        <button className='area-upload'>
          <img src={ArrowUploadResize} alt='Icone de upload de arquivo' />
          <span>Selecionar uma foto do computador</span>
        </button>
        <form className='form-new-user' onSubmit={handleSubmit}>
          <div className='group-form'>
            <InputDefault
              name='username'
              onChange={handleInputChange}
              placeholder='username'
              title='Username'
              type='text'
              value={formValues.username}
            />
            <InputDefault
              name='email'
              onChange={handleInputChange}
              placeholder='email@email.com'
              title='E-mail'
              type='email'
              value={formValues.email}
            />
          </div>
          <div  className='group-form'>
            <InputDefault
              name='phone'
              onChange={handleInputChange}
              placeholder='+55 13 99999-9999'
              title='Telefone'
              type='text'
              value={formValues.phone}
            />
            <InputDefault
              name='password'
              onChange={handleInputChange}
              placeholder='********'
              title='Senha'
              type='password'
              value={formValues.password}
            />
          </div>
          <ButtonPrimary title='Cadastrar Usuário' type='submit' />
          <span className='link-new-user'>
            Já possui cadastro?<button onClick={() => navigate('/')} >Entrar</button>
          </span>
        </form>
      </div>
    </CardContainer>
  );
}

export default NewUser;