import React from 'react';

import Logo from './logo/Logo'
import Nav from './nav/Nav'
import './Sidebar.css'

export default (props) => {

    return(
        <aside className="sidebar-site">
            <Logo buttonBemVindo = {props.button0}/>
            <Nav buttonInicio={props.button1} buttonLivro={props.button2} buttonCadastrar={props.button3}/>
        </aside>
    );
}