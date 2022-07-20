import React from 'react';
import './style.css';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';

const Login = () => {
    return (
        <div id='login'>
            <div id='login_text'>
                <div>
                    <h1><span>L</span>OGIN</h1>
                </div>
            </div>
            <div id='login_input'>
                <form>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell><span>*</span>ID</TableCell>
                                <TableCell>
                                    <input></input>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><span>*</span>PASSWORD</TableCell>
                                <TableCell>
                                    <input></input>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <button className='login_btn'>로그인</button>
                </form>
            </div>
        </div>
    );
};

export default Login;