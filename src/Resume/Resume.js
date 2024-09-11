import React from 'react'
import './Resume.css'
import 'boxicons'
export default function Resume() {
  return (
    <div className='about-section'>
      <div className='about-section-one'>
        <div className='about-section-one-one'>
          <img src='https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp' alt='about'/>
        </div>
      </div>
      <div className='about-section-two'>
        <h2>About me</h2>
        <h1>Full stack Developer based in Laayoune, Morocco 📍</h1>
        <p>Hey, my name is Younes, and I'm a Full stack Developer. My passion is to create and develop a clean UI/UX for my users.My main stack currently is React/Next.js/Node js in combination with Tailwind CSS and TypeScript.</p>
      </div>
    </div>
  )
}
