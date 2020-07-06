import React from 'react';

import './Welcome.css'
import owner from '../../../images/owner.JPG'

export default () => {

    return(
        <div className="welcome-box">
            <div className="figure-welcome">
                <figure className="figure-welcome">
                    <img src={owner} alt="Criador do site"/>
                    <figcaption>Davi Athanazio Quental</figcaption>
                </figure>
            </div>

            <div className="content-welcome">
                <p>
                    Olá, sou o criador desse projeto de biblioteca virtual ! Ele foi feito apenas com o intuito de aprendar React/MongoDB. 
                    Sou estudante de Sistema de Informação da <a href="https://www.fiap.com.br" rel="noreferrer noopener" target="_blank">FIAP</a>, tenho muito interesse em sempre adquirir conhecimento, estou sempre aberto para qualquer tipo de desenvolvimento Front-End e Back-End. 
                </p>
            </div>
            <div className="social-medias-welcome">
                <a href="https://www.linkedin.com/in/daviquental/" rel="noreferrer noopener" target="_blank"><span className="fab fa-linkedin"></span></a>
                <a href="https://github.com/DaviQuental" rel="noreferrer noopener" target="_blank"><span className="fab fa-github-square"></span></a>
                <a href="https://www.facebook.com/davi.quental" rel="noreferrer noopener" target="_blank"><span className="fab fa-facebook-square"></span></a>
                <a href="https://www.instagram.com/quental.dev/" rel="noreferrer noopener" target="_blank"><span className="fab fa-instagram-square"></span></a>
            </div>
        </div>
    );
}