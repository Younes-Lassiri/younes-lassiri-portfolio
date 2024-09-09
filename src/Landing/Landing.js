import React, { useState } from 'react'
import './Landing.css'
import 'boxicons'
import Navbar from '../Navbar/Navbar'
import my_cv from './images/younes_lassiri_cv.pdf'
import Services from '../Services/Services'
import Recent from '../Recent/Recent'
import Resume from '../Resume/Resume'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
export default function Landing() {
      const[hov,sethov] = useState(false)
  return (
<div className='landing-section'>
        <Navbar/>
        <div className='landing-infos'>
        <text className="hi">HI</text>
        <div className='infosOne'>
            <h1><span>I am Younes</span><br></br>Full Stack Developer +<br></br>UX Designer</h1>
            <p>As a full-stack developer, I deconstruct intricate technological challenges to engineer holistic solutions that seamlessly integrate across diverse platforms, enriching the digital experience for millions worldwide.</p>

            <div className='buttons'>
                <div>
                <a href={my_cv} download="Younes-Laasiri-Cv.pdf" style={{textDecoration: 'none'}}>
                <button type="" onMouseEnter={() => sethov(true)}>Download Cv <box-icon name='download' color={hov? '#fff' : '#8750f7'} ></box-icon></button>
                </a>
                </div>

                <div className='social-icons'>

                    <a href='https://github.com/Younes-Lassiri?tab=repositories' target='_blank'>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAyBJREFUSEu1lV2oTFEUx/9rD805B8l38ojyHZIHpYgS6p4z5CtFyTepm9x7zkimmzvnonQR19cboXTNGXI98eABJSKfRfLgwUd4cJtzBrMXe8xcM8fc63i452nWmv9ev7322mttQi9/1Mvx0SPg5Ebu+/mjbxFooWRMJmAsAALxGzA9IuKOQcP09k2n6Ht3G+0W4JrBfBC3ARjzjyxfS2Djbk+/UUtXE+CauUYQucXdRvskiG0nYxwMy/8KkLZyDQTaHy1utYrB9UnPaK30VgGa6/y5QkClqvwdUhbWCRHbAmAPAAHgFQB13uMBSAbSLORxIWNHAV6qfMQ8284at8uQLsCRhRzvjAdPCRit/mRGUzKr71W/3bpgjED8feMV+qrs1DLub8j8yIZ27aWyW0w/yYTmUtBno/tqU5ZfooKyuwCumVsBoot/yNRqe1p9lKNyzeAAiHeVtcy0OJnVOkIA/xwIq7tExLOSGeNOFEBzXX6KEPJhecPMfCyZNbZXAyz/KYAJ5TQdT58YJXhZ02IF9xk8vWTfczx9ZhjwAcCw307ybE9L/A/AtfzzAFaV1nxyPH1oGPAOwIiS4Kbj6fP+E3ANwKLSmk7H0weEAMEDgKeVBF8HD9eG9DQCKuHFkfIh+AhgYNHPeOFkdXWVK25Rwj8NxvquhYwNTlY/EyWLdMLfQIxTFdqzjqevCV/TBIguA/QF4E4AIwG28wW9LXWVcrVAqh/i3/xtIEqXGvG3jHi5kzEuVQEYTC1WoG7SKCF4gZS0GcBaAN8I1GHk4yt3XKe8WlQ8kvdBBoQFAPqE4M/zU7VJqRTJKoAy0oncEmJqB/BWysIMIWKq8eYw0Jb09K2VgdKmf4EIK8OZMWQi6fXzyv6/hp1r5g6DaAcBe2xP39ddDVzLT/0qZ3GU/AlGh2xP21ntqxHBtXw13JpAuMWSH5MQT5yMdqJS6lp+U2kIls+9IdK4LgdJm/5sQdRa7E6i/U5Gs0MAVVgHjLsixvWNl427tbLt8UEpFt5UT2bslZ2NP66qwdL8OPpRGO9kjUxPVznqixWlHWpqeh3wE3KIJyikaXPoAAAAAElFTkSuQmCC"/>
                    </a>
               

                <a href='https://www.linkedin.com/in/younes-lassiri-09a9212b4/' target='_blank'>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAaFJREFUSEvtlTtLA0EUhc/d+NjZRrHQStAIphAFsfIBFvYxEazEWhAsBMFMECyERAVFBBtrSamjP0AsRFCsRYL4qqwEBbMrkr2yyW7MQwvZaKMXBubBnO/eMzO7hB8O+mF9VACSY1YQNttSidtqwEsAiUhmk0AzeWFak0qf8wspAJbCz6EarfayWDCroW1hV9z5gRQAK2ErZGtcAgDQ7teqEouSkcwWQNM5g8AbMWXM+sk+r1MWiajVSVnY8kC/8iteAVgezQwwUZ2zwMxmfN84dfrJ8EsvNK3B6WvgzLwyztbHn5qs1/ohCnA3AQHOUuqzpMosMh8AtLiZX0slOnKAUfMYhEF3Pk3Ei8yUKnPAZrCMK2O1uPJvAxh4JEAg3yqDMCL3xKG38G2At9EBaaB7BvfknHODgVRciQm/gB2pxKQjkoiaw8Q4KirlQirR5QvARKH4np72RJIR8x5Aqzt+kko0+gI0Net1U9v09gGwzgHu88ZSiYL1X54BATcxJYKf3CLElK4RiIsqOAHQ/w/wHtpftqgaX89yjd//6Ve7indJi+8ZPHZMUAAAAABJRU5ErkJggg=="/></a>



                </div>
            </div>
        </div>

        <div className='infosTwo'>
            <img src="https://tim-tek.com/wp-content/uploads/2020/08/developer-working-Converti-1170x700.png"/>
        </div>


    </div>


    <div className='numbers'>
        
    <div className='part'>
        <div className='num'>2</div>
        <div className='text'>Years of<br></br>Experience</div>
    </div>

    <div className='part'>
        <div className='num'>10+</div>
        <div className='text'>Project<br></br>Completed</div>
    </div>

    <div className='part'>
        <div className='num'>15</div>
        <div className='text'>Happy<br></br>Clients</div>
    </div>

    <div className='part'>
        <div className='num'>2</div>
        <div className='text'>Years of<br></br>Experience</div>
    </div>

    </div>
    <Services/>
          <Recent/>
          <Resume/>
          <Skills/>
          <Contact/>
          <Footer detail={true}/>
    </div>
  )
}
