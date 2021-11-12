import React from 'react';
import './Dashboard.css'
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import MyPurchases from '../MyPurchases/MyPurchases';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import ManageAllPurchases from '../ManageAllPurchases/ManageAllPurchases';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';


const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    return (
        <>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-3 dashboard-menubar">
                        <div className="admin-menu">
                            <h5>Admin Dashboard</h5>
                            {admin &&
                                <>
                                    <Link className="text-decoration-none" to={`${url}/makeAdmin`}>
                                        <li className="dashboard-menu-item">Make Admin</li>
                                    </Link>

                                    <Link className="text-decoration-none" to={`${url}/addProduct`}>
                                        <li className="dashboard-menu-item">Add Product</li>
                                    </Link>

                                    <Link className="text-decoration-none" to={`${url}/manageProducts`}>
                                        <li className="dashboard-menu-item">Manage Products</li>
                                    </Link>

                                    <Link className="text-decoration-none" to={`${url}/manageAllPurchases`}>
                                        <li className="dashboard-menu-item">Manage All Purchases</li>
                                    </Link>
                                </>
                            }

                        </div>

                        <h5>User Dashboard</h5>
                        <Link className="text-decoration-none" to={`${url}`}>
                            <li className="dashboard-menu-item"> My Purchases</li>
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
                                <MyPurchases />
                            </Route>
                            <Route path={`${path}/payment`}>
                                <Payment />
                            </Route>
                            <Route path={`${path}/review`}>
                                <Review />
                            </Route>

                            <AdminRoute path={`${path}/makeAdmin`}>
                                <MakeAdmin />
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageAllPurchases`}>
                                <ManageAllPurchases />
                            </AdminRoute>
                            <AdminRoute path={`${path}/addProduct`}>
                                <AddProduct />
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageProducts`}>
                                <ManageProducts />
                            </AdminRoute>
                        </Switch>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;