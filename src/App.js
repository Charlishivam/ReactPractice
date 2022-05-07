import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import List from './component/List';

import Sidebar from './component/Sidebar';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route exact path="/" name="Home" element={<Home />} />
        <Route exact path="/about" name="About" element={<About />} />
        <Route exact path="/list" name="List" element={<List />} />
        <Route exact path="/*" name="404Page" element={<h1>404 page</h1>} />
      </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;