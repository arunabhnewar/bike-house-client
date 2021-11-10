import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import register from '../../../images/register.jpg';


const Registration = () => {
    const [loginData, setLoginData] = useState({});
    const { user, handleRegister, isLoading, authError } = useAuth();

    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Wrong Password');
            return
        }
        handleRegister(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div className="container my-5 pb-3">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="img">
                        <img className="img-fluid w-75" src={register} alt="" />
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <h2 className="text-center fw-bold" style={{ color: '#163336' }}>Sign Up</h2>

                    {isLoading && <Spinner animation="border" variant="danger" />}
                    {user?.email && <Alert >User Created successfully!</Alert>}

                    {!isLoading &&
                        <form onSubmit={handleLoginSubmit}
                            className="pt-5">

                            <input onBlur={handleOnBlur} className="input-field border-bottom border-0 w-50" type="text" name="name" placeholder="Name" required />
                            <br /> <br />
                            <input onBlur={handleOnBlur} className="input-field border-bottom border-0 w-50" type="email" name="email" placeholder="Email" required />
                            <br /> <br />
                            <input onBlur={handleOnBlur} className="input-field border-bottom border-0 w-50" type="password" name="password" placeholder="Password" required />
                            <br /> <br />
                            <input onBlur={handleOnBlur} className="input-field border-bottom border-0 w-50" type="password" name="password2" placeholder="Re-type Password" required />
                            <br /> <br />

                            <input style={{ backgroundColor: '#163336' }} className="mt-5 w-50 btn btn-success m-auto" type="submit" value="Sign Up" />

                            <p className="text-center pt-3 mb-5">
                                <NavLink className="text-decoration-none text-success" to="/login">
                                    Already Registered? Please Sign In!!
                                </NavLink>
                            </p>

                            <p className="text-danger">{authError}</p>
                        </form>}
                </div>

            </div>
        </div>
    );
};

export default Registration;