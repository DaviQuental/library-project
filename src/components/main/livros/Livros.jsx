import React, { useState } from 'react';

import registered from '../../../data/registered-books';
import Decoration from '../../decoration/underline-text/UnderlineText';


export default (props) => {

    const [ isVisible, setIsVisibility] = useState('hidden');
    const [ valueBottom, setValueBottom] = useState('0');
    const [ valueOpacity, setValueOpacity] = useState('0');
    const [ valueWidth, setValueWidth] = useState('0');

    const allBooks = registered.map((book) => {
        return(
            <div className="card" key={book.id}>
                <div className="book-name">
                     <Decoration>
                        <h2 size='large' color='purple'>{book.bookName}</h2>
                    </Decoration>
                </div>
                <div className="publishing-company">
                    <h2>Editora</h2>
                    <p>{book.publishingCompany}</p>
                </div>
                <div className="gender">
                    <h2>Genero</h2>
                    <p>{book.gender}</p>
                </div>
                <div className="pages">
                    <h2>Páginas</h2>
                    <p>{book.pages}</p>
                </div>
                <div className="edit-box">
                    {props.buttonEdit}
                    <button onClick={() => {setIsVisibility('visible'); setValueBottom('3.5vh'); setValueOpacity(1);setValueWidth('10vw')}} id="delete-button"><span className="fas fa-trash"></span></button>
                </div>
                <div className="confirm-delete-button" style={{visibility: isVisible, position: 'relative', bottom: valueBottom, opacity: valueOpacity, width:  valueWidth}}>
                    <button id="confirm-delete-button"
                            onClick={() => {setIsVisibility('hidden'); setValueBottom('0'); setValueOpacity('0'); setValueWidth('0')}}
                            ><span className="fa fa-check"></span></button>
                    <button id="back-delete-button"
                            onClick={() => {setIsVisibility('hidden'); setValueBottom('0'); setValueOpacity('0');setValueWidth('0')}}
                            ><span className="fa fa-undo"></span></button>
                </div>
            </div>
        );
    });

    return(
        <div className="cards">
            {allBooks}
        </div>
    );
}