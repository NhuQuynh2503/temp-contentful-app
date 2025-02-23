import React from 'react'
import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section>
        <div className="hero">
            <div className="hero-container">
                <div className="hero-title">
      <h1>Contentful SMC</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis recusandae veritatis at! Optio exercitationem error, unde libero, quos consequatur aspernatur et omnis magni a dignissimos ut repellat eligendi natus voluptates!</p>
                </div>
                <div className="img-container">
                  <img src={heroImg} alt="woman and the browser" className='img' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero