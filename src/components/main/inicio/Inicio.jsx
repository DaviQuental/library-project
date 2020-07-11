import React from 'react';

import registered from '../../../data/registered-books'
// import '../../decoration/PurpleDecoration.css'


export default () => {

    const allBooks = registered.map((book) => {
        return(
            <div className="card" key={book.id}>
                <div className="book-name purple-decoration large"><h2>{book.bookName}</h2></div>
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
            </div>
        );
    });

    return(
        <div className="cards">
            {allBooks}
        </div>
    );
}