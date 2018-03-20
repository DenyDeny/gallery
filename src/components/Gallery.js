import React, { Component } from 'react'

import mountains from '../images/mountains.jpg'
import lake from '../images/lake.jpg'
import moto from '../images/moto.jpg'

const PHOTO_SET = [
    {
        src: 'https://www.bluecross.org.uk/sites/default/files/assets/images/118809lpr.jpg',
    },
    {
        src:
            'https://i.amz.mshcdn.com/zy65wibIKGJwrQ3LlrTIKPGfDoE=/1200x630/2017%2F11%2F12%2F85%2F0cb95ccbac6441e7a30fb7d1d01b094d.bc1ee.png',
    },
    {
        src:
            'https://media.mnn.com/assets/images/2016/11/cat-with-big-eyes-gimo.jpg.653x0_q80_crop-smart.jpg',
    },
    {
        src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1qXkZgM_ooN6C3yRj03le973htRGSbiQ842m2dbUHbyK11mZ',
    },
]

const renderImages = () =>
    PHOTO_SET.map((item, index) => (
        <div className="image">
            <img src={item.src} alt="cat" />
        </div>
    ))

const Gallery = () => (
    <div className="container">
        <div className="main-image">
            <img className="responsive" src={mountains} alt="" />
        </div>
        <div className="previews">
            <div className="peviews-img">
                <img className="image" src={lake} alt="" />
            </div>
            <div className="peviews-img">
                <img className="image" src={mountains} alt="" />
            </div>
            <div className="peviews-img">
                <img className="image" src={moto} alt="" />
            </div>
            <div className="peviews-img">
                <img className="image" src={lake} alt="" />
            </div>
            <div className="peviews-img">
                <img className="image" src={mountains} alt="" />
            </div>
            <div className="peviews-img">
                <img className="image" src={moto} alt="" />
            </div>
        </div>
    </div>
)
export default Gallery
