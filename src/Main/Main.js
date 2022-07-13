import React from 'react';
import './style.css'
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination, Autoplay} from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination, Autoplay])


const Main = () => {
    
    return (

    <div id='visual'>
      <Swiper
        spaceBetween={50} //슬라이드 여백
      slidesPerView={1} //한 슬라이드에서 보여줄 갯수
      scrollbar={{ draggable: true }} //슬라이드를 드래그해서 넘길 수 있게 하기
      navigation={true} //버튼
      pagination={{ clickable: true }}
      autoplay={{delay: 3000}} //3초마다 자동으로 넘기기
      loop={true} //무한반복
        >
        <SwiperSlide><img src="image/main.jpeg" alt=""></img></SwiperSlide>
        <SwiperSlide><img src="image/test.jpeg" alt=""></img></SwiperSlide>
        <SwiperSlide><img src="image/main.jpeg" alt=""></img></SwiperSlide>
      </Swiper>
    
    </div>

         
    );
};

export default Main;