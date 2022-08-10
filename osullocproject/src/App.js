import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import MainImg from './component/mainImg';
import Contents from './component/contents';
import Footer from './component/footer';


function App() {
  return (
  <>
    <div className='header'>
      <div className='headerIn'>
        <div className='leftHeader'>
          <h1 className='logo'><img src='' alt=''/>로고삽입</h1>
          <nav className='nav'>
            <ul>
              <li className='nav1'><Link to="">제품</Link></li>
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
      <MainImg/>
      <Contents/>
      <Footer/> 
    </div>
  </>
  );
}

export default App;
