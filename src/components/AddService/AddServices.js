import React from 'react';
import { Link } from 'react-router-dom';
import './Addservices.css'
const AddServices = () => {
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
                        <Link to="/orderLists"><li>Service List</li></Link>
                        <li>Review</li>
                    </ul>
                </div>
                <div className="col-md-10 orderStyle">
                    <div style={{ width: "492px" }}>
                        <form>

                            <div class="row">
                                <div class="col">
                                    <label for="title">Service Title:</label>
                                    <input type="text" name="title" class="form-control" placeholder="Enter title" />
                                </div>
                                <div class="col">
                                    <label for="icon">Icon</label>
                                    <input style={{ backgroundColor: 'lightwhite' }} type="file" name="icon" class="form-control" placeholder="Upload image" />
                                </div>
                            </div>
                            <div>
                            <label for="description">Description</label>
                                <textarea name="description" style={{ height: "100px", width: "494px" }} placeholder="Enter Description"></textarea>
                            </div>

                            <button type="button" style={{ width: "90px", marginTop: "10px",float: "right",backgroundColor:"green"}} class="btn btn-dark btn-sm">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddServices;