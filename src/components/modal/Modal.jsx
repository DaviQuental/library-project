import React from 'react';

import './Modal.css'

export default (props) => {

    return (
        <div className="modal-register-overlay" style={{ opacity: props.opacity, visibility: props.state, top: props.values, bottom: 0, right: 0, left: 0}}>
            <div className="modal-register">
                <div className="modal-logo">
                    <h2 className="first-title">Library</h2>
                    <h2 className="second-title">Project.</h2>
                </div>
                <div className="modal-content">
                    <div className="close-button">
                        {props.buttonClose}
                    </div>
                    <div className="modal-register-box">
                        <div className="title-register-box">
                            <h2>{props.title}</h2>
                        </div>
                        <form action="" id="form-register" >
                            <div className="modal-form-box">
                                <input type="text" id="input-book-name" placeholder="Harry Potter..."/>
                                <label htmlFor="input-book-name">NOME</label>
                            </div>

                            <div className="modal-form-box">
                                <input type="text" id="input-publishing-company" placeholder="Rocco..."></input>
                                <label htmlFor="input-publishing-company">EDITORA</label>
                            </div>

                            <div className="modal-form-box">
                                <input type="text" id="input-gender" placeholder="Ficção..."></input>
                                <label htmlFor="input-gender">GENERO</label>
                            </div>

                            <div className="modal-form-box">
                                <input type="text" id="input-pages" placeholder="280..."></input>
                                <label htmlFor="input-pages">PAGINAS</label>
                            </div>
                        </form>
                        <div className="button-submit">
                            <button type="submit" form="form-register" value="Submit">{props.contentButton}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}