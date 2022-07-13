import React, { useState } from 'react';
import './style.css';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';

const Join = () => {
    // 팝업창 상태 관리
    const [ isPopupOpen, setIspopupOpen ] = useState(false);

    // 팝업창 상태 true 변경
    const openPostCode = () => {
        setIspopupOpen(true);
    }
    // 팝업창 상태 false 변경
    const closePostCode = () => {
        setIspopupOpen(false);
    }

    return (
        <div id="join">
            <div id='text'>
                <div>
                    <h1><span>J</span>oin</h1>
                </div>
            </div>
            <div id='input'>
                <form>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell><span>*</span>NAME</TableCell>
                                <TableCell>
                                    <input></input>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><span>*</span>ID</TableCell>
                                <TableCell>
                                    <input></input>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><span>*</span>PASSWORD</TableCell>
                                <TableCell>
                                    <input
                                    type="password"
                                    ></input>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><span>*</span>ADDRESS</TableCell>
                                <TableCell>
                                    <input id='add' placeholder='주소'></input>
                                    <input id='add' placeholder='상세주소'></input>
                                    <button className='add_btn' type='button' onClick={openPostCode}>우편번호검색</button>
                                    <div id='popupDom'>
                                        {
                                            isPopupOpen && (
                                                <PopupDom>
                                                    <PopupPostCode
                                                    onClose={closePostCode}
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
                    <button className='join_btn'>회원가입</button>
                </form>
            </div>
        </div>
    );
};

export default Join;