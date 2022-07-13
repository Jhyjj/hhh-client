import React from 'react';
import './style.css';

const Login = () => {
    return (
        <div id='login'>
            <div id='text'>
                <div>
                    <h1><span>L</span>ogin</h1>
                </div>
            </div>
            <div id='input'>
                <form>
                    <table>
                        <tr>
                            <th>Name</th>
                            <td><input></input></td>
                        </tr>
                        <tr>
                            <th>Phone Nunber</th>
                            <td><input></input> - <input></input></td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td><input></input>
                            <button className='add_btn'>우편번호검색</button></td>
                        </tr>
                        <tr>
                            <button className='login_btn'>로그인</button>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    );
};

export default Login;