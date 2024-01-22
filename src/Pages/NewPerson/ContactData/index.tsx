import React, { useEffect, useState } from 'react';
import './style.css';
import TimeLine from 'components/TimeLine';
import GroupForm from 'components/GroupForm';
import Divisionform from 'components/GroupForm/DivisionForm';
import InputDefault from 'components/InputDefault';
import IContact from 'interfaces/IContact';
import ButtonPrimary from 'components/ButtonPrimary';
import SubTitle from 'components/SubTitle';

interface Props {
    onContactSubmit: (contact: IContact[], hiddenFormContact: boolean) => void;
}

export const ContactData: React.FC<Props> = ({ onContactSubmit }) => {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [formContact, setFormContact] = useState<IContact>({ contact: '', name: '', type: '' });
    const [formListContact, setFormListContact] = useState<IContact[]>([]);
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
        setFormContact({
            ...formContact,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if(formListContact.length == 0){
            if(!formContact.name){
                alert('O campo Nome deve ser preenchido');
            }
            else if(!formContact.contact){
                alert('O campo Contato deve ser preenchido');
            }
        }
        else{
            onContactSubmit(formListContact, isVisible);
        }
    }

    const handleAddContact = () => {
        let tempListContact = formListContact;
        if (formContact.contact && formContact.name) {
            tempListContact.push(formContact);
            setFormListContact(tempListContact);
            setFormContact({ contact: '', name: '', type: '' });
        }
    }

    const handleRemoveContact = () => {
        let tempListContact = formListContact;
        if (formListContact.length >= 1) {
            tempListContact.pop();
            setFormListContact(tempListContact);
        }
    }

    return (
        <>
            {isVisible &&
                <>
                    { isLaptop ? <SubTitle title='Contatos' /> : <TimeLine progressOne progressTwo /> }
                    {formListContact && formListContact.map((contact, index) => (
                        <div key={index}>Contato {index + 1}: {contact.name} - {contact.contact}</div>
                    ))}
                    <form className='form-contact-data' onSubmit={handleSubmit}>
                        <GroupForm>
                            <Divisionform>
                                <InputDefault name='name' onChange={handleInputChange} placeholder='Nome do contato' title='Nome' type='text' value={formContact.name} />
                                <InputDefault name='contact' onChange={handleInputChange} placeholder='E-mail/Telefone' title='Contato (E-mail ou telefone)' type='text' value={formContact.contact} />
                                <InputDefault name='type' onChange={handleInputChange} placeholder='email, telefone etc' title='Tipo de contato' type='text' value={formContact.type} />
                            </Divisionform>
                        </GroupForm>
                        <div className='form-group-buttons'>
                            <ButtonPrimary onClick={handleAddContact} title='Novo contato' type='button' />
                            <ButtonPrimary onClick={handleRemoveContact} title='Remover' type='button' danger />
                        </div>
                        <ButtonPrimary title='Finalizar' type='submit' />
                    </form>
                </>
            }
        </>
    );
}

export default ContactData;