import React from 'react';
import { Link } from 'react-router-dom';

const Resultpage = ({rooms,onClick}) => {
    
    return (
        <>
                 <span className='toggle' onClick={onClick}>크게보기</span>
                <ul>
                    {rooms.map(room=>(
                    <Link to={`/detail/:${room.no}`}>
                        <li key={room.no}>
                            <div className='imgbox'>
                            <img src={room.imgurl} alt=""/>
                            </div> 
                            <div className='textbox'>
                                <p>{room.rname}</p>
                                <p>{room.price}</p>
                            </div>
                        </li>
                    </Link>
                    ))}
                    </ul>
        </>
    );
};

export default Resultpage;