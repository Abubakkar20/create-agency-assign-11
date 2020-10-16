import React from 'react';
import Headermain from '../HeaderMain/Headermain';
import Navber from '../Navber/Navber';
import  './Header.css'

const Header = () => {
    return (
            <div className="container header-conrtainer"> 
            <Navber></Navber>
            <Headermain></Headermain>
            </div>
       
    );
};

export default Header;