import React from 'react';

import './Home.css';
import Footer from '../FooterHome/Footer';
import NavbarHome from '../Navbar/NavbarHome';


const Home = () => {


    return (
        <>
            <NavbarHome />
            <div className='pagesContainer'>
                <div className='homeDiv'>
                    <span className='homeHeader'>
                        Welcome to Smart Traffic Lights
                    </span>
                    <p className='homeParaph'>
                        Experience the future of traffic management with our smart and adaptive traffic light system.
                    </p>

                    <button className='AccessBtn'>Learn More</button>

                </div>

            </div>

            <Footer />
        </>
    );
};

export default Home;
