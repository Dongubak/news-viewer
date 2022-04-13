import './App.css';
import './App.scss';
import React from 'react';
import NewsPage from './NewsPage';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={ <NewsPage></NewsPage> }>
          </Route>
          <Route path='/:category' element={ <NewsPage></NewsPage> }></Route>
        </Routes>
    </div>
  );
}

export default App;
