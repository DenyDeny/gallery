import React from 'react'

import 'normalize.css'

import '../index.sass'

import Gallery from './Gallery'

const App = () => (
    <div className="main-container">
        <Gallery images={10} />
    </div>
)

export default App
