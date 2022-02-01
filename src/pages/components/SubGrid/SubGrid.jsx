import React from 'react';
import './subgrid.scss'

import feedback1 from '../../img/feedback1.jpg'
import feedback2 from '../../img/feedback2.jpg'
import feedback3 from '../../img/feedback3.jpg'


const Subgrid = () => {
    return (
        <div className="sub-grid">
            <section className="sub-grid__search">
                <h1 className="sub-grid--title">Search This Site</h1>

                <div className="sub-grid__search--input">
                    <input type="text" placeholder='Search Here...'/>
                    <button>
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </section>
            <section className="sub-grid__feedback">
                <h1 className="sub-grid--title">Popular Feeds</h1>

                <div className="sub-grid__feedback--item">
                    <img src={feedback1} alt="" />
                    <div className="sub-grid__feedback--desc">
                        <h4>Creative</h4>
                        <p>Bringing Great Design Ideas To Completion</p>
                        <span>
                            <i class="far fa-calendar-alt"></i>
                            05th Nov 2023
                        </span>
                    </div>
                </div>

                <div className="sub-grid__feedback--item">
                    <img src={feedback2} alt="" />
                    <div className="sub-grid__feedback--desc">
                        <h4>Jobs</h4>
                        <p>Live Life Smart And Focus On The Positive</p>
                        <span>
                            <i class="far fa-calendar-alt"></i>
                            24th March 2023
                        </span>
                    </div>
                </div>

                <div className="sub-grid__feedback--item">
                    <img src={feedback3} alt="" />
                    <div className="sub-grid__feedback--desc">
                        <h4>Marketing</h4>
                        <p>We’re currently acceping new projects.</p>
                        <span>
                            <i class="far fa-calendar-alt"></i>
                            30th Jan 2023
                        </span>
                    </div>
                </div>

            </section>
            <section className="sub-grid__categories">
                <h1 className="sub-grid--title">Categories</h1>

                <div className="sub-grid__categories--item">
                    <h3>Web Design</h3>
                </div>
                <div className="sub-grid__categories--item">
                    <h3>Branding</h3>
                </div>
                <div className="sub-grid__categories--item">
                    <h3>Graphic Design</h3>
                </div>
                <div className="sub-grid__categories--item">
                    <h3>Marketing</h3>
                </div>
                <div className="sub-grid__categories--item">
                    <h3>Wireframing</h3>
                </div>

            </section>
            <section className="sub-grid__tags">
                <h1 className="sub-grid--title">Popular Tags</h1>

                <span>Popular</span>
                <span>Design</span>
                <span>UX</span>
                <span>Usability</span>
                <span>Interviews</span>
                <span>Jobs</span>
                <span>Develop</span>
                <span>Business</span>
                <span>Tech</span>
                <span>Consult</span>
                <span>Employee</span>
            </section>
            <section className="sub-grid__contact">
                <h1 className="sub-grid--title">Need Help?</h1>
                <h3>Online Help!</h3>
                <h5>+(123) 456-78-90</h5>
            </section>
        </div>
    );
};



export default Subgrid;
