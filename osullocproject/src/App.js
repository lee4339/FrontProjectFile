import React from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom';
import MainPage from './main';
import Product from './product';
import { BiSearch } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import { BiDotsVerticalRounded } from "react-icons/bi";



function App() {
  return (
  <>
    {/* 상단부분 */}
    <header className='header'>
      <div className='headerIn'>
        <div className='leftHeader'>
          <div>
            <h1 className='logo'><Link to="/" style={{textDecoration : 'none'}}><img src='./images/logo-white.png' alt=''/></Link></h1>
          </div>
          <div>
            <nav className='nav'>
              <ul>
                <li className='nav1'><Link to="/product" style={{color : 'rgb(255, 255, 255)', fontWeight : '500', textDecoration : 'none'}}>제품</Link></li>
                <li className='nav2'><Link to="" style={{color : 'rgb(255, 255, 255)', fontWeight : '500', textDecoration : 'none'}}>선물추천</Link></li>
                <li className='nav3'><Link to="" style={{color : 'rgb(255, 255, 255)', fontWeight : '500', textDecoration : 'none'}}>다다일상</Link></li>
                <li className='nav4'><Link to="" style={{color : 'rgb(255, 255, 255)', fontWeight : '500', textDecoration : 'none'}}>브랜드</Link></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='rightHeader'>
          <ul className='navUtil'>
            <li className='icon-search'><BiSearch/></li>
            <li className='icon-cart'><BiCart/></li>
            <li className='icon-more'><BiDotsVerticalRounded/></li>
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
    </header>

    {/* 메인부분 */}
    <div>
      <Route path='/' exact={true} component={MainPage}/>
      <Route path='/product' component={Product}/>
    </div>

    {/* 하단부분 */}
    <footer className='footer'>
      <div className='footerH'>
        <div className='footerHBox'>
          <div className='footerLogin'>
            <div className='loginBtnF'><Link className='lbLink'>로그인</Link></div>
            <div className='snsIcon'>
              <Link><img src='images/facebookicon.png'/></Link>
              <Link><img src='images/instagramicon.png'/></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='footerM'>
        <div className='footerMBox'>
          <div className='footerNumber'>
            <div className='fnTitle'>고객상담센터 · 주문/배송문의</div>
            <div className='fnPhone'>080-805-5555</div>
            <div className='fnTime'>평일 09:30 - 17:00 (점심 11:30 - 13:00)</div>
          </div>
          <div className='AdminInfo'>
            <div className='AdTitle'>특판, 대량구매 문의</div>
            <div className='AdEmail'>help@osulloc.com</div>
            <div className='AdMail'>
              <span className='kakaoSpan'>카카오톡ID : osullocmall</span>
              <p><span>평일 09:30 - 17:00 (점심 11:30 - 13:00)</span></p>
            </div>
          </div>
          <div className='footerServiceBox'>
            <ul>
              <li><Link className='fcLink'><img src='images/fc01.png'/><span>매장안내</span></Link></li>
              <li><Link className='fcLink'><img src='images/fc02.png'/><span>멤버십혜택</span></Link></li>
              <li><Link className='fcLink'><img src='images/fc03.png'/><span className='span02'>FAQ</span></Link></li>
              <li><Link className='fcLink'><img src='images/fc04.png'/><span>1:1문의</span></Link></li>
              <li><Link className='fcLink'><img src='images/fc05.png'/><span className='span04'>뷰티포인트<br/>추후적립</span></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footerF'>
        <div className='footerFBox'>
          <div className='footerLogo'>
            <img src='./images/f_logo.png' alt=''/>
          </div>
          <div className='brandInfo'>
            <div className='bi1'>
              <ul>
                <li>회사소개</li>
                <li>서비스 이용약관</li>
                <li><b className='liB'>개인정보 처리방침</b></li>
                <li>영상정보 처리방침</li>
                <li>뷰티포인트</li>
                <li>임직원할인</li>
                <li>사이트맵</li>
                <li>전자공고</li>
              </ul>
            </div>
            <div className='bi2'>
              <div className='biAddress'>
              ㈜ 오설록
              <br/>
              대표이사:서혁제 주소:서울특별시 용산구 한강대로 100, 14층(한강로2가) 사업자등록번호: 390-87-01499
                <div className='infoBtn'>사업자 정보확인 〉</div>
              <br/>
              통신판매업신고번호:2019-서울용산-1173호 호스팅제공자: ㈜오설록
              <br/>
              <br/>
              (주)오설록은 오설록 브랜드를 제외한 입점 브랜드에 대해서는 통신판매중개자 이며 통신판매의 당사자가 아닙니다.
              <br/>
              따라서 입점판매자가 등록한 상품정보 및 거래에 대해 책임을 지지 않습니다.
              </div>
            </div>
          </div>
          <div className='inicis'>
            <div className='inicisBox'>
              <div className='iBoxTitle'>(주)이니시스 구매안전서비스</div>
              <div className='iBoxMain'>
                <img src='./images/INIPAY.png' alt=''/>
                <div className='iBoxWrite'>고객님의 안전거래를 위해 현금 거래에 대해 이니페이 에스크로서비스를 이용하실 수<br/> 있습니다.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
  );
}

export default App;
