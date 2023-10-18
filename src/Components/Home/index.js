import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import { BsArrowRightCircle } from "react-icons/bs";
import './index.css';
import styled from "styled-components";
import slider1 from '../img/sliders/slider1.jpg'
import slider2 from '../img/sliders/slider2.jpg'
import slider3 from '../img/sliders/slider3.jpg'
import slider4 from '../img/sliders/slider4.jpg'
import slider5 from '../img/sliders/slider5.jpg'
import { BiLogoFacebook } from "react-icons/bi";
import {BsInstagram} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import {BsArrowRightSquare} from 'react-icons/bs';

const Lists=[{id:1,url:slider1,content:'No Matter In Which Industry You Are; We Can Help You Build On Your Past Successes And Prepare For Your Great Future.',a:'/'},
{id:2,url:slider2,content:'Keep Your Business Safe And Reliable. Being one of the leading IT service providers, we have a large pool of certified engineers and IT support staff on hand to assist you.',a:'http://skilltechnologies.in/'},
{id:3,url:slider3,content:'TCS is an indigenous product developed by Skill Technologies. We aspire to enable all businesses to work with hassle-free billing. A unique feature of TCS includes the ability to manage all aspects of a spa and salon, restaurant, gym, and small business.',a:'http://trivedhi.com/'},
{id:4,url:slider5,content:'No Matter In Which Industry You Are; We Can Help You Build On Your Past Successes And Prepare For Your Great Future.',a:'http://skilltechnologies.in/'},
{id:5,url:slider4,content:'As a leading developer in our industry, beemtech is revolutionizing what you expect from a contractor.',a:'https://beemtech.in/'}]

const Img=styled.div`
  height: 100vh;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  
`;


const Home = () => {
      
       const [index,setindex]=useState(0);
       const [timer,settimer]=useState(null)
       const [popup,setpopup]=useState(true)
       const Prev=()=>{
         if (index>0){
              setindex(index-1)
              clearInterval(timer)
         }

       }
       const Content=()=>{
        setpopup(!popup)
       }
       const Next=()=>{
              if (Lists.length-1>index){
                 setindex(index+1)
                 clearInterval(timer)
              }
       }
       useEffect(() => {
              const interval = setInterval(() => {
                // Update the image index to show the next image
                setindex((prevIndex) => {
                     if (Lists.length - 1 > prevIndex) {
                       return prevIndex + 1;
                     } else {
                       return prevIndex; // No need to update if we've reached the end
                     }
                   });
              }, 2000); // Change the time interval as needed (e.g., every 2 seconds)
              settimer(interval)
              // Clear the interval when the component unmounts or when the button is clicked
              return () => clearInterval(interval);
            }, []); // The empty dependency array ensures this effect runs only once
       
       return (
              <>
                     <Header />
                    <div className='main-container main active-section animate-in'>
                    <div className='container-fluid p-0 fullheight row g-0 fullheight'>   
                    <div className='welcome-container col-12 col-xl-6 main__intro'>                      
                    <div className="color-layer color-layer-svg color-layer-svg-main"></div>
                         {popup &&
                         <div className='intro__headline'>
                          <span className="headline__subtitle">Welcome to </span>
                          <h1 className="headline__title">Infoswan Group of Companies</h1>
                          <p className="headline__descr" align="Justify">Infoswan Group of Companies is a diversified conglomerate comprising three distinct entities: Skill Technologies, Trivedhi Clerical Solutions, and Beemtech Infra LLP. Established in 2015,Infoswan Group has rapidly evolved to become a dynamic force in the fields of technology, business solutions,
                              and civil construction. Headquartered in Hyderabad, Infoswan Group operates under the visionary leadership of Mr.
                               Prasad Manchikanti, the Chairman & Managing Director, alongside a team of seasoned professionals including Mr. Naveen Andey,
                                a certified Business Analyst, and Mr. RL Rao, an experienced professional in various domains. Additionally, 
                                Mrs. Swetha Manchikanti serves as an active director, overseeing the management of the group's core verticals.
                          </p>
                          <div className="headline__btnholder">
                            <a href="#0" id="notify-trigger" className="button round-button link-l">
                              <span className="button__caption" onClick={Content}>Empowering Excellence, Innovating Futures</span>
                              <span className="button__icon" onClick={Content} >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <path d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                                </svg>
                              </span>
                            </a>
                          </div>
                        </div>} 
                        {!popup && 
                        <div className='popup-container'>
                          <button onClick={Content} className='cross'>X</button>
                          <div className="popup-title">
                            <span className="popup-title__subtitle">Stay in touch</span>
                   
                            <p className="popup-title__title">We are almost here</p>
                            <p className="popup-title__text">Generally our experts will respond within 24 Hrs to discuss on your concern</p>
                          </div>
                          <input type='email' placeholder='Email' className='email-text'/>
                          </div>
                          }
                                <div className='intro__socials'>
                                  <div className='socials socials-text'>
                                    <BiLogoFacebook className='new-icon'/>
                                      <span className='new-icon'>|</span>
                                    <BsInstagram className='new-icon'/>
                                      <span className='new-icon'>|</span>
                                    <AiFillLinkedin className='new-icon'/>
                                  </div>
                                </div>
                                <div className="intro__copyright">
                                  <p>© 2023 Infoswan Private Limited</p> 
                                </div>
                       </div>
                       <div className='col-12 col-xl-6 main__media'>
                         {/* <Img imageUrl={Lists[index].url}> */}
                              <div className='image-container'>
                              <img className='current-image' src={Lists[index].url} alt='newone'/>
                              </div>
                              <span className='slide-discription'>{Lists[index].content}</span>
                              <div className="slider__btnholder">
                                <a href={Lists[index].a} target="_blank" id="showreel-trigger" className="button round-button link-l">
                                  <span className="button__caption">Read More</span>
                                  <span className="button__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                      <path d="M0 0h24v24H0z" fill="none"></path>
                                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                                    </svg>
                                  </span>
                                </a>
                              </div>
                              {/* <div className="slider__btnholders">
                                <a href={Lists[index].a} target="_blank" id="showreel-trigger" className="button round-button link-l">
                                  <span className="button__captions">Reach Us</span>
                                </a>
                              </div> */}
                              {/* <div className='btn-holder'>
                              <div>
                              <Link to='/group' className='read-more'>READ MORE</Link><BsArrowRightCircle className='new-icon2'/></div>
                              <button className='reach-button'><a className='link-btn' target="_blank" href={Lists[index].a}>Reach Us</a></button>
                              </div> */}
                              <div className='sliderbtn'>
                                <button className='prev-button' onClick={Prev}>Prew *</button>
                                <button className='next-button' onClick={Next}> Next</button>
                              </div>
                         {/* </Img> */}
                         </div>
                    </div>
                    </div>
              </>)

};

export default Home
