import React from 'react';

import Nav from './nav/Nav'
import './Sidebar.css'

export default (props) => {

    return(
        <aside className="sidebar-site">
            <Nav buttonWelcome={props.button0} buttonInicio={props.button1} buttonLivro={props.button2} buttonCadastrar={props.button3}/>
        </aside>
    );
}