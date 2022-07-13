import React,{useState} from 'react';
import './style.css';
import { Calendar } from 'react-date-range'; //캘린더 라이브러리
import ko from 'date-fns/locale/ko'; //날짜 포맷 라이브러리(한국어기능)
import moment from 'moment'; //날짜 포맷 라이브러리


const Detailview = () => {

    return (
        <div id="Detailview">
            <div>
               <div id="imgbox">
               <img src="image/main.jpeg" alt=""/>
                </div>

               <div id="textbox">
                    <h3>숙소이름</h3>
                    <p>도심 속에서 자연의 여유를 누릴 수 있는 장소를 찾고 계신가요?<br/>
                        답답한 일상을 벗어나 어쩌구...휴식공간...어쩌구....숙소설명</p>
                    <div>캘린더자리입니다</div>
                    
               </div>
            </div>
        </div>
    );
};

export default Detailview;