import React, { useState, useEffect } from 'react'
import './Services.css'
function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/.test(navigator.userAgent);
}

export default function Services() {
  const [isMobile, setIsMobile] = useState(0);
    const [hovered, setHovered] = useState('one')
    useEffect(() => {
      setIsMobile(isMobileDevice() ? 1 : 0);
    }, []);
  return (
    <div className='services-section' id='services'>
        <div className='services-title'><h1>My Quality Services</h1></div>
        <div className='services-p'>
          {isMobile === 0 ? (
            <p>We put your ideas and thus your wishes in the form of a unique web project that<br></br> inspires you and you customers.</p>
          ) : <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p> }
        </div>




        <div className={hovered === 'one'? 'services-divs one': 'services-divs'} onMouseEnter={() =>setHovered('one')}>
            <div className='sNum'>01</div>
            <div className='sT'>Branding Design</div>

            <div className='sP'>I break down complex user experinece problems to create integritiy focussed
                                        solutions
                                        that connect billions of people</div>

             <div className='sR'>↑</div>
        </div>

        <div className={hovered === 'two'? 'services-divs two': 'services-divs'} onMouseEnter={() =>setHovered('two')}>
            <div className='sNum'>02</div>
            <div className='sT'>Web Design</div>

            <div className='sP'>I break down complex user experinece problems to create integritiy focussed
                                        solutions
                                        that connect billions of people</div>

             <div className='sR'>↑</div>
        </div>


        <div className={hovered === 'three'? 'services-divs three': 'services-divs'} onMouseEnter={() =>setHovered('three')}>
            <div className='sNum'>03</div>
            <div className='sT'>Wordpress Design</div>

            <div className='sP'>I break down complex user experinece problems to create integritiy focussed
                                        solutions
                                        that connect billions of people</div>

             <div className='sR'>↑</div>
        </div>


        <div className={hovered === 'four'? 'services-divs four': 'services-divs'} onMouseEnter={() =>setHovered('four')}>
            <div className='sNum'>04</div>
            <div className='sT'>Figma Design</div>

            <div className='sP'>I break down complex user experinece problems to create integritiy focussed
                                        solutions
                                        that connect billions of people</div>

             <div className='sR'>↑</div>
        </div>
    </div>
  )
}
