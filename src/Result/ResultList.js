import React from 'react';
import { Link } from '@mui/material';

const ResultList = ({rooms}) => {
    return (
        
            <div id="result">
                <h2>검색 결과입니다.</h2>
                <ul>
                    {rooms.map(room=>(
                    <Link to={`/detail/:${room.no}`}>
                        <li key={room.no}>
                            <div className='imgbox'>
                            <img src={`/image/${room.imgurl}`} alt=""/>
                            </div> 
                            <div className='textbox'>
                                <p>{room.rname}</p>
                                <p>{room.price}</p>
                            </div>
                        </li>
                    </Link>
                    ))}
                    
                </ul>
            </div>
        );
};

export default ResultList;