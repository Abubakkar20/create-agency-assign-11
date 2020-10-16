import React, { createContext, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import AddServices from './components/AddService/AddServices';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import Orders from './components/Order/Order/Orders';
import OrderLists from './components/OrderList/OrderLists';
import Review from './components/Review/Review';
import ServiceList from './components/ServiceList/ServiceList';



export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/order">
            <Orders></Orders>
          </Route>

          <Route path="/orderList">
            <OrderLists></OrderLists>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/serviceList">
            <ServiceList></ServiceList>
          </Route>
          <Route path="/addService">
            <AddServices></AddServices>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
        </Switch>

      </Router>
    </UserContext.Provider>

  );
}

export default App;
