import Header from '../Header';
import './index.css'
import TabContext from '../Tabcontext';
import skt from '../img/works/skt.jpg';

const About = () => {
   return (
      <>
         <Header />
         <TabContext.Consumer>
            {({ active }) => (
               <div className='about-container'>
                  {/* <div className='about-back-cont'>
                 <span className='about-title'>CREATIVITY IS</span>
                 <span className='about-title'>ABOVE ALL</span>
              </div>   */}

                  <div className='about-card-container'>
                     <div className='about-card content-block'>
                        <p className='block-subtitle'>About Us</p>
                        <p className='block__text half-text'>Infoswan Group of Companies is a diversified conglomerate comprising three distinct entities:
                         Skill Technologies, Trivedhi Clerical Solutions, and Beemtech Infra LLP. Established in 2015, Infoswan Group has rapidly
                          evolved to become a dynamic force in the fields of technology, business solutions, and civil construction. Headquartered in Hyderabad
                          , Infoswan Group operates under the visionary leadership of Mr. Prasad Manchikanti, the Chairman & Managing Director, alongside a team
                           of seasoned professionals including Mr. Naveen Andey, a certified Business Analyst, and Mr. RL Rao, an experienced professional in various domains.
                            Additionally, Mrs. Swetha Manchikanti serves as an active director, overseeing the management of the group's core verticals.</p>
                        <h2 className="block__title">Why Choose Infoswan?</h2>
                        <p className='block__text half-text'>Innovative Solutions: We pride ourselves on being at the forefront of innovation.
                           Our team of experts consistently explores new technologies to provide you with solutions
                           that are future-proof and industry-leading.</p>
                     </div>
                     <div className='about-image-card'>
                        <img className='image-card' src={skt} alt='about_image' />
                     </div>
                  </div>
                  <div className='about-card-container'>
                  <div className='about-image-card'>
                        <img className='image-card' src={skt} alt='about_image' />
                     </div>
                     <div className='about-card content-block'>
                        <p className='block-subtitle'>VISION</p>
                        <p className='block__text half-text'>"At Infoswan Group, we are driven by a shared vision of innovation, excellence, and transformation. As a vital member of the Skill Technologies, Trivedhi, Beemtech, and Anand Media Works family, our vision transcends traditional boundaries and envisions a future where technology and creativity converge to shape a brighter tomorrow."</p>
                        <h2 className="block__title">MISSION</h2>
                        <p className='block__text half-text'>
                        "our mission is to empower businesses and individuals through innovative solutions and unwavering commitment to excellence. We strive to be a beacon of technological advancement, driving positive change in the industries we serve. Our core values of integrity, innovation, and inclusivity guide every decision we make. We are dedicated to fostering a culture of collaboration and continuous improvement, where our talented teams are inspired to push boundaries and pioneer new possibilities." 
                        </p>                       
                     </div>
                  </div>

                  {/* {'1' === active && <div className='about-card-container'>
                     <div className='about-card content-block'>
                        <p className='block-subtitle'>About Us</p>
                        <p className='block__text half-text'>Infoswan Group of Companies is a diversified conglomerate comprising three distinct entities:
                         Skill Technologies, Trivedhi Clerical Solutions, and Beemtech Infra LLP. Established in 2015, Infoswan Group has rapidly
                          evolved to become a dynamic force in the fields of technology, business solutions, and civil construction. Headquartered in Hyderabad
                          , Infoswan Group operates under the visionary leadership of Mr. Prasad Manchikanti, the Chairman & Managing Director, alongside a team
                           of seasoned professionals including Mr. Naveen Andey, a certified Business Analyst, and Mr. RL Rao, an experienced professional in various domains.
                            Additionally, Mrs. Swetha Manchikanti serves as an active director, overseeing the management of the group's core verticals.</p>
                            <h2 className="block__title">Why Choose Infoswan?</h2>
                        <p className='block__text half-text'>Innovative Solutions: We pride ourselves on being at the forefront of innovation.
                           Our team of experts consistently explores new technologies to provide you with solutions
                           that are future-proof and industry-leading.</p>
                     </div>
                     <div className='about-image-card'>
                        <img className='image-card' src={skt} alt='about_image' />
                     </div>
                  </div>}
                  {'2' === active && <div className='about-card-container'>
                     <div className='about-image-card'>
                        <img className='image-card' src={skt} alt='about_image' />
                     </div>
                     <div className='about-card'>
                        <p className='block-subtitle'>VISION</p>
                        <p className='block-text'>"At Infoswan Group, we are driven by a shared vision of innovation, excellence, and transformation.
                           As a vital member of the Skill Technologies, Trivedhi, Beemtech, and Anand Media Works family,
                           our vision transcends traditional boundaries and envisions a future where technology and creativity converge to shape a brighter tomorrow."</p>
                        <p className='block-subtitle'>MISSION</p>
                        <p className='block-text'>"our mission is to empower businesses and individuals through innovative solutions and unwavering commitment to excellence.
                           We strive to be a beacon of technological advancement, driving positive change in the industries we serve. Our core values of integrity,
                           innovation, and inclusivity guide every decision we make. We are dedicated to fostering a culture of collaboration and continuous improvement,
                           where our talented teams are inspired to push boundaries and pioneer new possibilities."</p>
                     </div>

                  </div>} */}
               </div>
            )}
         </TabContext.Consumer>
      </>)
}

export default About
