import React from 'react';
import './style.css'


//검색했을때 나오는 결과 페이지  --> 숙소 리스트 출력하는 페이지입니다.

const Result = () => {
    return (
        <div id="result">
            <h2>검색 결과입니다.</h2>
            <ul>
                <li>
                    <div className='imgbox'>
                        <img/>
                    </div> 
                    <div className='textbox'>
                        <p>숙소이름</p>
                        <p>숙소금액</p>
                    </div>
                </li>
                <li>
                    <div className='imgbox'>
                        <img/>
                    </div> 
                    <div className='textbox'>
                        <p>숙소이름</p>
                        <p>숙소금액</p>
                    </div>
                </li>
                <li>
                    <div className='imgbox'>
                        <img/>
                    </div> 
                    <div className='textbox'>
                        <p>숙소이름</p>
                        <p>숙소금액</p>
                    </div>
                </li>
                <li>
                    <div className='imgbox'>
                        <img/>
                    </div> 
                    <div className='textbox'>
                        <p>숙소이름</p>
                        <p>숙소금액</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Result;