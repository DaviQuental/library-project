import React from 'react';

import './Nav.css';

export default (props) => {

    return(
        <div className="nav-sidebar-box">
            <nav className="nav-sidebar">

            <ul className="list-nav-sidebar">
                <li>{props.buttonInicio}</li>
                <li>{props.buttonLivro}</li>
                <li>{props.buttonCadastrar}</li>
            </ul>

            </nav>
        </div>

        

    );
}