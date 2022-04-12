/* eslint-disable*/
import React, { useState, useEffect } from 'react';
import './App.css';
import './fonts/font.css';
// import logo from './logo.svg';
import { ReactComponent as Menu } from './img/menu.svg';
import { ReactComponent as Logo } from './img/logo.svg';
import { ReactComponent as Search } from './img/search.svg';
import Submenu from './img/submenuimg.png';
import Mic  from './img/mic.svg';
import Blogo from './img/B.svg';
import Typing from '../Typing.js';



function App() {
  let [site,sitech] = useState(['https://pf.kakao.com/chat', 'https://github.com/BAKHONGMIN', 'mailto:ghdals2655@naver.com', 'tel:010-2162-2664']);

  
  
  return (
    <div className="App">
      <header>
        <div className='top'>
          <ul className='menu'>
            <li className='menu-text'><a href={site[0]} target='_blank'>Kakaotalk</a></li>
            <li className='menu-text'><a href={site[1]} target='_blank'>Git hub</a></li>
            <li className='menu-text'><a href={site[2]} target='_blank'>email</a></li>
            <li className='menu-text'><a href={site[3]}>Phone</a></li>
            <li className='menu-icon'>
              <svg className='dotmenu'>
                <Menu/>
              </svg>
            </li>
          </ul>
        </div>
      </header>

      <div className='bodywrap'>
        <Logo className='bak' width='200px' />
        <div className='search'>
          <ul>
            <li><Search className='fa-search icon-search' /></li>
            <div className='input'>
              <ul className='searchmenu'>
                <li>
                  <div><Typing className='typing-txt'/></div>
                </li>
                <li>
                  <div>
                    <ul>
                      <li><img src={Submenu} className='submenuimg'/>현명한 박홍민</li>
                      <li><img src={Submenu} className='submenuimg'/>현명한 박홍민</li>
                      <li><img src={Submenu} className='submenuimg'/>현명한 박홍민</li>
                      <li><img src={Submenu} className='submenuimg'/>현명한 박홍민</li>
                      <li><img src={Submenu} className='submenuimg'/>현명한 박홍민</li>
                    </ul>
                  </div>
                </li>
                <li><img src={Mic} className='fa-microphone icon-microphone' width='40px' alt='mic'/></li>
              </ul>
            </div>
          </ul>
        </div>
      </div>

      <div className='menuwrap'>
        <ul className='submenuwrap'>
          <div className='firstmenu'>
            <li className='about'><span className='aboutimg'><img src={Blogo} width='30px'/></span></li>

          </div>

        </ul>
      </div>

    </div>
  );
}




export default App;