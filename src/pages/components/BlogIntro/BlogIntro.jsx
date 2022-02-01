import React from 'react';
import {Link} from 'react-router-dom'

import './blog-intro.scss'

const BlogIntro = props => {
    return (
        <div className="blog-intro">
            <h1>{props.title}</h1>

            <div className="blog-intro__path">
                <span><Link to="/">Home</Link></span>
                <span>{'>'}</span>
                <span>{props.title}</span>
            </div>
        </div>
    )
}

export default BlogIntro