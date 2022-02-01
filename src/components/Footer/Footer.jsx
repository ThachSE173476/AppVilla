import React from 'react'

import './footer.scss'
import logo from './white-logo.svg'

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-row">
                <div className="footer-about">
                    <img src={logo} alt="" />
                    <p>Making the world a better place through constructing elegant hierarchies.</p>
                    <div className="footer-about--icons">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-linkedin"></i>
                        <i class="fab fa-youtube"></i>
                        <i class="fab fa-pinterest"></i>
                    </div>
                    <h3>Designed and Developed by UIdeck</h3>
                </div>
                <div className="footer-link">
                    <h1>Solutions</h1>
                    <span>Marketing</span>
                    <span>Analytics</span>
                    <span>Commerce</span>
                    <span>Insights</span>
                    <span>Promotion</span>
                </div>
                <div className="footer-link">
                    <h1>Support</h1>
                    <span>Pricing</span>
                    <span>Documentation</span>
                    <span>Guides</span>
                    <span>API Status</span>
                    <span>Live Support</span>
                </div>
                <div className="footer-link">
                    <h1>Company</h1>
                    <span>About Us</span>
                    <span>Our Blog</span>
                    <span>Jobs</span>
                    <span>Press</span>
                    <span>Contact Us</span>
                </div>
                <div className="footer-link">
                    <h1>Legal</h1>
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                    <span>Catering Services</span>
                    <span>Customer Relations</span>
                    <span>Innovation</span>
                </div>
            </div>

            <div className="footer-content">
                <div className="footer-content--text">
                    <h3>Subscribe To Our Newsletter</h3>
                    <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
                </div>
                <div className="footer-content--input">
                    <input type="text" placeholder='Your email address' />
                    <button className="button">Subcribe</button>
                </div>
            </div>
        </section>
    )
}

export default Footer
