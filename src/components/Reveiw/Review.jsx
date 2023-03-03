import React from 'react'
import './Review.scss'
import Slider from 'infinite-react-carousel/lib/carousel/slider'

const Review = () => {
  return (
    <div className="review">
        <div className="container">
            <Slider>
                <div>1</div>
                <div>2</div>
            </Slider>
        </div>
    </div>
  )
}

export default Review