import React from 'react'
import './section-header.scss'

const SectionHeader = props => {
    return (
        <div className="section-header">
            <h3>{props.name}</h3>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default SectionHeader
