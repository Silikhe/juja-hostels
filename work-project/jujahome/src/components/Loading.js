import React from 'react'
import '../App.css'
// import loadingGif from '../images/gif/loading-arrow.gif'

export default function Loading() {
    return (
        <div className="loading">
            <h4>rooms data loading ...</h4>
            {/* <img src={loadingGif} alt="loading"/> */}
            <div class="lds-facebook">
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
        </div>
        </div>
    )
}
