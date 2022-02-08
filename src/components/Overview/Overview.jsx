import React from 'react'
import './overview.scss'
import img1 from './app-ss1.png'
import img2 from './app-ss2.png'

import { Fade, Slide } from 'react-reveal'


const Overview = () => {
    return (
        <section className='overview'>
            <div className="overview-item">
                <Fade left cascade>
                    <div className="overview-item__text">
                        <div className="overview-item__text--icon">
                            <i class="fas fa-download"></i>
                        </div>
                        <h1>1,250,000 Customers Using The Application!</h1>
                        <p>Collaborate over projects with your team and clients optimised for mobile and tablet don't let slow page speeds drive our innovative platform empowers anyone to convert clicks ou'll publish your first landing page in minutes.</p>
                        <div className="button">Get Started</div>
                    </div>
                </Fade>

                <Fade right>
                    <div className="overview-item__img">
                        <img src={img1} alt="" />
                    </div>  
                </Fade>
            </div>

            <div className="overview-item">
                <Fade left>
                    <div className="overview-item__img">
                        <img src={img2} alt="" />
                    </div>  
                </Fade>
                <Fade cascade right>
                    <div className="overview-item__text">
                        <div className="overview-item__text--icon">
                        <i class="fas fa-shapes"></i>
                        </div>
                        <h1>Seamless Loyalty</h1>
                        <p>Collaborate over projects with your team and clients optimised for mobile and tablet don't let slow page speeds drive our innovative platform empowers anyone to convert clicks ou'll publish your first landing page in minutes.</p>
                        <div className="button">Get Started</div>
                    </div>
                </Fade>
            </div>


            <Slide cascade bottom>
                <div className='overview-banner'>
                    <h1>Trusted by developers from over 80 planets</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                    <div className="overview-banner__numbers">
                        <div className="overview-banner__numbers--item">
                            <h3>100%</h3>
                            <span>Satisfaction</span>
                        </div>
                        <div className="overview-banner__numbers--item">
                            <h3>120K</h3>
                            <span>Happy Users</span>
                        </div>
                        <div className="overview-banner__numbers--item">
                            <h3>125K+</h3>
                            <span>Download</span>
                        </div>
                    </div>
                </div>
            </Slide>
        </section>
    )
}

export default Overview
