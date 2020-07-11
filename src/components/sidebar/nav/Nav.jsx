import React,{useState} from 'react';

import './Nav.css';

export default (props) => {

    const [responsive, setResponsive] = useState(false);
    let className;

    if(responsive){
        className = 'list-nav-sidebar responsive';
    } else className = 'list-nav-sidebar';

    return(
        <div className="nav-sidebar-box">
            <nav className="nav-sidebar">

            <ul className={className}>
                <li className="welcome">{props.buttonWelcome}</li>
                <li className="inicio">{props.buttonInicio}</li>
                <li className="livro">{props.buttonLivro}</li>
                <li className="cadastrar">{props.buttonCadastrar}</li>
                <li className="menu">
                    <button onClick={() => setResponsive(!responsive)}><span className="fas fa-bars"></span></button>
                </li>
            </ul>

            </nav>
        </div>

        

    );
}