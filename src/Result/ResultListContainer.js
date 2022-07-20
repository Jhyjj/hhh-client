import React,{useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getKeyword } from '../modules/rooms';
import { useParams } from 'react-router-dom';
import Resultpage from './Resultpage';
import ResultDetailpage from './ResultDetailpage';
import './style.css'




const ResultListContainer = () => {
    const [view, setView] = useState(false);
    const onClick = (bool) => {
        setView(bool)
    }
    // 큰화면 보기(false) 안보기(true)
    let [id, setId] = useState(0); // 큰화면 화면이동용 ID
    useEffect(() => {
      window.addEventListener("mousewheel",addid)},[id])
// 스크롤이벤트시 뒤의 함수를 실행시킨다. id를 1씩 더해줌
 const addid = () => {
    if(data && data.length > id+1){
    setId(id + 1);
    } else {
        setId(0);
    }
}
    const {keyword} = useParams();
  
    const { data, loading, error } = useSelector(state => state.searchroom.rooms);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getKeyword(keyword))
    },[dispatch, keyword])
    if(loading) return <div>검색결과를 불러오는 중입니다..</div>
    if(error) return <div>에러발생</div>
    if(!data) return <div>데이터가 비어있음</div>

    return (
        <div id="result">
        {/* <Resultpage></Resultpage> */}
        { view ?  <Resultpage onClick={()=> onClick(false)} rooms={data}/>  : 
        <ResultDetailpage onClick={()=> onClick(true)} data={data} id={id} />  }
    </div>
    );
};

export default ResultListContainer;