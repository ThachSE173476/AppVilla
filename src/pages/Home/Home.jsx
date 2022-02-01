import React from 'react';

import Header from '../../components/Header/Header'
import Intro from '../../components/Intro/Intro'
import Features from '../../components/Features/Features';
import Overview from '../../components/Overview/Overview';
import Pricing from '../../components/Pricing/Pricing'
import Team from '../../components/Team/Team'
import Blog from '../../components/Blog/Blog'
import FAQ from '../../components/FAQ/FAQ'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'


function Home() {
    return (
        <div className='container'>
            <Header/>
            <Intro />
            <Features />
            <Overview />
            <Pricing />
            <Team />
            <Blog />
            <FAQ />
            <Contact />
            <Footer/>
        </div>
    )
}

export default Home