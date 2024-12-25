import React from 'react';
import NavbarHome from '../Components/Navbar/NavbarHome';
import Footer from '../Components/FooterHome/Footer';

import maryemPic from '../Assets/maryem.jpg'
import oudayPic from '../Assets/ouday.jpg'
import emanPic from '../Assets/emna.jpg'
import './Equipe.css'

const Equipe = () => {
    return (
        <>
            <NavbarHome />


            <section className="equipe" id="equipe">
                <div className="equipeContainer">
                    <h2 className="section-title">Our Team</h2>
                    <div className="equipe__members">


                        <div className="equipe__member">
                            <img src={oudayPic} alt="Ouday Nasser" className="equipe__photo" />
                            <h3 className="equipe__name">Ouday Nasser</h3>
                            <p className="equipe__role">Data Analyst</p>
                            <p className="equipe__description">Responsible for traffic data analysis and system optimization.</p>
                        </div>

                        <div className="equipe__member">
                            <img src={maryemPic} alt="Maryem Sehly" className="equipe__photo" />
                            <h3 className="equipe__name">Maryem Sehly</h3>
                            <p className="equipe__role">Lead Developer</p>
                            <p className="equipe__description">Expert in back-end development and cloud infrastructure.</p>
                        </div>

                        <div className="equipe__member">
                            <img src={emanPic} alt="Sarah Williams" className="equipe__photo" />
                            <h3 className="equipe__name">Imen Yedes</h3>
                            <p className="equipe__role">Front-End Developer</p>
                            <p className="equipe__description">Ensures smooth and efficient user interactions with the app.</p>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    )
}

export default Equipe