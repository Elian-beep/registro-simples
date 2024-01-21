import React, { useState } from 'react';
import './style.css';
import CardContainer from '../../components/CardContainer';
import MainTitle from '../../components/MainTitle';
import LogoReact from '../../components/LogoReact';
import InputDefault from '../../components/InputDefault';
import ButtonPrimary from '../../components/ButtonPrimary';

export const Login = () => {
    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(`Verificar login com os dados: ${formValues.password} | ${formValues.username}`);
        setFormValues({password: '', username: ''});
    }

    return (
        <CardContainer>
            <MainTitle title="Login de Usuário" />
            <LogoReact />
            <form className='form-login' onSubmit={handleSubmit}>
                <InputDefault
                    type="text"
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
            </form>
            <span className='link-new-user'>
                Ainda não possui cadastro?<button>Cadastrar</button>
            </span>
        </CardContainer>
    );
}

export default Login;