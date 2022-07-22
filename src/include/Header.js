import React from 'react';
import {Link} from 'react-router-dom';
import Search from '../Search/Search';

const Header = () => {

    // 세션을 모두 삭제하고 처음 페이지로 이동
    const onSubmit = (e)=> {
        e.preventDefault();
        console.log(sessionStorage.getItem("user_id"))
        sessionStorage.clear();
        document.location.href = '/'
    }
    
    //검색창 클릭하면 나오게 하기
    function searchPopUp(){
        console.log('검색창 popup 띄우기');
        document.querySelector('#Search').classList.toggle('popup');
    }
    
    return (
        <div id="header">
            <h1><a href='/'><img src="/image/logo.png" alt=''/></a></h1>
            {/* 세션이 있는경우에만 나오도록 한다. */}
           {sessionStorage.getItem("user_id") && (<span> {sessionStorage.getItem("user_id")}님 환영합니다.</span>)}
           {sessionStorage.getItem("user_id") && (<button onClick={onSubmit}> 로그아웃 </button>)}
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li onClick={()=>searchPopUp()}>Search</li>
                    {!sessionStorage.getItem("user_id") && <li><Link to='/login'>Login</Link></li>}
                    {!sessionStorage.getItem("user_id") && <li><Link to='/join'>Join</Link></li>}
                  {sessionStorage.getItem("user_id") ==='admin' && <li><Link to='/room'>숙소 등록</Link></li>}
                    <li><Link to='/Booking'>Reservation</Link></li>
                </ul>
            </nav>
            <Search/>
        </div>
    );
};

export default Header;