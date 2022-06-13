import React from 'react';

import Tasks from './Components/Tasks/Tasks';
import Helper from './Components/Helper/Helper';
import Theme from './Components/Theme/Theme';

import './App.scss';
import logo from './images/logo.svg'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className='logo'>
          <div className='logo_background'>
            <img src={logo} alt="" />
            <p>tbb</p>
          </div>

        </div>
        <Helper/>
        <Tasks/>
        <Theme/>  
      </div>
    </div>
  );
}

export default App;
