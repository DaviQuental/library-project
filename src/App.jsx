import React, { useState } from 'react';

import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/main/Main'
import './App.css'

export default () => {

    const [value, setValue] = useState(0);
    const buttonBemVindo = <button onClick={() => setValue(0)} className="button-bem-vindo"><span className="fas fa-book"></span></button>
    const buttonInicio = <button onClick={() => setValue(1)} className="button-inicio"><span className="fas fa-desktop"></span> Início</button>;
    const buttonLivro = <button onClick={() => setValue(2)}className="button-livros"><span className="fas fa-book-open"></span> Livros</button>;

    return( 
        <div className="wrapper">
            <Header />
            <Sidebar button0={buttonBemVindo} button1={buttonInicio} button2={buttonLivro}/>
            <Main content={value}/>
        </div>
    );
}