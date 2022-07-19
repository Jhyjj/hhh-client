import { useEffect, useState, useRef } from 'react';
import './style.css'
import Resultpage from './Resultpage';
import ResultDetailpage from './ResultDetailpage';
import { useDispatch, useSelector } from 'react-redux';
import { getRooms } from '../modules/rooms';


const Result = () => {
    const [view, setView] = useState(false);
    const onClick = (bool) => {
        setView(bool)
    }
    // 큰화면 보기(false) 안보기(true)
    let [id, setId] = useState(0); // 큰화면 화면이동용 ID
  useEffect(() => {
    if(view){setId(0)}
    else window.addEventListener("mousewheel",addid)},[id])
// 스크롤이벤트시 뒤의 함수를 실행시킨다. id를 1씩 더해줌
 const addid = () => {
    setId(id + 1)
    console.log(data.length)
 }


    const { data, loading, error } = useSelector(state => state.searchroom.rooms);
    const dispatch = useDispatch();
    // console.log(data[0])
    useEffect(()=> {
        dispatch(getRooms());
    },[dispatch])
    if(loading) return <div>로뒹</div>
    if(error) return <div>엘어</div>
    if(!data) return <div>값없음</div>
    return (

        //검색했을때 나오는 결과 페이지  --> 숙소 리스트 출력하는 페이지입니다.
        <div id="result">
            {/* <Resultpage></Resultpage> */}
            { view ?  <Resultpage onClick={()=> onClick(false)} rooms={data}/>  : 
            <ResultDetailpage onClick={()=> onClick(true)} data={data} id={id} />  }
        </div>
    );
};

export default Result;