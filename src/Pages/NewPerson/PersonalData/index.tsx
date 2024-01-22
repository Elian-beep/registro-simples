import React, { useEffect, useState } from 'react';
import './style.css';
import TimeLine from 'components/TimeLine';
import ButtonPrimary from 'components/ButtonPrimary';
import IPerson from 'interfaces/IPerson';
import InputDefault from 'components/InputDefault';
import GroupForm from 'components/GroupForm';
import Divisionform from 'components/GroupForm/DivisionForm';
import SubTitle from 'components/SubTitle';

interface Props {
    onSubmit: (person: IPerson, hiddenFormPerson: boolean) => void;
}

export const PersonalData: React.FC<Props> = ({ onSubmit }) => {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [formPersonalData, setFormPersonData] = useState<IPerson>({
        birthday: '',
        cpf: '',
        email: '',
        lastname: '',
        name: '',
        rg: '',
    });
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

    const isLaptop = windowWidth > 769;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormPersonData({
            ...formPersonalData,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(formPersonalData.birthday, formPersonalData.cpf, formPersonalData.email, formPersonalData.lastname, formPersonalData.name, formPersonalData.rg);
        setIsVisible(false);
        onSubmit(formPersonalData, isVisible);
    }

    return (
        <>
            {isVisible &&
                <>
                    {isLaptop ? <SubTitle title='Dados Pessoais' /> : <TimeLine />}
                    <form className='form-person-data' onSubmit={handleSubmit}>
                        <GroupForm>
                            <Divisionform>

                                <InputDefault
                                    name='name'
                                    onChange={handleInputChange}
                                    placeholder='Nome'
                                    title='Nome'
                                    type='text'
                                    value={formPersonalData.name}
                                />
                                <InputDefault
                                    name='lastname'
                                    onChange={handleInputChange}
                                    placeholder='Sobrenome'
                                    title='Sobrenome'
                                    type='text'
                                    value={formPersonalData.lastname}
                                />
                                <InputDefault
                                    name='birthday'
                                    onChange={handleInputChange}
                                    placeholder='01/01/2099'
                                    title='Data de nascimento'
                                    type='date'
                                    value={formPersonalData.birthday}
                                />
                            </Divisionform>
                            <Divisionform>

                                <InputDefault
                                    name='email'
                                    onChange={handleInputChange}
                                    placeholder='email@email.com'
                                    title='E-mail'
                                    type='email'
                                    value={formPersonalData.email}
                                />
                                <InputDefault
                                    name='cpf'
                                    onChange={handleInputChange}
                                    placeholder='999.999.999-99'
                                    title='CPF'
                                    type='text'
                                    value={formPersonalData.cpf}
                                />
                                <InputDefault
                                    name='rg'
                                    onChange={handleInputChange}
                                    placeholder='99999999-9'
                                    title='RG'
                                    type='text'
                                    value={formPersonalData.rg}
                                />
                            </Divisionform>
                        </GroupForm>
                        { !isLaptop && <ButtonPrimary title='Continuar' type='submit' /> }
                    </form>
                </>
            }
        </>
    );
}

export default PersonalData;