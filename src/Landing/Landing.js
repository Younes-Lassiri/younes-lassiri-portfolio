import React, { useState } from 'react'
import './Landing.css'
import 'boxicons'
import Navbar from '../Navbar/Navbar'
import my_cv from './images/younes_lassiri_cv.pdf'
import Recent from '../Recent/Recent'
import Resume from '../Resume/Resume'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import portfolioimg from './images/portfolioimg.png';
export default function Landing() {
      const[hov,sethov] = useState(false)
  return (
<div className='landing-section'>
        <Navbar/>
        <div className='landing-infos'>
        <text className="hi">HI</text>
        <div className='infosOne'>
            <h1>Full Stack Developer
            <img src='https://www.stefantopalovic.com/static/media/waving.1bae5fcfb51082b5c2b4.png' alt='portfolio'/></h1>
            <p>
                Hi, I'm Younes. A passionate Full Stack Developer based in Laayoune, Morocco. 📍
            </p>

            <div className='buttons'>
                <div>
                <a href={my_cv} download="Younes-Laasiri-Cv.pdf" style={{textDecoration: 'none'}}>
                <button type="" onMouseEnter={() => sethov(true)} onMouseLeave={() => sethov(false)}>Download Cv <box-icon name='download' color={hov? 'whitesmoke' : '#555'} ></box-icon></button>
                </a>
                </div>

                <div className='social-icons'>
                    <a href='https://github.com/Younes-Lassiri?tab=repositories' target='_blank'>
                    <box-icon name='github' type='logo' color='#2d2e32' size='30px'></box-icon>
                    </a>
                <a href='https://www.linkedin.com/in/younes-lassiri-09a9212b4/' target='_blank'>
                <box-icon name='linkedin-square' type='logo' color='#2d2e32' size='30px'></box-icon></a>
                </div>
            </div>
        </div>
        <div className='infosTwo'>
            <img src={portfolioimg} alt='portfolio'/>
        </div>
    </div>
    <Resume/>
          <Recent/>
          <Skills/>
          <Contact/>
          <Footer detail={true}/>
    </div>
  )
}
