import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menupage from './pages/menu/Menupage.js';
import Header from './pages/menu/Header.js';
import './style.js';

class App extends React.Component {
  

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            {<Route path='/'  component = { Header }></Route> }
            {<Route path='/'  component = { Menupage }></Route> }
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
