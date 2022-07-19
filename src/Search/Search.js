import axios from 'axios';
import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './style.css';


const Search = () => {

    const [keyword, setKeyword] = useState("")

    //검색어를 입력했을때 search를 input의 value로 변경해주기
    const onChange=(e)=>{
        
        setKeyword(e.target.value)
        console.log(keyword);
    }

    //키워드를 눌렀을때 search의 값을 해당 키워드로 변경해주기
    const onClick=(e)=>{
        console.log(e.target);
        const {name} = e.target;
        setKeyword(name)       
    }

    function PrintList(){
        axios.get('http://localhost:3001/search')
        .then(result=>{
            
        })
        .catch(e=>{
            console.log(e);
        })
    }

    //onSubmit 함수 만들기
    function onSubmit(e){
        e.preventDefault();
        console.log(keyword);
        axios.get(`http://localhost:3001/searchKeyword/${keyword}`)
        .then(result=>{
            console.log(result);
            console.log(keyword);
        })
        .catch(e=>{
            console.log(e)
        })
    }

    return (
        <div id="Search">
            <form onSubmit={onSubmit}>
                <input placeholder='당신이 머물고싶은 곳은 어떤 곳인가요?' onChange={onChange}/>
                <button type='submit'>GO</button>
                <ul>
                    <li className='likebtn' onClick={onClick}>바다</li>
                    <li className='likebtn' onClick={onClick}>숲</li>
                    <li className='likebtn' onClick={onClick}>도심</li>
                    <li className='likebtn' onClick={onClick}>시골</li>
                    <Link to ='/searchResult'><li className='likebtn' onClick={PrintList}>모든 숙소보기</li></Link>
                </ul>
            </form>
        </div>
    );
};

export default Search;