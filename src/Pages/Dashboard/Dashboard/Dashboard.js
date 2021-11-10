import React from 'react';
import './Dashboard.css'
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';
import Payment from '../Payment/Payment';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';


const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, admin } = useAuth();
    return (
        <div>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-3">
                        <h5>User Dashboard</h5>


                        <Link to={`${url}`}>
                            <li> My Order</li>
                        </Link>

                        <Link to={`${url}`}>
                            <li>Payment</li>
                        </Link>

                        <Link to={`${url}`}>
                            <li>Review</li>
                        </Link>

                        <div className="admin-menu">
                            <h5>Admin Dashboard</h5>
                            <Link to={`${url}/manageOrders`}>
                                <li>Manage Orders</li>
                            </Link>

                            <Link to={`${url}/addProduct`}>
                                <li>Add Product</li>
                            </Link>

                            <Link to={`${url}/makeAdmin`}>
                                <li>Make Admin</li>
                            </Link>

                        </div>
                    </div>

                    <div className="col-md-9">

                        <Switch>
                            <Route exact path={path}>
                                <MyOrder />
                            </Route>

                            <AdminRoute path={`${path}/payment`}>
                                <Payment />
                            </AdminRoute>

                        </Switch>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;