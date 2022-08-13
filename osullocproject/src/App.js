import React from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom';
import MainPage from './main';
import Product from './product';



function App() {
  return (
  <>
    <div className='header'>
      <div className='headerIn'>
        <div className='leftHeader'>
          <h1 className='logo'><img src='' alt=''/>로고삽입</h1>
          <nav className='nav'>
            <ul>
              <li className='nav1'><Link to="/product">제품</Link></li>
              <li className='nav2'><Link to="">선물추천</Link></li>
              <li className='nav3'><Link to="">다다익선</Link></li>
              <li className='nav4'><Link to="">브랜드</Link></li>
            </ul>
          </nav>
        </div>
        <div className='rightHeader'>
          <ul className='navUtil'>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul className='navDrop'>
            <li className='navDrop1'>로그인</li>
            <li className='navDrop2'>
              KOREAN
              <span className='DropSpan'>▼</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <Route path='/' exact={true} component={MainPage}/>
      <Route path='/product' component={Product}/>
    </div>
  </>
  );
}

export default App;
