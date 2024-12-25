import React, { useState } from 'react';
import * as Yup from 'yup';
import axios from 'axios'; 
import './Login.css';
import googleHome from '../Assets/googleBtn.svg';
import emailIcon from '../Assets/emailIcon.svg';
import passwordIcon from '../Assets/passwordIcon.svg';
import sigininVector from '../Assets/signinVector.svg';
import { useNavigate } from 'react-router-dom';
import NavbarHome from './Navbar/NavbarHome';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const validationSchema = Yup.object().shape({
        email: Yup.string().email(`That doesn't look like an email address`).required('Email is required'),
        password: Yup.string()
            .min(8, 'Password is too short - should be 8 chars minimum')
            .required('Password is required')
    });

    const handleFieldValidation = async (name, value) => {
        try {
            await validationSchema.validateAt(name, { [name]: value });
            setErrors((prevErrors) => ({ ...prevErrors, [name]: '' })); 
        } catch (err) {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: err.message })); 
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
        handleFieldValidation(name, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        try {
            await validationSchema.validate({ email, password }, { abortEarly: false });
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            const { token } = response.data;
            console.log('JWT Token:', token);
            localStorage.setItem('token', token); 
            navigate('/traffic');
            setEmail('');
            setPassword('');
        } catch (err) {
            if (err.response) {
                console.log('error');
            } else if (err.name === 'ValidationError') {
                const validationErrors = {};
                err.inner.forEach((error) => {
                    validationErrors[error.path] = error.message;
                });
                setErrors(validationErrors);
            } else {
                console.log('object');
            }
        }
    };
    const openRegisterModal = () => {
        navigate('/register');
    };

    return (
        <>
            <NavbarHome />
            <div className="ModalContent">
                <div className="modal-left">
                    <h2 className='SignInModalTitle'>Sign in to continue</h2>

                    <button className="googleBtn">
                        <img src={googleHome} alt="Google Icon" /> Sign in with Google
                    </button>

                    <div className="divider">
                        <hr />
                        <span>Or</span>
                        <hr />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="input-wrapper">
                            <label>Email address</label>
                            <div className="input-icon">
                                <img
                                    src={emailIcon}
                                    alt="email icon"
                                    className={`icon ${errors.email ? 'icon-error' : ''}`}
                                />
                                <input
                                    type="text"
                                    name="email"
                                    placeholder='Enter your email'
                                    value={email}
                                    onChange={handleInputChange}
                                    className={errors.email ? 'input-error' : ''}
                                />
                            </div>
                            {errors.email && <div className='errorMsg'>{errors.email}</div>}
                        </div>
                        <div className="input-wrapper">
                            <label>Password</label>
                            <div className="input-icon">
                                <img
                                    src={passwordIcon}
                                    alt="password icon"
                                    className={`icon ${errors.password ? 'icon-error' : ''}`}
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder='Enter your password'
                                    value={password}
                                    onChange={handleInputChange}
                                    className={errors.password ? 'input-error' : ''}
                                />
                            </div>
                            {errors.password && <div className='errorMsg'>{errors.password}</div>}
                        </div>

                        <button type="submit" className="signInBtn">Log In</button>
                    </form>

                    <p className='linkRegister'>Don't have an account? {' '}
                        <span><button className='linkToRegister' onClick={openRegisterModal}>Create one!</button></span>
                    </p>
                </div>

                <div className="modal-right">
                    <img src={sigininVector} alt="" className="right-image" />
                </div>
            </div>
        </>
    );
};

export default Login;
