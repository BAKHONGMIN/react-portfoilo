/* eslint-disable*/
import React from 'react'; 
import Submenu from './img/submenuimg.png';
let submenu  = <img src={Submenu} alt="submenu" className="submenuimg" />;
const Main = (props) => { 
    return ( 
    <div><li>{submenu}<a href="" className="submenutext">{props.name}</a></li></div> 
    ); }; 
export default Main;
