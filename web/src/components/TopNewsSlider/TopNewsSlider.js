import React, { useEffect, useRef } from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import $ from 'jquery'
import 'slick-carousel'

const TopNewsSlider = ({ children }) => {
  const sliderRef = useRef(null)

  useEffect(() => {
    $(sliderRef.current).slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 5000,
    })
  }, [])

  return (
    <div>
      <div ref={sliderRef}>{children}</div>
    </div>
  )
}

export default TopNewsSlider
