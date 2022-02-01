import React from 'react'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import BlogIntro from '../components/BlogIntro/BlogIntro'
import SingleGrid from '../components/SingleGrid/SingleGrid'

import './single.scss'

const Single = () => {
    return (
        <div>
            <Header/>
            <BlogIntro title='Blog Single'/>
            <div className="section">
                <div className="single-container">
                    <SingleGrid/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Single
