import React, { useState } from 'react';
import './style.css';
import CardContainer from 'components/CardContainer';
import MainTitle from 'components/MainTitle';
import LogoReact from 'components/LogoReact';
import InputDefault from 'components/InputDefault';
import ButtonPrimary from 'components/ButtonPrimary';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(`Verificar login com os dados: ${formValues.password} | ${formValues.username}`);
        setFormValues({ password: '', username: '' });
        navigate('/newperson');
    }

    return (
        <CardContainer>
            <MainTitle title="Login de Usuário" />
            <div className='content-login'>
                <LogoReact />
                <form className='form-login' onSubmit={handleSubmit}>
                    <InputDefault
                        type="email"
                        placeholder="email@email.com"
                        title="E-mail"
                        onChange={handleInputChange}
                        value={formValues.username}
                        name='username'
                    />

                    <InputDefault
                        type="password"
                        placeholder="Digite sua senha"
                        title="Senha"
                        onChange={handleInputChange}
                        value={formValues.password}
                        name='password'
                        isSensitive
                    />
                    <ButtonPrimary title="Login" type='submit' />
                    <span className='link-new-user'>
                        Ainda não possui cadastro?<button onClick={() => navigate('/newuser')} >Cadastrar</button>
                    </span>
                </form>
            </div>
        </CardContainer>
    );
}

export default Login;