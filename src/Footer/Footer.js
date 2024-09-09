import React from 'react'
import './Footer.css'
import { useState } from 'react';
import footerLogo from './pic/20240705_232824.png'
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Footer(props) {
    
  const [visited, setVisited] = useState('')
  return (
    <div className='footer-section'>
        <div className='footer-logo'>
            <img src={props.detail === true? 'https://i.ibb.co/5B8b7Jx/20240323-032456.png' : footerLogo}/>
        </div>

        <div className='footer-navbar'>
            <div>
            <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
             style={{color: '#fff', cursor: 'pointer'}} className={visited === 'a'? 'active' : ''} onClick={() => setVisited('a')}>
                Services
            </Link>
            </div>


            <div>
            <Link
                activeClass="active"
                to="works"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
             style={{color: '#fff', cursor: 'pointer'}}  className={visited === 'b'? 'active' : ''} onClick={() => setVisited('b')}>
                Works
            </Link>
            </div>

            <div>
            <Link
                activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
             style={{color: '#fff', cursor: 'pointer'}}  className={visited === 'c'? 'active' : ''} onClick={() => setVisited('c')}>
                Resume
            </Link>
            </div>

            <div>
            <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
             style={{color: '#fff', cursor: 'pointer'}} className={visited === 'd'? 'active' : ''} onClick={() => setVisited('d')}>
                Skills
            </Link>
            </div>

            <div>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
             style={{color: '#fff', cursor: 'pointer'}} className={visited === 'f'? 'active' : ''} onClick={() => setVisited('f')}>
                Contact
            </Link>
            </div>
        </div>

        <div className='footer-right' style={props.detail === true? {color: '#fff'} : {}}>
        © 2024 All rights reserved by Younes Lassiri
        </div>
    </div>
  )
}
