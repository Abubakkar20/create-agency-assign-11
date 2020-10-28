import React from 'react';

import { Link } from 'react-router-dom';
import './Order.css'

const Orders = () => {

    const handleSubmitForm = (e) => {


    }
    return (
        <section style={{ marginTop: "50px" }}>
            <div className="d-flex justify-content-between container">
                <h4>Logo Here</h4>
                <h4>Order</h4>
                <h4>Name</h4>
            </div>
            <div className="container-fluid  row ">

                <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }} >
                    <ul className="list-unstyled py-5 px-4">
                        <li>Order</li>
                        <Link to="/orderList"><li>Service List</li></Link>
                        <li>Review</li>
                    </ul>
                </div>
                <div className="col-md-10 orderStyle">
                    <div style={{ width: "492px" }}>
                        <form onSubmit={handleSubmitForm}>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Youer name / company's name" />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Your email assress" />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Graphic Design" />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Your email address" />
                            </div>
                            <div>
                                <textarea style={{ height: "200px", width: "494px" }} placeholder="project details"></textarea>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="price" />
                                </div>
                                <div class="col">
                                    <input style={{ backgroundColor: 'lightwhite' }} type="file" class="form-control" placeholder="Upload file" />
                                </div>
                            </div>

                            <button type="submit" style={{ width: "90px", marginTop: "10px" }} class="btn btn-dark btn-sm">Send</button>
                        </form>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Orders;