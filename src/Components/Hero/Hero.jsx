import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div>
      <div className="hero container">
        <div className="hero-text">
            <h1>Leading academic institution offering diverse programs.</h1>
            <p>Premier university with diverse programs, innovative research, and a dynamic campus environment.</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
      </div>
    </div>
  )
}

export default Hero
