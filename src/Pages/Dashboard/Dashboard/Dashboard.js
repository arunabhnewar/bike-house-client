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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle, faCartPlus, faCogs, faLongArrowAltLeft, faTasks, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';



const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    return (

        <div className="container-fluid">
            <div className="row">

                <div className="col-md-3 col-sm-12 dashboard-menubar" style={{ backgroundColor: '#2F4F4F' }}>
                    <div className="accordion pt-3" id="accordionExample">


                        {admin &&
                            <div className="accordion-item mt-3 border-white" style={{ backgroundColor: '#2F4F4F' }}>

                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: '#2F4F4F', color: "#df453e" }}>
                                        Admin Dashboard
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">

                                        <Link className="text-decoration-none" to={`${url}/makeAdmin`}>
                                            <li className="dashboard-menu-item text-start"
                                                style={{ color: "#fff" }}>
                                                <FontAwesomeIcon icon={faUserCog} /> Make Admin</li>
                                        </Link>

                                        <Link className="text-decoration-none" to={`${url}/addProduct`}>
                                            <li className="dashboard-menu-item text-start"
                                                style={{ color: "#fff" }}>
                                                <FontAwesomeIcon icon={faBicycle} /> Add Product</li>
                                        </Link>

                                        <Link className="text-decoration-none" to={`${url}/manageProducts`}>
                                            <li className="dashboard-menu-item text-start"
                                                style={{ color: "#fff" }}>
                                                <FontAwesomeIcon icon={faTasks} /> Manage Products</li>
                                        </Link>

                                        <Link className="text-decoration-none" to={`${url}/manageAllPurchases`}>
                                            <li className="dashboard-menu-item text-start"
                                                style={{ color: "#fff" }}>
                                                <FontAwesomeIcon icon={faCogs} /> Manage All Purchases</li>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        }

                        <div className="accordion-item border-white" style={{ backgroundColor: '#2F4F4F' }}>
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: '#2F4F4F', color: '#fff' }}>
                                    User Dashboard
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">


                                    <Link className="text-decoration-none" to={`${url}`}>
                                        <li className="dashboard-menu-item text-start"
                                            style={{ color: "#df453e" }}>
                                            <FontAwesomeIcon icon={faCartPlus} /> My Purchases</li>
                                    </Link>

                                    <Link className="text-decoration-none" to={`${url}/payment`}>
                                        <li className="dashboard-menu-item text-start"
                                            style={{ color: "#df453e" }}>
                                            <FontAwesomeIcon icon={faCcVisa} /> Payment</li>
                                    </Link>

                                    <Link className="text-decoration-none" to={`${url}/review`}>
                                        <li className="dashboard-menu-item text-start"
                                            style={{ color: "#df453e" }}>
                                            <FontAwesomeIcon icon={faStar} /> Review</li>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-start mt-5 pt-5">
                        <Link to="/home" className="dashboard-menu-item text-decoration-none text-white">
                            <FontAwesomeIcon icon={faLongArrowAltLeft} />  Back
                        </Link>
                    </div>
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

    );
};

export default Dashboard;