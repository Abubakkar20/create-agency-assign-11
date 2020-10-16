import React from 'react';
import { Link } from 'react-router-dom';
import navLogo from '../../../images/logos/logo.png'
const Navber = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light ">
                 <img style={{width:"100px"}}  src={navLogo} alt=""/>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link mr-5" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5" href="#">Our Portfolio</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link mr-5" href="#" > Our Team   </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5" href="#">  Contact Us</a>
                        </li>
                    </ul>
             
                    <form class="form-inline my-2 my-lg-0">
                   <Link to="/login"><button type="button" class="btn btn-dark ">login</button></Link>
                    
                 </form>

              </div>
            </nav>
        </div>
    );
};

export default Navber;