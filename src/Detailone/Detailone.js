import React,{useState, useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Detailone.css'
import projects from '../projects/projects';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function Detailone() {
  const { id, name } = useParams()
  const project = projects.find(it => it.id === parseInt(id));
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  const list = project.pics
  return (
    <div>
        <div className="detailsRoute">
        <div>
        <Navbar detail={true}/>
        </div>
        <div className='detailsRouteH'>
        <h1>{project? project.name: null}</h1>
        </div>
        </div>
        <div className='royalChicDetail'>
          <img src={project.mainPic}/>
        </div>
        <div className='royalChicDetailOne'>
          <div className='royalChicDetailOneOne'>
            <div className='royalChicDetailOneOneOne'>{project? project.name: null}</div>
            <div className='royalChicDetailOneOneTwo'>
              {project.desc}
            </div>
            <div className='royalChicDetailOneOneThree'>
              <a href={project.preview} target='_blank'>
              <button type="">live preview <span>↑</span></button>
              </a>
            </div>
          </div>
          <div className='royalChicDetailOneTwo'>
            <div className='royalChicDetailOneTwoOne detailProject'>
              <div className='projectWho'>Category</div>
              <div className='projectWhy'>{project.category.join(',')}</div>
            </div>
            <div className='royalChicDetailOneTwoTwo detailProject'>
            <div className='projectWho'>Client</div>
            <div className='projectWhy'>{project.client}</div>
            </div>
            <div className='royalChicDetailOneTwoThree detailProject'>
            <div className='projectWho'>Start Date</div>
            <div className='projectWhy'>{project.start_date}</div>
            </div>
            <div className='royalChicDetailOneTwoFour detailProject'>
            <div className='projectWho'>Designer</div>
            <div className='projectWhy'>{project.designer}</div>
            </div>
          </div>
        </div>
        <Slider {...settings} className='projectPicsSlider-section-slider-tag'>
          {list.map((item,i) => {
            return(
              <div>
                <img src={item} alt='slider_image'/>
              </div>
            )
          })}
        </Slider>
        <div className='projectDescription'>
          <div className='projectDescriptionOne'>Project Description</div>
          <div className='projectDescriptionTwo'>
            {project.descs}
          </div>
          <div className='projectDescriptionThree'>
            <div className='projectDescriptionThreeOne'>
            THE STORY
            </div>
            <div className='projectDescriptionThreeTwo'>
              {project.story}
            </div>
          </div>
          <div className='projectDescriptionFour'>
          <div className='projectDescriptionThreeOne'>
          OUR APPROACH
            </div>
            <div className='projectDescriptionThreeTwo'>
              {project.approach}
            </div>
          </div>
          <div className='projectDescriptionFive'>
            
            {
              parseInt(id) !== 0? (
                <Link to={`/portfolios/${parseInt(id) - 1}/${projects[parseInt(id) - 1].name}`} className='projectArrows'>
                  <div className='projectDescriptionFiveOne'><span>↑</span></div>
                  <div className='projectDescriptionFiveTwo'>
                    <span>Previous Project</span>
                    <h1>{projects[parseInt(id) - 1].name}</h1>
                  </div>
                  </Link>
              ) : (
                <div className='projectArrows'>
                  <div className='projectDescriptionFiveOne'><span></span></div>
                  <div className='projectDescriptionFiveTwo'>
                    <span></span>
                    <h1></h1>
                  </div>
                </div>
              )
            }
            {id < projects.length - 1? (
              <Link to={`/portfolios/${parseInt(id) + 1}/${projects[parseInt(id) + 1].name}`} className='projectArrowsTwo'>
                <div className='projectDescriptionFiveTwoCondition'>
              <span>Next Project</span>
              <h1>{projects[parseInt(id) + 1].name}</h1>
            </div>
            <div className='projectDescriptionFiveOneCondition'><span>↑</span></div>
            </Link>
            ) : (
              <div className='projectArrowsTwo'>
                <div className='projectDescriptionFiveTwoCondition'>
              <span></span>
              <h1></h1>
            </div>
            <div className='projectDescriptionFiveOneCondition'><span></span></div>
              </div>
            )}
          </div>
        </div>
        
        <Footer detail={true}/>
    </div>
  )
}
