import React, { useEffect } from 'react';
import './style.css';
import { Link } from '@mui/material';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay} from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import Test2 from './test2';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRoom } from '../modules/rooms';




SwiperCore.use([Navigation, Pagination, Autoplay])


const Detailview = () => {
    const {id} = useParams();
    const {data,loading,error} = useSelector(state=>state.searchroom.room);
    console.log(id);
    console.log(data);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getRoom(id))
    },[dispatch])

    if(loading) return <div>조금만 기다려주세요..🤔</div>
    if(error) return <div>에러발생.. 관리자에게 문의해주세요</div>
    if(!data) return <div>데이터 받아오지 못함..</div>
    return (
        <div id="Detailview">
            <div>
               <div id="imgbox">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={true}
                    autoplay={{delay: 3000}}
                    loop={true}
                    >
                    <SwiperSlide><img src={`${data[0].imgurl}`} alt=""/></SwiperSlide>
                    <SwiperSlide><img src="/image/1-2.jpeg" alt=""/></SwiperSlide>
                    <SwiperSlide><img src="/image/1-3.jpeg" alt=""/></SwiperSlide>
                    <SwiperSlide><img src="/image/1-4.jpeg" alt=""/></SwiperSlide>
                    <SwiperSlide><img src="/image/1-5.jpeg" alt=""/></SwiperSlide>
                    <SwiperSlide><img src="/image/1-6.jpeg" alt=""/></SwiperSlide>
                    <SwiperSlide><img src="/image/1-7.jpeg" alt=""/></SwiperSlide>
                </Swiper>
               
                </div>

               <div id="textbox">
                    <table>
                        <tr>
                            <td colSpan={2}><h3>{data[0].rname}</h3></td>
                        </tr>
                        <tr>
                            <td colSpan={2}>{data[0].info}</td>
                        </tr>
                        <tr>
                            <th>숙소타입</th>
                            <td>{data[0].badtype}</td>
                        </tr>
                        <tr>
                            <th>투숙가능인원</th>
                            <td>{data[0].minp}/{data[0].maxp}(명)</td>
                        </tr>
                        <tr>
                            <th>금액<br/>(비성수기/성수기)</th>
                            <td>krw {data[0].price}/{data[0].price*1.5}</td>
                        </tr>
                        <tr>
                            <th>체크인/체크아웃</th>
                            <td>15:00 / 11:00 </td>
                        </tr>
                        <tr>
                            <th>Speacial offer</th>
                            <td>{data[0].soffer}</td>
                        </tr>
                        <tr>
                            <th>어메니티</th>
                            <td>{data[0].amenity}</td>
                        </tr>
                        {/* <tr>
                            <th colSpan={2}>
                                <Test2/>
                            </th>
                        </tr> */}
                        <tr>
                            <th colSpan={2}>
                            <Link to="/reser"><div>예약하기</div></Link>
                            </th>
                        </tr>
                    </table>
                    
               </div>
            </div>
        </div>
    );
};

export default Detailview;