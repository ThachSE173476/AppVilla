import React from 'react'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import BlogIntro from '../components/BlogIntro/BlogIntro'
import Subgrid from '../components/SubGrid/SubGrid'

import blog1 from '../img/blog-1.jpg'
import blog2 from '../img/blog-2.jpg'
import blog3 from '../img/blog-3.jpg'
import comment1 from '../img/comment1.jpg'
import comment2 from '../img/comment2.jpg'
import comment3 from '../img/comment3.jpg'

import './grid-sidebar.scss'


const GridSidebar = () => {
    return (
        <>
            <Header/>
            <BlogIntro title="Blog Grid Sidebar"/>
            <section className="section">
                <section className='gridsidebar'>
                    <div className="gridsidebar-main">
                        <div className="blog-card gridsidebar-card">
                        <img src={blog1} alt="" />
                        <div className="blog-card__content">
                            <h1>Blog</h1>
                            <h3>Boost your conversion rate</h3>
                            <p>Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.</p>
                            <div className="blog-card__content-customer">
                                <img src={comment1} alt="" />
                                <div className="blog-card__content-customer--info">
                                    <h2>Roel Aufderhar</h2>
                                    <span>Mar 15,2023</span>
                                    <span>5 min read</span>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="blog-card gridsidebar-card">
                            <img src={blog2} alt="" />
                            <div className="blog-card__content">
                                <h>Video</h>
                                <h3>How to use search engine</h3>
                                <p>Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.</p>
                                <div className="blog-card__content-customer">
                                    <img src={comment2} alt="" />
                                    <div className="blog-card__content-customer--info">
                                        <h2>Jenifer Zuliya</h2>
                                        <span>Feb 10,2023</span>
                                        <span>7 min read</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-card gridsidebar-card">
                            <img src={blog3} alt="" />
                            <div className="blog-card__content">
                                <h1>Marketing</h1>
                                <h3>Awesome ways to boost sales</h3>
                                <p>Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.</p>
                                <div className="blog-card__content-customer">
                                    <img src={comment3} alt="" />
                                    <div className="blog-card__content-customer--info">
                                        <h2>Roel Aufderhar</h2>
                                        <span>Jan 20,2023</span>
                                        <span>6 min read</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-card gridsidebar-card">
                        <img src={blog1} alt="" />
                        <div className="blog-card__content">
                            <h1>Blog</h1>
                            <h3>Boost your conversion rate</h3>
                            <p>Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.</p>
                            <div className="blog-card__content-customer">
                                <img src={comment1} alt="" />
                                <div className="blog-card__content-customer--info">
                                    <h2>Roel Aufderhar</h2>
                                    <span>Mar 15,2023</span>
                                    <span>5 min read</span>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="blog-card gridsidebar-card">
                            <img src={blog2} alt="" />
                            <div className="blog-card__content">
                                <h>Video</h>
                                <h3>How to use search engine</h3>
                                <p>Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.</p>
                                <div className="blog-card__content-customer">
                                    <img src={comment2} alt="" />
                                    <div className="blog-card__content-customer--info">
                                        <h2>Jenifer Zuliya</h2>
                                        <span>Feb 10,2023</span>
                                        <span>7 min read</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-card gridsidebar-card">
                            <img src={blog3} alt="" />
                            <div className="blog-card__content">
                                <h1>Marketing</h1>
                                <h3>Awesome ways to boost sales</h3>
                                <p>Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.</p>
                                <div className="blog-card__content-customer">
                                    <img src={comment3} alt="" />
                                    <div className="blog-card__content-customer--info">
                                        <h2>Roel Aufderhar</h2>
                                        <span>Jan 20,2023</span>
                                        <span>6 min read</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Subgrid/>
                </section>

            </section>
            <Footer/>
        </>
    )
}

export default GridSidebar
