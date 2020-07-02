import React from 'react';

import './Search.css'

export default () => {

    return(
        <div className="form-search-box">
            <form id="form-search">
                <label htmlFor="input-search"><span className="fas fa-search"></span></label>
                <input type="text" id="input-search" placeholder="Procure um livro..."/>
            </form>
        </div>

    );
}