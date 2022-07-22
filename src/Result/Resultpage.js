import React from 'react';
import { Link } from 'react-router-dom';

const Resultpage = ({rooms,onClick}) => {
    
    return (
        <>
                <span className='toggle' onClick={onClick}>Big<br></br>Photo</span>
                <h1 className='text_h1'>Do you have a favorite place to stay?</h1>
                <ul>
                    {rooms.map(room=>(
                    <Link to={`/detail/${room.no}`}>
                        <li key={room.no}>
                            <div className='imgbox one'>
                                <img src={`https://hhh-server.herokuapp.com/img/${room.imgurl}`} alt=""/>
                            </div> 
                            <div className='textbox'>
                                <p className='text_name'>{room.rname}</p>
                                <p className='text_price'>{room.price}</p>
                            </div>
                        </li>
                    </Link>
                    ))}
                </ul>
        </>
    );
};

export default Resultpage;