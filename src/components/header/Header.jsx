import React from 'react';

import Search from './search/Search'
import User from './user-icon/User'
import './Header.css'

export default (props) => {

    return(
        <header className="header-site">
            <nav className="nav-header">
                <Search />
                <User />
            </nav>
        </header>
    );
}