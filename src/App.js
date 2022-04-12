/* eslint-disable*/
import React, { useState, useEffect } from 'react';
import './App.scss';
import './fonts/font.css';
import Menu from './img/menu.svg';
import Logo from './img/logo.svg';
import Search from './img/search.svg';
import Submenu from './img/submenuimg.png';
import Mic  from './img/mic.svg';
import Blogo from './img/B.svg';
import Portfolio from './img/portfolio.svg';
import Interview from './img/pre-interview.svg';
import Contact from './img/contact_me.svg';
import Design from './img/design.svg';
import Banner from './img/banner.svg';
import Typing from './Typing.js';
import About from './component/About';
import Main from './Main';





function App() {
  let [site,sitech] = useState(['https://pf.kakao.com/chat', 'https://github.com/BAKHONGMIN', 'mailto:ghdals2655@naver.com', 'tel:010-2162-2664']);
  let submenu  = <img src={Submenu} alt="submenu" className="submenuimg" />;
  let [menutext,menutextch] = useState(['About_me', 'Portfoilo', 'Interview', 'Contact_me','Design']);
  
  const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정
  const toggleMenu = () => {
    setMenu(isOpen => !isOpen); // on,off 개념 boolean
  }
  const names = ['현명한 박홍민', '똑똑한 박홍민', '한결같은 박홍민', '진실된 박홍민', '변하지 않는 박홍민', '카멜레온 같은 박홍민'] ;
  const nameList = names.map((name) => (<Main name={name}/>));



  return (
    <div className="App">
    <header>
        <div className="top">
            <ul className="menu">
                <li className="menu-text"><a href="https://pf.kakao.com/chat" target="_blank">Kakaotalk</a></li>
                <li className="menu-text"><a href="https://github.com/BAKHONGMIN" target="_blank">Git hub</a></li>
                <li className="menu-text"><a href="mailto:ghdals2655@naver.com">Email</a></li>
                <li className="menu-text"><a href="tel:010-2162-2664">Phone</a></li>
                <li className="menu-icon">
                    <a href="#">
                        <button><img src={Menu} onClick={()=>toggleMenu()}/></button>
                    </a>
                </li>
            </ul>
        </div>
    </header>
    <div className="bodywrap">
        <img src={Logo} className="bak" />
        <div className="search">
            <ul>
                <li><img className="fa-search icon-search" src={Search} alt="search" /></li>
                <li className="input">
                    <ul className="searchmenu">
                        <li>
                          <Typing/>
                        </li>
                    </ul>
                    <ul className="submenu">
                        <div> {nameList} </div>
                    </ul> 
                </li>
                <li><img className="fa-microphone icon-microphone" src={Mic} alt="mic" /></li>
            </ul>
        </div>
    </div>
    <div className={isOpen ? "menuwrap" : "d-none"}>
        <ul className="submenuwrap">
            <div className='d-flex submenu'>
            <li className="menuimg"><img src={Blogo} width='20px'/><br/><span className='menutext'>{menutext[0]}</span></li>
            <li className="menuimg"><img src={Portfolio} width='30px'/><br/><span className='menutext'>{menutext[1]}</span></li>
            <li className="menuimg"><img src={Interview} width='30px'/><br/><span className='menutext'>{menutext[2]}</span></li>
            </div>
            <div className='d-flex submenu'>
            <li className="menuimg"><img src={Contact} width='30px'/><br/><span className='menutext'>{menutext[3]}</span></li>
            <li className="menuimg"><img src={Design} width='25px'/><br/><span className='menutext'>{menutext[4]}</span></li>
            <li className="menuimg"><img src={Banner} width='30px'/><br/><span className='menutext'>{menutext[4]}</span></li>
            </div>        
        </ul>
    </div>

    </div>
  );
}




export default App;
