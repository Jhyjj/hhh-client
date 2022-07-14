import React from 'react';
import './style.css';
import { Link } from '@mui/material';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay} from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import Test2 from './test2';




SwiperCore.use([Navigation, Pagination, Autoplay])


const Detailview = () => {

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
                    <SwiperSlide><img src="/image/main.jpeg" alt=""/></SwiperSlide>
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
                            <td colSpan={2}><h3>숙소이름</h3></td>
                        </tr>
                        <tr>
                            <td colSpan={2}>도심 속에서 자연의 여유를 누릴 수 있는 장소를 찾고 계신가요?
                                            우아한 인테리어와 현대적 세련미가 조화롭게 어우러진 이 공간은 서울 시내 동급 호텔 대비 넓은 40~50㎡의 여유로운 공간을 제공합니다.
                                            87층부터 101층까지 위치한 초고층 객실에서 바라보는 서울 도심의 파노라믹뷰는 최상의 휴식을 제공합니다
                            </td>
                        </tr>
                        <tr>
                            <th>숙소타입</th>
                            <td>독채/전원주택</td>
                        </tr>
                        <tr>
                            <th>투숙가능인원</th>
                            <td>2/4(명)</td>
                        </tr>
                        <tr>
                            <th>금액<br/>(비성수기/성수기)</th>
                            <td>krw 325,000 / 475,000</td>
                        </tr>
                        <tr>
                            <th>체크인/체크아웃</th>
                            <td>15:00 / 11:00 </td>
                        </tr>
                        <tr>
                            <th>Speacial offer</th>
                            <td>
                            early check-in / late check-out / welcome-tea
                            </td>
                        </tr>
                        <tr>
                            <th>어메니티</th>
                            <td>
                            세면대 2개 면봉 비데 샤워 캡 슬리퍼 욕실용품 (Diptyque) 욕조 목욕 가운 헤어드라이어 정수기
                            </td>
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