import React, { useEffect, useState } from 'react';
import './style.css';
import TimeLine from 'components/TimeLine';
import GroupForm from 'components/GroupForm';
import Divisionform from 'components/GroupForm/DivisionForm';
import InputDefault from 'components/InputDefault';
import IAddress from 'interfaces/IAddress';
import ButtonPrimary from 'components/ButtonPrimary';
import SubTitle from 'components/SubTitle';

interface Props {
  onAddressSubmit: (address: IAddress[], hiddenFormAddress: boolean) => void;
}

export const AddressData: React.FC<Props> = ({ onAddressSubmit }) => {
  const [formAddress, setFormAddress] = useState<IAddress>({ cep: 0, city: '', complement: '', number: 0, place: '', state: '' });
  const [formListAddress, setFormListAddress] = useState<IAddress[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(true);
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
    setFormAddress({
      ...formAddress,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (formAddress.cep) {
      handleAddAddress();
    }
    setIsVisible(false);
    onAddressSubmit(formListAddress, isVisible);
  }

  const handleAddAddress = () => {
    let tempListAddress = formListAddress;
    if (formAddress.cep) {
      tempListAddress.push(formAddress);
      setFormListAddress(tempListAddress);
      setFormAddress({ cep: 0, city: '', complement: '', number: 0, place: '', state: '' });
    }
  }

  const handleRemoveAddress = () => {
    let tempListAddress = formListAddress;
    if (formListAddress.length >= 1) {
      tempListAddress.pop();
      setFormListAddress(tempListAddress);
    }
  }

  return (
    <>
      {isVisible &&
        <>
          { isLaptop ? <SubTitle title='Endereços' /> : <TimeLine progressOne /> }
          {formListAddress && formListAddress.map((address, index) => (
            <div key={index}>Endereço {index + 1}: {address.cep}</div>
          ))}
          <form className='form-address-data' onSubmit={handleSubmit}>
            <GroupForm>
              <Divisionform>
                <InputDefault name='place' onChange={handleInputChange} placeholder='Rua Sem Nome' title='Logradouro' type='text' value={formAddress.place} />
                <InputDefault name='number' onChange={handleInputChange} placeholder='9999' title='Número' type='number' value={formAddress.number.toString()} />
                <InputDefault name='cep' onChange={handleInputChange} placeholder='99999-99' title='CEP' type='number' value={formAddress.cep.toString()} />
              </Divisionform>
              <Divisionform>
                <InputDefault name='complement' onChange={handleInputChange} placeholder='Casa 999' title='Complemento' type='text' value={formAddress.complement} />
                <InputDefault name='city' onChange={handleInputChange} placeholder='São Paulo' title='Cidade' type='text' value={formAddress.city} />
                <InputDefault name='state' onChange={handleInputChange} placeholder='SP' title='Estado' type='text' value={formAddress.state} />
              </Divisionform>
            </GroupForm>
            <div className='form-group-buttons'>
              <ButtonPrimary onClick={handleAddAddress} title='Novo endereço' type='button' />
              <ButtonPrimary onClick={handleRemoveAddress} title='Remover' type='button' danger />
            </div>
            { !isLaptop && <ButtonPrimary title='Continuar' type='submit' /> }
          </form>
        </>
      }
    </>
  );
}

export default AddressData;