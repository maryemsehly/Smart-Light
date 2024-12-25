import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


import './NavbarHome.css';
import logo from '../../Assets/Vector.png';


const NavbarHome = () => {
    const navigate = useNavigate();


    const handleContact = () => {
        navigate('/contact');
    };

    const openModal = () => {
        navigate('/login')
    }


    return (
        <>
            <nav className='HomeNavbar'>
                <div className='navbarHomeLeft'>
                    <img alt='Logo Resourcery' src={logo} className='logo' />
                    <p className='siteName'>My Light</p>
                </div>
                <div className='navbarHomeMid'>
                    <ul className='NavbarHomeItems'>
                        <li>
                            <NavLink to='/' className='NavbarHomeItm'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Functionalities' className='NavbarHomeItm'>Functionalities</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Technologies' className='NavbarHomeItm'>Technologies</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Equipe' className='NavbarHomeItm'>Equipe</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='navbarHomeRight'>
                    <button className='loginBtn' onClick={openModal}>Sign In</button>
                    <button className='AccessBtn' onClick={handleContact}>Contact Us</button>
                </div>
            </nav>


        </>
    );
};

export default NavbarHome;