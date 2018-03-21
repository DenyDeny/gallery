import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

import Preview from './Preview'

import PHOTO_SET from './photos'

class Gallery extends Component {
    constructor() {
        super()
        this.state = {
            activeImage: 0,
            images: [...PHOTO_SET],
        }
    }

    getActiveImage() {
        const { images } = this.state
        let activeImage = null
        activeImage = (
            <img
                className="responsive"
                key={this.state.activeImage}
                src={images[this.state.activeImage].src}
                alt={images[this.state.activeImage].alt}
            />
        )

        return activeImage
    }
    /* eslint-disable no-plusplus */
    handleSlide(direction) {
        const { images, activeImage } = this.state
        let currentIndex = activeImage
        if (direction === 'prev') {
            --currentIndex
            if (currentIndex < 0) {
                currentIndex = images.length - 1
            }
        } else if (direction === 'next') {
            ++currentIndex
            if (currentIndex > images.length - 1) {
                currentIndex = 0
            }
        }

        this.setState({
            activeImage: currentIndex,
        })
    }

    renderImages = images => images.map((image, index) => <Preview photo={image} key={index} />)

    render() {
        const { images } = this.state
        if (images.length === 0) {
            return null
        }
        const currentImage = this.getActiveImage()

        return (
            <div className="container">
                <div className="main-image-wrapper">
                    <button onClick={() => this.handleSlide('prev')} className="prev-btn">
                        <i className="fas fa-chevron-left" />
                    </button>
                    <div className="main-image">
                        <CSSTransitionGroup
                            transitionName="main-image"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={300}
                        >
                            {currentImage}
                        </CSSTransitionGroup>
                    </div>
                    <button onClick={() => this.handleSlide('next')} className="next-btn">
                        <i className="fas fa-chevron-right" />
                    </button>
                </div>
                <div className="previews">{this.renderImages(images)}</div>
            </div>
        )
    }
}
export default Gallery
