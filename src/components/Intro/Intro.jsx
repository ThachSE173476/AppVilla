import React from 'react'
import './Intro.scss'
import img from './intro-phone.png'
import { Slide, Bounce } from 'react-reveal';

const Intro = () => {
    return (
        <section className="intro">
            <div className="intro-wrapper">
                <Bounce cascade left>
                <div className="intro-text">
                        <h1>A Powerful App For Your Business.</h1>
                        <p>From open source to pro services, Piqes helps you to build, deploy, test, and monitor apps.</p>
                        <div className="intro-text-buttons">
                            <button className='button'>
                                <i className="fab fa-apple"></i>
                                App Store
                            </button>

                            <button className='button'>
                                <i className="fab fa-google-play"></i>
                                Google Play
                            </button>
                        </div>
                </div>
                </Bounce>

                <Bounce right>
                    <div className="intro-img">
                        <img src={img} alt="" />
                    </div>
                </Bounce>
            </div>
        </section>
    )
}

export default Intro
