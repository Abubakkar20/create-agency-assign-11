import React from 'react';
import { Link } from 'react-router-dom';
import './OrderList.css'
const OrderLists = () => {
    return (
        <section>

            <div className="d-flex justify-content-between container">
                <h4>Logo Here</h4>
                <h4>Order</h4>
                <h4>Name</h4>
            </div>

            <div  className="container-fluid row">

                <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }} >
                    <ul className="list-unstyled py-5 px-4">
                        <li>Order</li>
                        <li>Service List</li>
                      <Link to="/review"> <li>Review</li></Link> 
                    </ul>
                </div>

                <div className="col-md-10 orderliststyle">
                    <div style={{ width: "492px",marginTop:"40px" }}>

                    <h3>SELECTED PROJECT HERE</h3>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OrderLists;