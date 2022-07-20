import './App.css';
import React, {useRef, useEffect} from 'react';
import Header from './include/Header';
import Footer from './include/Footer';
import {Routes, Route} from 'react-router-dom';
import Main from './Main/Main';
import Login from './Login/Login';
import Join from './Join/Join';
import Result from './Result/Result';
import Detailview from './Detail/Detailview';
import Booking from './Booking/Booking';
import Reservation from './Reservation/Reservation';
import Sugso from './Sugso/Sugso';
import Sugso2 from './Sugso/uploadtest';
import ResultListContainer from './Result/ResultListContainer';


function App() {

// 마우스 커서 start
const delay = 10;

const dot = useRef(null);
const dotOutline = useRef(null);

const cursorVisible = useRef(true);
const cursorEnlarged = useRef(false);

const endX = useRef(window.innerWidth / 2);
const endY = useRef(window.innerHeight / 2);
const x = useRef(0);
const y = useRef(0);

const requestRef = useRef(null);

useEffect(() => {
    document.addEventListener('mousedown', mouseOutEvent);
    document.addEventListener('mouseup', mouseOutEvent);
    document.addEventListener('mousemove', mouseMoveEvent);
    document.addEventListener('mouseenter', mouseEnterEvent);
    document.addEventListener('mouseleave', mouseLeaveEvent);
    animateDotOutline();

    return () => {
        document.removeEventListener('mousedown', mouseOverEvent);
        document.removeEventListener('mouseup', mouseOutEvent);
        document.removeEventListener('mousemove', mouseMoveEvent);
        document.removeEventListener('mouseenter', mouseEnterEvent);
        document.removeEventListener('mouseleave', mouseLeaveEvent);
        cancelAnimationFrame(requestRef.current);
    }

}, []);

const toggleCursorVisiblility = () => { // 화면 밖으로 나가면 사라짐
    if (cursorVisible.current) {
        dot.current.style.opacity = 1;
        dotOutline.current.style.opacity = 1;
    } else {
        dot.current.style.opacity = 0;
        dotOutline.current.style.opacity = 0;
    }
}
const toggleCursorSize = () => { // 커서 사이즈
    if (cursorEnlarged.current) {
        dot.current.style.transform = 'scale(0.75)';
        dotOutline.current.style.transform = 'scale(1.5)';
    } else {
        dot.current.style.transform = 'scale(1)';
        dotOutline.current.style.transform = 'scale(1)';
    }
}

const mouseOverEvent = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
}
const mouseOutEvent = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
}
const mouseEnterEvent = () => {
    cursorVisible.current = true;
    toggleCursorVisiblility();
}
const mouseLeaveEvent = () => {
    cursorVisible.current = false;
    toggleCursorVisiblility();
}

const mouseMoveEvent = (e) => { // MoveEvent
    cursorVisible.current = true;
    toggleCursorVisiblility();

    endX.current = e.pageX;
    endY.current = e.pageY;

    dot.current.style.left = endX.current + 'px';
    dot.current.style.top = endY.current + 'px';
}

const animateDotOutline = () => {
    x.current += (endX.current - x.current) / delay;
    y.current += (endY.current - y.current) / delay;

    dotOutline.current.style.left = x.current + 'px';
    dotOutline.current.style.top = y.current + 'px';

    requestRef.current = requestAnimationFrame(animateDotOutline);
}
// 마우스 커서 end


  return (
    <div className="App">
      <div ref={dotOutline} className="cursor-dot-outline"></div>
      <div ref={dot} className='cursor-dot'></div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/searchResult' element={<Result/>} />
        <Route path='/searchResultk/:keyword' element={<ResultListContainer/>} />
        {/* 나중에 경로에 아이디로 바꿔주기★ */}
        <Route path='/detail/:id' element={<Detailview/>} />
        <Route path='/booking' element={<Booking/>} />
        <Route path='/reser' element={<Reservation/>} />
        {/* 숙소 등록 테스트 */}
        <Route path='/room' element={<Sugso2/>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
