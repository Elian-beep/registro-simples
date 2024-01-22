import React from 'react';
import './style.css';

interface Props {
    progressOne?: boolean;
    progressTwo?: boolean;
}

export const TimeLine: React.FC<Props> = ({ progressOne, progressTwo }) => {
    return (
        <div className='container-timeline'>
            <div className='content-01'>
                <span className='title-01'>Dados Pessoais</span>
                <span className='ellipse-01'></span>
            </div>
            {progressOne
                ?
                <div className='content-02 show'>
                    <span className='title-02'>Endereços</span>
                    <span className='ellipse-default'></span>
                </div>
                :
                <div className='content-02'>
                    <span className='title-02'>Endereços</span>
                    <span className='ellipse-default'></span>
                </div>
            }
            {progressTwo
                ?
                <div className='content-03 show'>
                    <span className='title-03'>Contatos</span>
                    <span className='ellipse-default'></span>
                </div>
                :
                <div className='content-03'>
                    <span className='title-03'>Contatos</span>
                    <span className='ellipse-default'></span>
                </div>
        }
        { !progressOne && <span className='line'></span> }
        { progressOne && <span className='line one'></span> }
        { progressTwo && <span className='line two'></span> }
        </div>
    );
}

export default TimeLine;