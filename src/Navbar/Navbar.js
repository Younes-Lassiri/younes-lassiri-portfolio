import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import './Navbar.css';
import logo from './pic/20240705_232824.png'
import { NavLink } from 'react-router-dom';
export default function Navbar(props) {
    const [mobile, setMobile] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false);
  const [visited, setVisited] = useState('a')

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  function hideNav(a){
    setVisited(a)
    setMobile(false)
  }
  return (
    <div>
        <div className={`navbar-section ${isScrolling ? 'isScrolling' : ''}`}>
        <div className='logo'>
            <NavLink to='/'>
            <img src={props.detail === true & !isScrolling? 'https://i.ibb.co/5B8b7Jx/20240323-032456.png' : logo}/>
            </NavLink>
        </div>

        <div className='email'>
            <span style={props.detail === true & !isScrolling? {color: "white"}: {}}>youneslassirifreelance@gmail.com</span>
        </div>

        <div className='ul'>
            <ul className='navbar-ul'>
            <li>
            <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={props.detail === true & !isScrolling
                    ? { color: '#fff', cursor: 'pointer' } 
                    : { color: '#0f0715', cursor: 'pointer' }} className={visited === 'a'? '' : ''} onClick={() => setVisited('a')}>
                Services
            </Link>
            </li>

            <li>
            <Link
                activeClass="active"
                to="works"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={props.detail === true & !isScrolling
                    ? { color: '#fff', cursor: 'pointer' } 
                    : { color: '#0f0715', cursor: 'pointer' }}  className={visited === 'b'? 'active' : ''} onClick={() => setVisited('b')}>
                Works
            </Link>
            </li>

            <li>
            <Link
                activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={props.detail === true & !isScrolling
                    ? { color: '#fff', cursor: 'pointer' } 
                    : { color: '#0f0715', cursor: 'pointer' }}  className={visited === 'c'? 'active' : ''} onClick={() => setVisited('c')}>
                Resume
            </Link>
            </li>

            <li>
            <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={props.detail === true & !isScrolling
                    ? { color: '#fff', cursor: 'pointer' } 
                    : { color: '#0f0715', cursor: 'pointer' }} className={visited === 'd'? 'active' : ''} onClick={() => setVisited('d')}>
                Skills
            </Link>
            </li>

            <li>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={props.detail === true & !isScrolling
                    ? { color: '#fff', cursor: 'pointer' } 
                    : { color: '#0f0715', cursor: 'pointer' }} className={visited === 'f'? 'active' : ''} onClick={() => setVisited('f')}>
                Contact
            </Link>
            </li>
            </ul>
        </div>


        <div className='button'>
            


            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{color: '#fff', cursor: 'pointer'}} className={visited === 'f'? 'active' : ''} onClick={() => setVisited('f')}>
                <button type="">Hire Me!</button>
            </Link>
            
        </div>


        <div className="hamburger-toggle humb" onClick={() => setMobile(!mobile)}>
                <span className="line top" style={props.detail === true? {backgroundColor:'#8750f7'}: {}} ></span>
                <span className="line middle" style={props.detail === true? {backgroundColor:'#8750f7'}: {}} ></span>
                <span className="line bottom" style={props.detail === true? {backgroundColor:'#8750f7'}: {}} ></span>
            </div>
    </div>


    <div className={mobile? 'ul-mobilet' : 'ul-mobile'}>
    <div>
            <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
             style={{color: '#0f0715', cursor: 'pointer'}} className={visited === 'a'? 'active' : ''} onClick={() => hideNav('a')}>
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
             style={{color: '#0f0715', cursor: 'pointer'}}  className={visited === 'b'? 'active' : ''} onClick={() => hideNav('b')}>
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
             style={{color: '#0f0715', cursor: 'pointer'}}  className={visited === 'c'? 'active' : ''} onClick={() => hideNav('c')}>
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
             style={{color: '#0f0715', cursor: 'pointer'}} className={visited === 'd'? 'active' : ''} onClick={() => hideNav('d')}>
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
             style={{color: '#0f0715', cursor: 'pointer'}} className={visited === 'f'? 'active' : ''} onClick={() => hideNav('f')}>
                Contact
            </Link>
            </div>
            <div></div>
            <div></div>
            <div></div>
    </div>
    </div>
    
  )
}

