import React from 'react'

const Preview = ({ photo, activeImage, setActiveImage }) => (
    <React.Fragment>
        <div className="peviews-img">
            <img
                onClick={() => setActiveImage(photo.index)}
                className={activeImage === photo.index ? 'active-preview image' : 'image'}
                src={photo.src}
                alt={photo.alt}
            />
        </div>
    </React.Fragment>
)

export default Preview
