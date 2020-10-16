import React from 'react';
import headerImg from '../../../images/logos/Frame.png'

const Headermain = () => {
    return (
        <main style={{height:"500px"}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-1">
                <h2>Let's grow Your <br/> Brand to The <br/>Next Level </h2>
                <p> Lorem ipsum dolor sit amet, consectetur adip lorem, consectetur adipiscing elit <br/> adipiscing elit </p>
                <button type="button" style={{width:"120px"}} class="btn btn-dark btn-sm">Hire Us</button>
            </div>
            <div className="col-md-6">
                <img src={headerImg} alt="" className="img-fluid"/>
            </div>
            
        </main>
    );
};

export default Headermain;