import React, {useState} from 'react';
import './style.css'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file 
import 'react-date-range/dist/theme/default.css'; // theme css file



const Reservation = () => {


const [state, setState] = useState({
    startDate:new Date(),
    endDate: new Date(),
    key: 'selection'
})
const onRangeChange = (ranges)=>{
    console.log(ranges);
    setState({
        startDate: ranges['selection'].startDate,
        endDate: ranges['selection'].endDate,
        key:ranges['selection'].key
    })
}

    return (
   
        <div class="ReserWrap">
            
                <p>객실 예약</p>
        <div id="Reservation">
            <div class="reser_left_img"><img src="image/main.jpeg" alt="" /></div>
            <div class="right">
                예약일지정
                <div class="calendar">
            <DateRange 
                    onChange={onRangeChange}
                    editableDateInputs={true}
                    moveRangeOnFirstSelection={false}
                    ranges={[state]}
                  />      
                </div>

                <div class="input">
                <table>
                    <tr>
                        <th>Name</th>
                        <td>hhh House</td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td>그린컴퓨터 아카데미 3층</td>
                    </tr>
                    <tr>
                        <th>Price</th>
                        <td>40,000/1박</td>
                    </tr>
                    <tr>
                        <th>Booker</th>
                        <td><input type="text" name="Booker" placeholder="예약자명을 입력해주세요"/></td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td><input type="text" name="Phone" placeholder="전화번호를 입력해주세요"/></td>
                    </tr>
                    <tr>
                        <td colspan={2}>
                            <button>예약하기</button>
                            <button>취소</button>
                        </td>
                    </tr>
                </table>
                </div>
            </div>
        </div>
        </div>
    );
};
export default Reservation;