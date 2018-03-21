import React from 'react'

const Preview = ({ photo }) => (
    <React.Fragment>
        <div className="peviews-img">
            <img className="image" src={photo.src} alt="" />
        </div>
    </React.Fragment>
)

export default Preview
