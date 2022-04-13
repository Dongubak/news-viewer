import logo from './logo.svg';
import './App.css';
import './App.scss';
import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { Navbar, Container, Nav } from 'react-bootstrap';
import NewsList from './NewsList';
import Category from './Category';
import NewsPage from './NewsPage';
import styledComponents from 'styled-components';
import { Route, Routes } from 'react-router-dom';
const AppBlock = styledComponents.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 50px 0px 0px 50px;
`;
function App() {
  const [data, setData] = useState(null);
  const [category, setCategory] = useState('all');
  const onSelect = useCallback( category => setCategory(category) , []);
  const onClick = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=fe9295cb33b8496694efdd189ac7fecf');
      setData(response.data);
    } catch ( e ) {
      console.log(e);
    }
  };
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
