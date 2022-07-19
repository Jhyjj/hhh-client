import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ResultList from './ResultList';
import { getRooms } from '../modules/rooms';




const ResultListContainer = ({roomId}) => {
    const {data, loading, error} = useSelector(state=>state.rooms.rooms)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getRooms(roomId))
    },[dispatch,roomId])
    if(loading) return <div>검색결과를 불러오는 중입니다..</div>
    if(error) return <div>에러발생</div>
    if(!data) return <div>데이터가 비어있음</div>
    return (
        <ResultList rooms={data}/>
    );
};

export default ResultListContainer;