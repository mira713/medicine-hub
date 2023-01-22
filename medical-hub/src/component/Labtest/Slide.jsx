import React from 'react'

export const Slide = ({ mydata }) => {
    return (
        <div className="slide-container" data-testid="slide">
            <p data-testid="description">{mydata.description}</p>
            <h3 data-testid="title">{mydata.title}</h3>
        </div>
    )
}