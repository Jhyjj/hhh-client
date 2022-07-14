
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

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/searchResult' element={<Result/>} />
        {/* 나중에 경로에 아이디로 바꿔주기★ */}
        <Route path='/detail/:1' element={<Detailview/>} />
        <Route path='/booking' element={<Booking/>} />
        <Route path='/reser' element={<Reservation/>} />
        <Route path='/room' element={<Sugso/>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
