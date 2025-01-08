import React from 'react';
import {Route,Link} from 'react-router-dom'
import './App.css';
//yarn add react-router-dom@5
import MainContent from './main';
import ContactUs from './subComponents/ContactUs';

function App() {
  return (
    <div className='body'>
      <header>
        <div className='inbox'>
          <h1 className='logo'><Link to ="/">LOGO</Link></h1>
          <nav className='nav'>
            <ul>
              <li>menu1</li>
              <li>menu2</li>
              <li>menu3</li>
              <li><Link to="/subComponents/ContactUs">menu4</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <div>
        <Route path="/" exact={true} component={MainContent}/>
        <Route path="/subComponents/ContactUs" component={ContactUs}/>
      </div>
    </div>
  );
}

export default App;
