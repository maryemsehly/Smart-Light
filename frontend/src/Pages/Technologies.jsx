import React from 'react';
import NavbarHome from '../Components/Navbar/NavbarHome';

import './style.css'
import './Technologies.css'
import Footer from '../Components/FooterHome/Footer';

const Technologies = () => {
    return (
        <>
            <NavbarHome />

            <section className="technologies" id="technologies">
                <div className="TechnoContainer">
                    <h2 className="section-title">Technologies</h2>
                    <div className="technologies__list">

                        <div className="technologies__item">
                            <h3 className="technologies__title">MERN Stack + Firebase</h3>
                            <p className="technologies__description">
                                Our system uses the MERN stack (MongoDB, Express, React, Node.js) for seamless web development. Firebase is used for real-time data synchronization and cloud storage.
                            </p>
                            <ul className="technologies__tools">
                                <li>🔹 <strong>MongoDB</strong> — NoSQL database for handling large datasets</li>
                                <li>🔹 <strong>Express.js</strong> — Back-end web application framework</li>
                                <li>🔹 <strong>React</strong> — Front-end library for interactive UIs</li>
                                <li>🔹 <strong>Node.js</strong> — Back-end runtime for JavaScript</li>
                                <li>🔹 <strong>Firebase</strong> — Cloud database and authentication</li>
                            </ul>
                        </div>

                        <div className="technologies__item">
                            <h3 className="technologies__title">Machine Learning (Python)</h3>
                            <p className="technologies__description">
                                We use Python-based Machine Learning models to predict traffic flow and optimize light switching. Our models are trained using real-time traffic data.
                            </p>
                            <ul className="technologies__tools">
                                <li>🔹 <strong>Scikit-learn</strong> Machine learning algorithms</li>
                                <li>🔹 <strong>Pandas & NumPy</strong>Data manipulation and analysis</li>
                                <li>🔹 <strong>Matplotlib & Seaborn</strong>Data visualization for model insights</li>
                                <li>🔹 <strong>TensorFlow</strong>Neural network and deep learning support</li>
                            </ul>
                        </div>

                        <div className="technologies__item">
                            <h3 className="technologies__title">Data Streaming (ESPCam)</h3>
                            <p className="technologies__description">
                                Using ESPCam devices, we capture live traffic images for analysis. Data is streamed to the system for real-time adjustments of traffic light control.
                            </p>
                            <ul className="technologies__tools">
                                <li>🔹 <strong>ESPCam</strong> — Low-cost camera module for real-time video streaming</li>
                                <li>🔹 <strong>RTSP Protocol</strong> — Real-Time Streaming Protocol for video data</li>
                                <li>🔹 <strong>Python OpenCV</strong> — Image processing for traffic detection</li>
                                <li>🔹 <strong>MQTT</strong> — Messaging protocol for lightweight communication</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Technologies