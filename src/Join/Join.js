import React, { useState } from 'react';
import './style.css';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';
import axios from 'axios';
import { API_URL } from '../config/amuguna';


const Join = () => {
    // 팝업창 상태 관리
    const [ isPopupOpen, setIspopupOpen ] = useState(false);

    const onAddData = (data)=>{
        setFormData({
            ...formData,
            a_add1 : data.address
        })
    }
    
    // 팝업창 상태 true 변경
    const openPostCode = () => {
        setIspopupOpen(true);
    }
    // 팝업창 상태 false 변경
    const closePostCode = () => {
        setIspopupOpen(false);
    }

    const [formData, setFormData] = useState({
        a_id: "",
        a_pw:"",
        a_name: "",
        a_p1 : "",
        a_p2 : "",
        a_p3 : "",
        a_add1 : "",
        a_add2 : "",
    })

    const onChange=(e)=>{
        console.log(formData);
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })

    }

    const onSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);
        if(formData.a_id !== "" &&
            formData.a_pw !== "" &&
            formData.a_name !== "" &&
            formData.a_p1 !== "" &&
            formData.a_p2 !== "" &&
            formData.a_p3 !== "" &&
            formData.a_add1 !== "" &&
            formData.a_add2 !== "" ){
                insertMembers();
            }
        }
    
    function insertMembers(){
        axios.post(`${API_URL}/addjoin`,formData)
        .then(result=>{
            console.log(result);
            document.location.href = '/'
        })
        .catch(e=>{
            console.log(e);
        })
    }

    return (
        <div id="join">
            <div id='join_text'>
                <div>
                    <h1><span>J</span>OIN</h1>
                </div>
            </div>
            <div id='join_input'>
                <form onSubmit={onSubmit}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell><span>*</span><p>NAME</p></TableCell>
                                <TableCell className='no_input'>
                                    <input name="a_name" onChange={onChange} autoComplete="off"/>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><span>*</span><p>ID</p></TableCell>
                                <TableCell className='no_input'>
                                    <input name="a_id" onChange={onChange} autoComplete="off"/>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><span>*</span><p>PASSWORD</p></TableCell>
                                <TableCell className='no_input'>
                                    <input name="a_pw" type="password" onChange={onChange} autoComplete="off"/>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><span>*</span><p>PHONE</p></TableCell>
                                <TableCell className="pinput" >
                                    <input className="pinput" name="a_p1" type="text" onChange={onChange} autoComplete="off"/>─
                                    <input className="pinput" name="a_p2" type="text" onChange={onChange} autoComplete="off"/>─
                                    <input className="pinput" name="a_p3" type="text" onChange={onChange} autoComplete="off"/>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><span>*</span><p>ADDRESS</p></TableCell>
                                <TableCell className='add_input'>
                                    <input className='add' placeholder='주소' name="a_add1" value={formData.a_add1} onChange={onChange} autoComplete="false"/>
                                    <input className='add' placeholder='상세주소' name="a_add2" onChange={onChange} autoComplete="off"/>
                                    <button className='add_btn' type='button' onClick={openPostCode}>우편번호검색</button>
                                    <div id='popupDom'>
                                        {
                                            isPopupOpen && (
                                                <PopupDom>
                                                    <PopupPostCode
                                                    onClose={closePostCode}
                                                    onAddData={onAddData}
                                                    >
                                                    </PopupPostCode>
                                                </PopupDom>
                                            )
                                        }
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <button type="submit" className='join_btn'>회원가입</button>
                </form>
            </div>
        </div>
    );
};

export default Join;