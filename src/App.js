
import './App.css';
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
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/searchResult' element={<Result/>} />
<<<<<<< HEAD
        {/* <Route path='/searchResult' element={<ResultListContainer/>} /> */}
=======
        <Route path='/searchResultk/:keyword' element={<ResultListContainer/>} />
>>>>>>> 85eeac43eb8af9a1b38645722fbafbc242650380
        {/* 나중에 경로에 아이디로 바꿔주기★ */}
        <Route path='/detail/:1' element={<Detailview/>} />
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
