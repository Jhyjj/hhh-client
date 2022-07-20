import React from 'react';
import { AiFillYoutube, AiFillFacebook } from 'react-icons/ai';
import { SiNaver } from 'react-icons/si';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
    return (
        <div id="footer">
            <div id='left'>
                <h2><a href='/'><img src="/image/logo.png" alt=''/></a></h2>
                <p>copyright(c) hhh all right reserved.</p>
            </div>
            <div id='right'>
                <div id='explanation'>
                    <ul>
                        <li><a href='/'>개인정보처리방침</a></li>
                        <li><a href='/'>이용약관</a>이용약관</li>
                        <li><a href='/'>사이트맵</a></li>
                    </ul>
                </div>
                <div id='icon'>
                    <div id='icon_text'>Follow us</div>
                    <div className='icons'>
                        <div><a href='https://www.youtube.com/'><AiFillYoutube size="25" /></a></div>
                        <div><a href='https://www.facebook.com/'><AiFillFacebook size="23" /></a></div>
                        <div><a href='https://www.naver.com/'><SiNaver size="20" /></a></div>
                        <div><a href='https://www.instagram.com/'><BsInstagram size="20" /></a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;