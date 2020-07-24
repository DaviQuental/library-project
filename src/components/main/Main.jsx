import React from 'react';

import Welcome from './welcome/Welcome'
import Inicio from './inicio/Inicio'
import Livros from './livros/Livros'
import './Main.css'
import Decoration from '../decoration/underline-text/UnderlineText'



export default (props) => {

    let content, title;

    if(props.content === 0 ){
        title = "Bem-vindo";
        content = <Welcome />;
    }
    else if(props.content === 1){
        title = "Início"
        content = <Inicio />
    }
    else if(props.content === 2){
        title = "Livros"
        content = <Livros buttonEdit={props.buttonEdit}/>
    }

    return(
        <main className="main-site">
            <div className="title-main">
                <Decoration>
                    <h2 color='purple' size='small'>{title}</h2>
                </Decoration>
            </div>

            <div className="content-main">
                {content}
            </div>
        </main>
    );
}