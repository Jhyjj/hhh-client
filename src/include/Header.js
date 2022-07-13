import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {

    //검색창 클릭하면 나오게 하기
    return (
        <div id="header">
            <h1><img src="image/logo.png"/></h1>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Search</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/join'>Join</Link></li>
                    <li><Link to='/'>Reservation</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;