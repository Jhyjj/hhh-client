
import './App.css';
import Header from './include/Header';
import Footer from './include/Footer';
import {Routes, Route} from 'react-router-dom';
import Main from './Main/Main';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main/>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
