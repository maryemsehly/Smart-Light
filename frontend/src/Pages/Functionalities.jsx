import React from 'react';
import NavbarHome from '../Components/Navbar/NavbarHome';

import './Functionalities.css'
import Footer from '../Components/FooterHome/Footer';

const Functionalities = () => {
    return (
        <>
            <NavbarHome />
            <div className="pagesContainer">
                <h2 className="section-title">Functionalities</h2>
                <div className="functionalities__list">
                    <div className="functionalities__item">
                        <h3>Adaptive Traffic Control</h3>
                        <p>Automatically adjusts traffic lights based on real-time traffic flow.</p>
                    </div>
                    <div className="functionalities__item">
                        <h3>Data-Driven Insights</h3>
                        <p>Collects and analyzes traffic data to improve city planning.</p>
                    </div>
                    <div className="functionalities__item">
                        <h3>Energy Efficiency</h3>
                        <p>Reduces energy consumption with efficient LED lighting.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Functionalities;