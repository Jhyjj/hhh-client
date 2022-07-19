import React from 'react';
import { useEffect, useState, useRef } from 'react';





const ResultDetailpage = ({data,onClick,id}) => {
    const homeRef = useRef();
    // div 선택
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll); //clean up
        };
      }, []);
      // 스크롤 이벤트 발생(함수실행)
      const handleScroll = () => {
        //   console.log(homeRef)
          homeRef.current.scrollIntoView({ behavior: 'smooth' });
      };
      //   scrollIntoView - 해당 div로 이동시켜줌
    return (
           <div className='dark_imgbox' ref={homeRef}>
                <span onClick={onClick}>작게보기</span>
                    <div className='desc_img'>
                    <img src={data[id].imgurl} alt=""/>            
                    <div className='textboxm'>
                           <p>Name : {data[id].rname}</p>
                            <p>Price : {data[id].price}</p>    
                </div>
                </div>
               </div> 
     
    );
};

export default ResultDetailpage;