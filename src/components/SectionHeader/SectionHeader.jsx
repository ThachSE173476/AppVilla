import React from 'react'
import './section-header.scss'

import { Fade } from 'react-reveal'

const SectionHeader = props => {
    return (
        <Fade cascade> 
            <div className="section-header">
                <h3>{props.name}</h3>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
        </Fade>
    )
}

export default SectionHeader
