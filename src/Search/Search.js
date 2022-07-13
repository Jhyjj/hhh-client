import React from 'react';
import './style.css'

const Search = () => {
    return (
        <div id="Search">
            <form>
                <input placeholder='당신이 머물고싶은 곳은 어떤 곳인가요?'/>
                <button type='submit'>GO</button>
                <ul>
                    <li className='likebtn'>바다</li>
                    <li className='likebtn'>숲</li>
                    <li className='likebtn'>도심</li>
                    <li className='likebtn'>시골</li>
                    <li className='likebtn'>???</li>
                </ul>
            </form>
        </div>
    );
};

export default Search;