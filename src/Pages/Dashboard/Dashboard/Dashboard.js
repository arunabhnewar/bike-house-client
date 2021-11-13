import React, { useState } from 'react';
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
import { faCartPlus, faCogs, faPlusSquare, faTasks, faUserCog, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faStar, faUser } from '@fortawesome/free-regular-svg-icons';
import Footer from '../../Shared/Footer/Footer'



import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent, } from "react-pro-sidebar";

//import icons from react icons
import { FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";


const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();


    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return (

        <>

            <div className="row">
                <div className="col-md-3 col-sm-12 p-0" style={{ backgroundColor: "#80d572" }}>
                    <div id="header" className="">
                        {/* collapsed props to change menu size using menucollapse state */}
                        <ProSidebar collapsed={menuCollapse}>
                            <SidebarHeader>
                                <div className="logotext pt-3">
                                    {/* small and big change using menucollapse state */}
                                    <p>{menuCollapse ? "Logo" : "Bike House"}</p>
                                </div>
                                <div className="closemenu" onClick={menuIconClick}>
                                    {/* changing menu collapse icon on click */}
                                    {menuCollapse ? (
                                        <FiArrowRightCircle />
                                    ) : (
                                        <FiArrowLeftCircle />
                                    )}
                                </div>
                            </SidebarHeader>

                            {
                                admin &&
                                <SidebarContent>
                                    <Menu iconShape="square">
                                        <MenuItem active={true} >
                                            <FontAwesomeIcon className="m-1" icon={faUserShield} />  Admin
                                        </MenuItem>
                                        <MenuItem>
                                            <Link className="text-decoration-none" to={`${url}/makeAdmin`}>
                                                <FontAwesomeIcon icon={faUserCog} /> Make Admin</Link>
                                        </MenuItem>
                                        <MenuItem >
                                            <Link className="text-decoration-none" to={`${url}/addProduct`}>
                                                <FontAwesomeIcon icon={faPlusSquare} /> Add Product</Link>
                                        </MenuItem>
                                        <MenuItem>
                                            <Link className="text-decoration-none" to={`${url}/manageProducts`}>
                                                <FontAwesomeIcon icon={faTasks} /> Manage Products</Link>
                                        </MenuItem>
                                        <MenuItem >
                                            <Link className="text-decoration-none" to={`${url}/manageAllPurchases`}>
                                                <FontAwesomeIcon icon={faCogs} /> Manage All Purchase</Link>
                                        </MenuItem>
                                    </Menu>
                                </SidebarContent>
                            }

                            <SidebarContent>
                                <Menu iconShape="square">
                                    <MenuItem active={true} >
                                        <FontAwesomeIcon className="m-1" icon={faUser} />  User
                                    </MenuItem>
                                    <MenuItem>
                                        <Link className="text-decoration-none" to={`${url}`}>
                                            <FontAwesomeIcon icon={faCartPlus} /> My Purchase</Link>
                                    </MenuItem>
                                    <MenuItem >
                                        <Link className="text-decoration-none" to={`${url}/review`}>
                                            <FontAwesomeIcon icon={faStar} /> Review </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link className="text-decoration-none" to={`${url}/payment`}>
                                            <FontAwesomeIcon icon={faCcVisa} /> Payment </Link>
                                    </MenuItem>

                                </Menu>
                            </SidebarContent>

                            <SidebarFooter>
                                <Menu iconShape="square">
                                    <MenuItem icon={<FiLogOut />}>
                                        <Link to="/home" className="dashboard-menu-item text-decoration-none"> Back </Link>
                                    </MenuItem>
                                </Menu>
                            </SidebarFooter>
                        </ProSidebar>
                    </div>
                </div>

                <div className="col-md-9 col-sm-12 p-0">

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
                <Footer />
            </div>

        </>

    );
};

export default Dashboard;