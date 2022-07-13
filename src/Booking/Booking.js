import React from 'react';
import './style.css';
const Booking = () => {
    return (
        <div id="Booking">
            <div class="left_img"><img src="image/main.jpeg" alt=""></img></div>
            {/*  왼쪽 메인이미지 */}
            <div class="right_text">
                {/* 숙소명, 기간, 주소, 예약자이름, 전화번호, 가격 */}
                <table class="left">
                    <tr>
                        <th>Name</th>
                        <td>hhh House</td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td>그린컴퓨터 아카데미 3층.. 이제 에어컨도 잘됨 긴글자도 봐야해서 좀더 길게적어야하는데 진짜 할말이 하나도없어서 아무말이나 적고있긴한데 시간이 너무 빨라서 오늘 다 할 수 있을지 알수가 없어서 너무 슬픔</td>
                    </tr>
                    <tr>
                        <th>Date</th>
                        <td>2022-07-13 ~ 2022-09~02</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Booker</th>
                        <td>에이치셋</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>010-1234-5678</td>
                    </tr>
                    <tr>
                        <th>Price</th>
                        <td>40,000</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Booking;