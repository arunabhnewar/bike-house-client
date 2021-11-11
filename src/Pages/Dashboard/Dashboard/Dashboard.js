import React from 'react';
import './Dashboard.css'
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import ManageOrders from '../ManageOrders/ManageOrders';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';


const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, admin } = useAuth();
    return (
        <>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-3 dashboard-menubar">
                        <div className="admin-menu">
                            <h5>Admin Dashboard</h5>
                            <Link className="text-decoration-none" to={`${url}/manageOrders`}>
                                <li className="dashboard-menu-item">Manage Orders</li>
                            </Link>

                            <Link className="text-decoration-none" to={`${url}/addProduct`}>
                                <li className="dashboard-menu-item">Add Product</li>
                            </Link>
                            <Link className="text-decoration-none" to={`${url}/manageProducts`}>
                                <li className="dashboard-menu-item">Manage Products</li>
                            </Link>

                            <Link className="text-decoration-none" to={`${url}/makeAdmin`}>
                                <li className="dashboard-menu-item">Make Admin</li>
                            </Link>

                        </div>

                        <h5>User Dashboard</h5>
                        <Link className="text-decoration-none" to={`${url}`}>
                            <li className="dashboard-menu-item"> My Order</li>
                        </Link>

                        <Link className="text-decoration-none" to={`${url}/payment`}>
                            <li className="dashboard-menu-item">Payment</li>
                        </Link>

                        <Link className="text-decoration-none" to={`${url}/review`}>
                            <li className="dashboard-menu-item">Review</li>
                        </Link>
                    </div>

                    <div className="col-md-9">

                        <Switch>
                            <Route exact path={path}>
                                <MyOrder />
                            </Route>
                            <Route path={`${path}/payment`}>
                                <Payment />
                            </Route>
                            <Route path={`${path}/review`}>
                                <Review />
                            </Route>

                            <Route path={`${path}/manageOrders`}>
                                <ManageOrders />
                            </Route>
                            <Route path={`${path}/addProduct`}>
                                <AddProduct />
                            </Route>
                            <Route path={`${path}/manageProducts`}>
                                <ManageProducts />
                            </Route>
                            <Route path={`${path}/makeAdmin`}>
                                <MakeAdmin />
                            </Route>



                        </Switch>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;