import React from 'react'

const Preview = ({ photo, activeImage }) => (
    <React.Fragment>
        <div className="peviews-img">
            <img
                className={activeImage === photo.index ? 'active-preview image' : 'image'}
                src={photo.src}
                alt=""
            />
        </div>
    </React.Fragment>
)

export default Preview
