import React, { useState } from 'react';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

interface InputProps {
    type: string;
    placeholder: string;
    title: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    required?: boolean;
    isSensitive?: boolean;
}

export const InputDefault: React.FC<InputProps> = ({ onChange, placeholder, title, name, type, value, isSensitive }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className='container-input'>
            <label>{title}</label>
            {type === 'password' && isSensitive ?
                (
                    <div className='input-wrapper'>
                        <input
                            type={isPasswordVisible ? 'text' : 'password'}
                            placeholder={placeholder}
                            onChange={onChange}
                            value={value}
                            name={name}
                        />
                        <button type="button" className='password-toggle' onClick={togglePasswordVisibility}>
                            {isPasswordVisible ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                        </button>
                    </div>
                )
                :
                (
                    <input
                        type={type}
                        placeholder={placeholder}
                        onChange={onChange}
                        value={value}
                        name={name}
                    />
                )
            }
        </div>
    );
}

export default InputDefault;