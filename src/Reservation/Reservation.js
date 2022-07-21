import React, {useEffect, useState} from 'react';
import './style.css'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file 
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useLocation } from 'react-router-dom';
import axios from 'axios';


const Reservation = () => {

    const location = useLocation();
    const roomd = location.state;
    console.log(roomd.rname);

const [state, setState] = useState({
    startDate:new Date(),
    endDate: new Date(),
    key: 'selection'
})
const onRangeChange = (ranges)=>{
    console.log(ranges['selection'].startDate);
    console.log(ranges['selection'].endDate);
    setState({
        startDate: ranges['selection'].startDate,
        endDate: ranges['selection'].endDate,
        key:ranges['selection'].key
    })
}
const sDay = {
    year:state.startDate.getFullYear(),
    month: state.startDate.getMonth() + 1,
    day: state.startDate.getDate()
};
const eDay = {
    year1:state.endDate.getFullYear(),
    month1: state.endDate.getMonth() + 1,
    day1: state.endDate.getDate()
};
useEffect(() => {
setFormData({
    ...formData,
    rsdate : `${sDay.year}-${sDay.month}-${sDay.day}`,
    edate : `${eDay.year1}-${eDay.month1}-${eDay.day1}`
})
},[state])

const [formData, setFormData] = useState({
    rname: roomd.rname,
    radd: roomd.radd,
    rsdate: "",
    edate : "",
    rbooker: "",
    rid : sessionStorage.getItem("user_id"),
    rphone : "",
    price : roomd.price,
    imgurl : roomd.imgurl
})

    const onChange=(e)=>{
        console.log(formData);
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value
    })
};
const onSubmit = (e)=>{
    e.preventDefault();
    console.log(formData);
            insertbooking();
    }
    function insertbooking(){
        axios.post('http://localhost:3001/addbooking',formData)
        .then(result=>{
            console.log(result);
            document.location.href = '/Booking'
        })
        .catch(e=>{
            console.log(e);
        })
    }

    return (
   
        <div class="ReserWrap">
            
                <p>객실 예약</p>
        <div id="Reservation">
            <div class="reser_left_img"><img src={roomd.imgurl} alt="" /></div>
            <form onSubmit={onSubmit}>
            <div class="right">
                예약일지정
                <div class="calendar">
                  <DateRange 
                    onChange={onRangeChange}
                    editableDateInputs={true}
                    moveRangeOnFirstSelection={false}
                    // disabledDays={disabledDays}
                    ranges={[state]}
                  />      
                </div>

                <div class="input">
                <table>
                    <tr>
                        <th>Name</th>
                        <td>{roomd.rname}</td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td>{roomd.radd}</td>
                    </tr>
                    <tr>
                        <th>Price</th>
                        <td>{roomd.price}</td>
                    </tr>
                    <tr>
                            <th>투숙가능인원</th>
                            <td>{roomd.minp}/{roomd.maxp}(명)</td>
                        </tr>
                    <tr>
                        <th>Booker</th>
                        <td><input type="text" name="rbooker"  onChange={onChange} placeholder="예약자명을 입력해주세요"/></td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td><input type="text" name="rphone"  onChange={onChange} placeholder="전화번호를 입력해주세요"/></td>
                    </tr>
                    <tr>
                        <td colspan={2}>
                            <button >예약하기</button>
                            <button>취소</button>
                        </td>
                    </tr>
                </table>
                </div>
            </div>
            </form>
        </div>
        </div>
    );
};

export default Reservation;