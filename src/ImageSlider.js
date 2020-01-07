// your ImageSlider code here!
import React from 'react'
class ImageSlider extends React.Component {
    render(){
        this.state = {
            currentSlideIndex: 0,
        }
        debugger
        return(
        <li>I am on slide {this.state.currentSlideIndex}</li>
        )
    }
}

export default ImageSlider