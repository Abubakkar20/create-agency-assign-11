import React from 'react';
import FeedBack from '../FeedBack/FeedBack';
import Footer from '../Footer/Footers';
import Header from '../Header/Header';
import Services from '../Services/Service';
import WorkPlace from '../Workarea/WorkPlace';
import Works from '../Works/Works';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <WorkPlace></WorkPlace>
            <Services></Services>
            <Works></Works>
            <FeedBack></FeedBack>
          <Footer></Footer>
        </div>
    );
};

export default Home;