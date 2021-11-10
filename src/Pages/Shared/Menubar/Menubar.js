import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo2.png';

const Menubar = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="white" variant="white" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <img className="img-fluid" src={logo} alt="" />
                    <Navbar.Brand to="/home" as={Link} className="fw-bold" style={{ color: '#163336' }}>Bike House</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link as={Link} className="text-dark" to="/home">Home</Nav.Link>

                        <Nav.Link as={Link} className="text-dark" to="/products">Explore</Nav.Link>

                        {!user?.email ? (
                            <>
                                <Nav.Link as={Link} to="/login" className="text-dark">Sign In</Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/dashboard" className="text-dark">Dashboard</Nav.Link>

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
                                        <Button onClick={logOut} className="btn btn-success">
                                            Sign Out
                                        </Button>
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