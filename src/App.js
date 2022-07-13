
import './App.css';
import Header from './include/Header';
import Footer from './include/Footer';
import {Routes, Route} from 'react-router-dom';
import Main from './Main/Main';
import Result from './Result/Result';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/searchResult' element={<Result/>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
