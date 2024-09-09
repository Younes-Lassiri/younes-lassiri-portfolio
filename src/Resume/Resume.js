import React from 'react'
import './Resume.css'
import 'boxicons'
import exp from './pic/aaaex-removebg-preview (1).png'
import ep from './pic/aaaape-removebg-preview.png'
export default function Resume() {
  return (
    <div className='resume-section' id='resume'>


        <div className='experience'>
        <div className='experienceLogo'>
            <img src={exp}/>
        </div>
            <div className='experience-title'>My Experience</div>


            <div className="exp-one">

                <h6 className='exp-one-date'>2024 - Present</h6>

                <h5 className='exp-one-title'>FULL STACK WEB DEVELOPER</h5>
                <h4 className='exp-one-des'>Laayoune, OFPPT</h4>
            </div>



            <div className="exp-one">

                <h6 className='exp-one-date'>2022 - 2023</h6>

                <h5 className='exp-one-title'>Wordpress</h5>
                <h4 className='exp-one-des'>Laayoune, OFPPT</h4>
            </div>


            <div className="exp-one">

                <h6 className='exp-one-date'>2023 - 2024</h6>

                <h5 className='exp-one-title'>Figma Design</h5>
                <h4 className='exp-one-des'>Laayoune, OFPPT</h4>
            </div>
        </div>



        <div className='education'>
            <div className='educationLogo'>
            <img src={ep}/>
            </div>
            <div className='education-title'>My Education</div>

            <div className="exp-one">

                <h6 className='exp-one-date'>2024 - Present</h6>

                <h5 className='exp-one-title'>FULL STACK WEB DEVELOPER</h5>
                <h4 className='exp-one-des'>Laayoune, OFPPT</h4>
            </div>


            <div className="exp-one">

                <h6 className='exp-one-date'>2024 - Present</h6>

                <h5 className='exp-one-title'>FULL STACK WEB DEVELOPER</h5>
                <h4 className='exp-one-des'>Laayoune, OFPPT</h4>
            </div>

            <div className="exp-one">

                <h6 className='exp-one-date'>2024 - Present</h6>

                <h5 className='exp-one-title'>FULL STACK WEB DEVELOPER</h5>
                <h4 className='exp-one-des'>Laayoune, OFPPT</h4>
            </div>
        </div>

    </div>
  )
}
