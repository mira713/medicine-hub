import React from 'react'

export const FeaturedLabs = ({ img, rating, name, para }) => {
    return (
        <>
            <div>
                <div>
                    <div><img src={img} alt="img" /></div>
                    <div id='rating'>
                        <div>{rating}</div>
                        <div>{name}</div>
                    </div>
                </div>
                <div className='FeaturedPara'>{para}</div>
            </div>
        </>
    )
}