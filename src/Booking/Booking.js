import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBook } from '../modules/booking';
import ShowBooking from './ShowBooking';
import './style.css';

const Booking = () => {

    const id = sessionStorage.getItem("user_id")
    const {data,loading,error} = useSelector(state=>state.booking.book); 
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getBook(id))
    },[dispatch])

    if(loading) return <div>조금만 기다려주세요..🤔</div>
    if(error) return <div>에러발생.. 관리자에게 문의해주세요</div>
    if(!data) return <div>데이터가 없음</div>
    return (
        <ShowBooking data={data} />
    );
};


export default Booking;