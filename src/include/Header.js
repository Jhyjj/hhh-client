import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div id="header">
            <h1>LOGO</h1>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Search</Link></li>
                    <li><Link to='/'>Login</Link></li>
                    <li><Link to='/'>Join</Link></li>
                    <li><Link to='/'>Reservation</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;