import React, { useEffect, useState } from 'react';
import './style.css';
import CardContainer from 'components/CardContainer';
import MainTitle from 'components/MainTitle';
import TimeLine from 'components/TimeLine';
import PersonalData from './PersonalData';
import IPerson from 'interfaces/IPerson';
import IAddress from 'interfaces/IAddress';
import AddressData from './AddressData';
import IContact from 'interfaces/IContact';
import ContactData from './ContactData';
import { useNavigate } from 'react-router-dom';

export const NewPerson = () => {
  const [formPersonalData, setFormPersonData] = useState<IPerson>();
  const [showFormPerson, setShowFormPerson] = useState<boolean>(true);

  const [formAddressData, setFormAddressData] = useState<IAddress[]>([]);
  const [showFormAddress, setShowFormAddress] = useState<boolean>(false);

  const [formContactData, setFormContactData] = useState<IContact[]>([]);
  const [showFormContact, setShowFormContact] = useState<boolean>(false);

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

  const isLaptop = windowWidth > 769;

  const handlePersonalData = (personalData: IPerson, visibilityFormPerson: boolean) => {
    setFormPersonData(personalData);
    setShowFormPerson(visibilityFormPerson);
    setShowFormAddress(true);
  }

  const handleAddressData = (addressData: IAddress[], visibilityFormAddress: boolean) => {
    setFormAddressData(addressData);
    setShowFormAddress(visibilityFormAddress);
    setShowFormContact(true);
  }

  const handleContactData = (contactData: IContact[], visibilityFormContact: boolean) => {
    setFormContactData(contactData);
    setShowFormContact(visibilityFormContact);
    navigate('/home');
  }

  return (
    <CardContainer>
      <MainTitle title="Cadastrar Pessoa Física" />
      <div className="content-new-person">
        {isLaptop ?
          <>
            <PersonalData onSubmit={handlePersonalData} />
            <AddressData onAddressSubmit={handleAddressData} />
            <ContactData onContactSubmit={handleContactData} />
          </>
          :
          <>
            {showFormPerson && <PersonalData onSubmit={handlePersonalData} />}
            {showFormAddress && <AddressData onAddressSubmit={handleAddressData} />}
            {showFormContact && <ContactData onContactSubmit={handleContactData} />}
          </>
        }
      </div>
    </CardContainer>
  );
}

export default NewPerson;