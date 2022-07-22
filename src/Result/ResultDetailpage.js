import React from 'react';
import { useEffect, useState, useRef } from 'react';

const ResultDetailpage = ({data,onClick,id}) => {
    const homeRef = useRef();
    // div 선택
    useEffect(() => {
      console.log(id)
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
              <span onClick={onClick} className='span1'></span>
              <span onClick={onClick} className='span2'></span>
              <div className='desc_img'>
                  <img src={data[id].imgurl ? data[id].imgurl : data[0].imgurl} alt=""/>            
                  <div className='textboxm'>
                      <p>✓ NAME</p>
                      <p>{data[id].rname ? data[id].rname : data[0].rname}</p>
                      <p>✓ PRICE</p>    
                      <p>{data[id].price ? data[id].price : data[0].price}</p>  
                  </div>
              </div>
              <div className='scroll_text'>scroll</div>
              <div className='scroll_line'></div>
          </div> 
     
    );
};

export default ResultDetailpage;