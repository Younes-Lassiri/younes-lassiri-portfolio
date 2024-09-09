import React from 'react'
import './Skills.css'
import phpLogo from './pics/php-logo-removebg-preview.png'

export default function Skills() {
  return (
    <div className='skills-section' id='skills'>
        <div className='skills-title'>My Skills</div>
        <div className='skills-p'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</div>


        <div className='skills-logos'>

            <div className='name'>
            <div className='logoOne item'><img src='https://themejunction.net/html/gerold/demo/assets/img/icons/figma.svg'/><span>60%</span></div>
            <div className='hh'>Figma</div>
            </div>

            <div className='name'>
            <div className='logoTwo item'><img src='https://themejunction.net/html/gerold/demo/assets/img/icons/wp.svg'/><span>85%</span></div><div className='hh'>Wordpress</div>
            </div>


            <div className='name'>
            <div className='logoThree item'><img src='https://themejunction.net/html/gerold/demo/assets/img/icons/react.svg'/><span>90%</span></div><div className='hh'>React</div>
            </div>

            <div className='name'>
            <div className='logoFour item'><img src='https://themejunction.net/html/gerold/demo/assets/img/icons/js.svg'/><span>75%</span></div><div className='hh'>JavaScript</div>
            </div>

            <div className='name'>
            <div className='logoFive item'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png'/><span>80%</span></div><div className='hh'>Laravel</div>
            </div>

            <div className='name'>
            <div className='logoSix item'><img src={phpLogo}/><span>80%</span></div><div className='hh'>Php</div>
            </div>

        </div>

    </div>
  )
}
