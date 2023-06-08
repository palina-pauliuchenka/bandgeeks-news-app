import React, { useEffect, useRef } from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import $ from 'jquery'
import 'slick-carousel/slick/slick'

const Slider = () => {

  const carouselRef = useRef(null)

  useEffect(() => {
    $(carouselRef.current).slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true,
      centerPadding: '60px',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
          },
        },
      ],
    });
  }, [])

  return (
    <div ref={carouselRef}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  )
}

export default Slider
