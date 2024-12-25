import React, { useState } from 'react';
import Modal from 'react-modal';
import './ModalSignIn.css';
import sigininVector from '../../Assets/signinVector.svg';
import closeTag from '../../Assets/closeTag.svg';
import googleHome from '../../Assets/googleBtn.svg';
import emailIcon from '../../Assets/emailIcon.svg';
import passwordIcon from '../../Assets/passwordIcon.svg';
import * as Yup from 'yup';


Modal.setAppElement('#root');

const SigninModal = ({ modalIsOpen, closeModal, openRegisterModal}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});


    const validationSchema = Yup.object().shape({
        email: Yup.string().email(`That doesn't look like an email address`).required('Email is required'),
        password: Yup.string()
            .min(8, 'Password is too short - should be 8 chars minimum')
            .required('Password is required')
    });

    // Function to validate field on change
    const handleFieldValidation = async (name, value) => {
        try {
            await validationSchema.validateAt(name, { [name]: value });
            setErrors((prevErrors) => ({ ...prevErrors, [name]: '' })); // Clear the error if valid
        } catch (err) {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: err.message })); // Set specific error
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Update state for form fields
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);

        // Validate the input as the user types
        handleFieldValidation(name, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors({}); // Reset errors before validation

        try {
            // Validate the entire form
            await validationSchema.validate({ email, password }, { abortEarly: false });

            // If validation is successful
            console.log('Form Data:', { email, password });
            setEmail('');
            setPassword('');
            closeModal();
        } catch (err) {
            // Collect all validation errors
            const validationErrors = {};
            err.inner.forEach((error) => {
                validationErrors[error.path] = error.message;
            });
            setErrors(validationErrors); // Set the validation errors
        }
    };


    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel='Sign In'
            className='SignInModal'
            overlayClassName="blueOverlay"
        >
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
                        {/* Email Input */}
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
                    <button className="closeModaleBtn" onClick={closeModal}>
                        <img src={closeTag} alt="" />
                    </button>
                    <img src={sigininVector} alt="" className="right-image" />
                </div>
            </div>
        </Modal>
    );
};

export default SigninModal;