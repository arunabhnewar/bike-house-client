import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo2.png';
import './Menubar.css';

const Menubar = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar className="navigation-bar" bg="white" variant="white" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <img className="img-fluid" src={logo} alt="" />
                    <Navbar.Brand to="/home" as={Link} className="fw-bold nav-menu" style={{ color: '#163336' }}>Bike House</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link as={Link}
                            className="fw-bold nav-menu"
                            to="/home"
                            style={{ color: '#163336' }}
                        >Home</Nav.Link>

                        <Nav.Link as={Link}
                            className="fw-bold nav-menu"
                            to="/products"
                            style={{ color: '#163336' }}
                        >Explore</Nav.Link>

                        {!user?.email ? (
                            <>
                                <Nav.Link
                                    as={Link}
                                    to="/login"
                                    style={{ color: '#163336' }}
                                    className="fw-bold nav-menu"
                                >Sign In</Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link
                                    as={Link}
                                    to="/dashboard"
                                    className="fw-bold nav-menu"
                                    style={{ color: '#163336' }}
                                >Dashboard</Nav.Link>

                                <Nav.Link
                                    as={Link}
                                    onClick={logOut}
                                    className="fw-bold nav-menu"
                                    style={{ color: '#163336' }}
                                >Sign Out</Nav.Link>

                                <NavDropdown
                                    title={
                                        <img
                                            style={{
                                                width: "50px",
                                                borderRadius: "50%",
                                            }}
                                            src={user?.photoURL}
                                            alt=""
                                        />
                                    }
                                >
                                    <div className="text-center">
                                        <h6>{user?.displayName}</h6>
                                        <p className="m-0 mb-2">{user?.email}</p>

                                    </div>
                                </NavDropdown>

                            </>
                        )}

                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
};

export default Menubar;

// {/* <Button onClick={logOut} className="btn btn-success">
// Sign Out
// </Button> */}