import React, { useState } from 'react';

import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/main/Main'
import Modal from './components/modal/Modal'
import './App.css'
export default () => {

    const [value, setValue] = useState(0);
    const [isOpenRegister, setIsOpenRegister] = useState('hidden');
    const [isOpenEdit, setIsOpenEdit] = useState('hidden');
    const [ valueTop, setValueTop] = useState('-100vh')
    const [ valueOpacity, setOpacityValue] = useState(0);

    const buttons = {
        buttonBemVindo: <button onClick={() => setValue(0)} className="button-bem-vindo"><span className="fas fa-book"></span></button>,
        buttonInicio: <button onClick={() => setValue(1)} className="button-inicio"><span className="fas fa-desktop"></span> Início</button>,
        buttonLivro: <button onClick={() => setValue(2)}className="button-livros"><span className="fas fa-book-open"></span> Livros</button>,
        buttonEdit: <button onClick={() => {setIsOpenEdit('visible'); setValueTop('0');setOpacityValue('1')}} id="edit-button"><span className="fas fa-edit"></span></button>,
        buttonCadastrar: <button onClick={() => {setIsOpenRegister('visible'); setValueTop('0');setOpacityValue('1')}} className="button-cadastrar-livro"><span className="fas fa-plus"></span> Cadastrar livro</button>,
        buttonCloseModalRegister: <button onClick={() => {setIsOpenRegister('hidden'); setValueTop('-180vh');setOpacityValue('0')}} className="button-close-modal"><span className="fas fa-times"></span></button>,
        buttonCloseModalEdit: <button onClick={() => {setIsOpenEdit('hidden'); setValueTop('-180vh');setOpacityValue('0')}} className="button-close-modal"><span className="fas fa-times"></span></button>
    }


    return( 
        <div className="wrapper">
            <Header />
            <Sidebar button0={buttons.buttonBemVindo} button1={buttons.buttonInicio} button2={buttons.buttonLivro} button3={buttons.buttonCadastrar}/>
            <Main content={value} buttonEdit={buttons.buttonEdit}/>
            <Modal title={'Cadastrar um livro'} contentButton={'Registrar'} state={isOpenRegister} buttonClose={buttons.buttonCloseModalRegister} values={valueTop} opacity={valueOpacity}/>
            <Modal title={'Editar livro'} contentButton={'Editar'} state={isOpenEdit} buttonClose={buttons.buttonCloseModalEdit} values={valueTop} opacity={valueOpacity}/>
        </div>
    );
}