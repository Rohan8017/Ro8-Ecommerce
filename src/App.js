
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './component/Header';
import { useState,useEffect } from 'react';

function App() {
  const [searchVal, setSearchVal] = useState('');
  const [productData, setProductData] = useState([]);
  async function getResponse() {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json();
    setProductData(data);
  }
  useEffect(() => {
    getResponse();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header setSearchVal={setSearchVal}/>
        <Routes>
          <Route path='/' element={<Home productData={productData} searchVal={searchVal}/>} />
          {/* <Route path='/' element={<Cart/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
