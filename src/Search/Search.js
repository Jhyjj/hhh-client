import axios from 'axios';
import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './style.css';


const Search = () => {
    const navigate = useNavigate();

    const [keyword, setKeyword] = useState("")

    //검색어를 입력했을때 search를 input의 value로 변경해주기
    const onChange=(e)=>{
        setKeyword(e.target.value)
        console.log(keyword);
    }

    //키워드를 눌렀을때 search의 값을 해당 키워드로 변경해주기
    const onClick= (e)=>{
        onChange(e);
        document.querySelector('#Search').classList.toggle('popup');
        navigate(`/searchResultk/${keyword}`);
            
    }

    function PrintList(){
        document.querySelector('#Search').classList.toggle('popup'); //검색결과창으로 이동할때 검색팝업 닫아주기
        axios.get('https://hhh-server.herokuapp.com/search')
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
        navigate(`/searchResultk/${keyword}`);
        document.querySelector('#Search').classList.toggle('popup');        
    }

    return (
        <div id="Search">
            <form onSubmit={onSubmit}>
                <input placeholder='당신이 머물고싶은 곳은 어떤 곳인가요?' className='searchinput' onChange={onChange}/>
                <button type='submit'>GO</button>
                <ul>
                <Link to ='/searchResultk/바다'><input type="button" className='likebtn' onClick={onClick} value="바다"/></Link>
                    <Link to ='/searchResultk/숲'><input type="button" className='likebtn' onClick={onClick} value="숲"/></Link>
                    <Link to ='/searchResultk/도심'><input type="button" className='likebtn' onClick={onClick} value="도심"/></Link>
                    <Link to ='/searchResultk/시골'><input type="button" className='likebtn' onClick={onClick} value="시골"/></Link>
                    <Link to ='/searchResult'><li className='likebtn' onClick={PrintList}>모든 숙소보기</li></Link>
                </ul>
            </form>
        </div>
    );
};

export default Search;