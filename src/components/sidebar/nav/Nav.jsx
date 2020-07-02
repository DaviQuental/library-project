import React from 'react';

import './Nav.css';

export default (props) => {

    return(
        <div className="nav-sidebar-box">
            <nav className="nav-sidebar">

            <ul className="list-nav-sidebar">
                <li>{props.buttonInicio}</li>
                <li>{props.buttonLivro}</li>
            </ul>

            </nav>

            <div className="register-title-box">
                <h2>Cadastrar</h2>
            </div>
            <div className="register-selection-box">
                <ul className="register-list">
                    <li><button className="button-cadastrar-livro"><span className="fas fa-plus"></span> Cadastrar livro</button></li>
                </ul>
            </div>

        </div>

        

    );
}