import React from 'react';
import { Link } from 'react-router-dom';

const MakeAdmin = () => {
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

                            <div>
                                <div>
                                    <label for="email">Email:</label>
                                    <input type="email" style={{ width: "350px" }} name="email" class="form-control" placeholder="jui@gmail.com" />
                                </div>
                                <div>
                                    <button type="button" style={{ width: "90px",backgroundColor: "green", marginTop: "35px"}} class="btn btn-sm">Submit</button>
                                </div>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;