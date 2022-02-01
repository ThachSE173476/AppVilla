import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import './blog.scss'

import blog1 from './blog-1.jpg'
import blog2 from './blog-2.jpg'
import blog3 from './blog-3.jpg'

import comment1 from './comment1.jpg'
import comment2 from './comment2.jpg'
import comment3 from './comment3.jpg'


const Blog = () => {
    return (
        <section className="blog">
            <SectionHeader
                name='BLOGS'
                title='Our Latest News'
                text='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
            />

            <div className="blog-container">
                <div className="blog-card">
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
                <div className="blog-card">
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
                <div className="blog-card">
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
        </section>
    )
}

export default Blog
