import React, { useState } from 'react';
import './style.css';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import axios from 'axios';

// id,pw 관리
const Login = () => {
    const [formData, setFormData] = useState({
        id : "",
        pw : ""
    })

const onChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData,
        [name]:value
    })
}

// 로그인 함수를 실행시킨다.
const onSubmit =(e)=>{
    e.preventDefault();
    login();
}

function login(){
    axios.post('http://localhost:3001/member',formData)
    .then(result=>{
        const {id, pw} = result.data
        console.log(pw)
        if(result.data.id === undefined){
            // id 를 입력하지 않거나 틀린경우
            // console.log(result.data.id === undefined)
            // console.log(result.data.id)
            alert('입력하신 id 가 일치하지 않습니다.')
        } else if(pw !== formData.pw){
            // id는 맞지만, pw 는 
            alert('입력하신 비밀번호 가 일치하지 않습니다.')
        } else if(id === formData.id) {
            // id, pw 모두 일치 
            sessionStorage.setItem('user_id', id)
            document.location.href = '/'
        // 작업 완료 되면 페이지 이동(새로고침)
        }
        
    })
    .catch(e=>{
        console.log(e);
    })
}

    return (
        <div id='login'>
            <div id='text'>
                <div>
                    <h1><span>L</span>ogin</h1>
                </div>
            </div>
            <div id='input'>
                <form>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell><span>*</span>ID</TableCell>
                                <TableCell>
                                    <input name='id' onChange={onChange}></input>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><span>*</span>PASSWORD</TableCell>
                                <TableCell>
                                    <input name='pw' onChange={onChange}></input>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <button onClick={onSubmit} className='login_btn'>로그인</button>
                </form>
            </div>
        </div>
    );
};

export default Login;