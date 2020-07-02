import React from 'react';

import registered from '../../../data/registered-books'


export default () => {

    const books = registered.map((book) => {
        return(
            <div className="card" key={book.id}>
                <div className="card-name">{book.bookName}</div>
                <div className="card-publishingCompany">
                    <h3>Editora</h3>
                    <p>{book.publishingCompany}</p>
                </div>
                <div className="card-gender">
                    <h3>Genero</h3>
                    <p>{book.gender}</p>
                </div>
                <div className="pages">
                    <h3>Páginas</h3>
                    <p>{book.pages}</p>
                </div>
            </div>
        );
    });

    return(
        <div className="cards">
            {books}
        </div>
    );
}