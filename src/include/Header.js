import React from 'react';
import {Link} from 'react-router-dom';
import Search from '../Search/Search';

const Header = () => {

    //검색창 클릭하면 나오게 하기
    function searchPopUp(){
        console.log('검색창 popup 띄우기');
        document.querySelector('#Search').classList.toggle('popup');
    }
    return (
        <div id="header">
            <h1><img src="image/logo.png"/></h1>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li onClick={()=>searchPopUp()}>Search</li>
                    <li><Link to='/'>Login</Link></li>
                    <li><Link to='/'>Join</Link></li>
                    <li><Link to='/'>Reservation</Link></li>
                </ul>
            </nav>
            <Search/>
        </div>
    );
};

export default Header;