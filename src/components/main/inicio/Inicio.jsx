import React from 'react';

import registered from '../../../data/registered-books'
import Decoration from '../../decoration/underline-text/UnderlineText'


export default () => {

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
            </div>
        );
    });

    return(
        <div className="cards">
            {allBooks}
        </div>
    );
}