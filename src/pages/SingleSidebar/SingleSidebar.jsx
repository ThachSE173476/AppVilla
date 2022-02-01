import React from 'react'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SingleGrid from '../components/SingleGrid/SingleGrid'
import Subgrid from '../components/SubGrid/SubGrid'

import './single-sidebar.scss'

const SingleSidebar = () => {
    return (
        <div>
            <Header />
            <div className="section">
                <div className="single-sidebar">
                    <SingleGrid/>
                    <Subgrid/>
                </div>
                
            </div>
            <Footer />
        </div>
    )
}

export default SingleSidebar
