import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import Header from '../Header';
import './index.css'

const settings = {
    dots: true,
    slidesToShow:2,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }}]
}

const Test = () => {

    return (
        <>
            <Header />
            <div className='test-container'>
                <div className="slider-container">
                <div className='client-container'>
                    <h2 className='block__title'>IN CLIENT WORDS</h2>
                    <p class="p-textblock__text">I wonder if I've been changed in the night?
                            Let me think. Was I the same when I got up this morning?
                            I almost think I can remember feeling a little different.
                            But if I'm not the same, the next question is 'Who in the world am I?' Ah, that's the great puzzle!
                          </p>   
                </div>
                    <Slider {...settings}>
                        <div className='card-slider'>
                            
                              <div><BiSolidQuoteAltLeft className='quo-icon'/><br/>
                              <span className='quo-icon'>Good work environment and culture.
                               Teammates are supportive and the management is transparent.
                                Company policies are good appraisals are fair and they give good salary hike and bonus every year.
                                 The job is quite interesting i struggled a bit 
                                 in the beginning as there was no formal training sessions on existing projects</span><br/>
                              <BiSolidQuoteAltRight className='quo-icon'/>
                              </div>
                              <p className='quo-icon'>PAVAN NAYAK</p>
                        </div>
                        <div className='card-slider'>
                        <div><BiSolidQuoteAltLeft className='quo-icon'/><br/>
                              <span className='quo-icon'>one of the best digital marketing company in Hyderabad we have
                               taken digital branding and services for our website very quality at affordable prices they offered
                                us all digital marketing services for our company. Thank you for Skill technologies</span><br/>
                              <BiSolidQuoteAltRight className='quo-icon'/>
                              </div>
                              <p className='quo-icon'>V NAVEEN</p>
                        </div>
                        <div className='card-slider'>
                            
                              <div><BiSolidQuoteAltLeft className='quo-icon'/><br/>
                              <span className='quo-icon'>I'm pretty.
                               I am very happy share my review about skill technologies.
                                it's is the one of the best social media agency in Hyderabad helped with
                                 Pinterest platform to drive traffic to our website. we received 5 organic leads</span><br/>
                              <BiSolidQuoteAltRight className='quo-icon'/>
                              </div>
                              <p className='quo-icon'>VAISHNAVI</p>
                                  
                        </div>
                        <div className='card-slider'>
                        <div><BiSolidQuoteAltLeft className='quo-icon'/><br/>
                              <span className='quo-icon'>Good agency for web development .
                              we have approached them for our E-commerce web portal for medical agency ,
                              I felt very happy with out put.All office team are very coordinating and helpful
                               and expertise digital team,Im happy to say that nw we are generating lot of customers.</span><br/>
                              <BiSolidQuoteAltRight className='quo-icon'/>
                              </div>
                              <p className='quo-icon'>MARAGOWNI MAHESWARI</p>
                        </div>
                        <div className='card-slider'>
                            
                              <div><BiSolidQuoteAltLeft className='quo-icon'/><br/>
                              <span className='quo-icon'>i have a good experience with this company 
                              This software helps to allocation of equipment’s to persons based on their time slots
                               without any waiting at Gym. Make your front desk transactions safely with our hassle
                                free billing software It's easy to use and 100% customized gym management software
                                 I personally choose Web development services from Skill Technologies,
                                  They lead my project in Good way with satisfied Results.One of the best
                                   web designing agency in Hyderabad.Its a good experience with skill Tech Team, Thank you</span><br/>
                              <BiSolidQuoteAltRight className='quo-icon'/>
                              </div>
                              <p className='quo-icon'>SUDHEER KUMAR</p>
                        </div>
                        <div className='card-slider'>
                        <div><BiSolidQuoteAltLeft className='quo-icon'/><br/>
                              <span className='quo-icon'>I have taken their services about 3 month ago,
                              getting much enquiries and business due to this company's hardwork.
                              The team take accountability of the task with full professionalism and ethics....</span><br/>
                              <BiSolidQuoteAltRight className='quo-icon'/>
                              </div>
                              <p className='quo-icon'>SKAKEEL (HARDCORP GYM)</p>
                        </div>
                        <div className='card-slider'>
                            
                              <div><BiSolidQuoteAltLeft className='quo-icon'/><br/>
                              <span className='quo-icon'>I personally recommended skill Technologies for Social media marketing
                               & lead generation. for my business we got timely response and leads through Social media!</span><br/>
                              <BiSolidQuoteAltRight className='quo-icon'/>
                              </div>
                              <p className='quo-icon'>VINEETHA REDDY (OSKIN CLINIC)</p>
                            
                        </div>
                        <div className='card-slider'>
                        <div><BiSolidQuoteAltLeft className='quo-icon'/><br/>
                              <span className='quo-icon'>I'm pretty. I am very happy share my review about skill technologies.
                               it's is the one of the best social media agency in Hyderabad helped with
                                Pinterest platform to drive traffic to our website. we received 5 organic leads </span><br/>
                              <BiSolidQuoteAltRight className='quo-icon'/>
                              </div>
                              <p className='quo-icon'>VAISHNAVI(HYDERABAD)</p>
                        </div>
                    </Slider>  </div>
                {/* <div className='test-card-container'>
                    <p>IN CLIENT WORDS</p>
                    <p className='test-para'>I wonder if I've been changed in the night? Let me think.
                        Was I the same when I got up this morning? I almost think I can remember feeling a little different.
                        But if I'm not the same, the next question is 'Who in the world am I?' Ah, that's the great puzzle!</p>
                    <div className='all-cards'>
                        <div className='test-card'>
                            <div className='test-card-image'></div>
                            <p>Jhon Lenon</p>
                            <p>Brand Manager</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Fusce posuere massa.</p>
                        </div>
                        <div className='test-card'>
                            <div className='test-card-image'></div>
                            <p>Jhon Lenon</p>
                            <p>Brand Manager</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Fusce posuere massa.</p>
                        </div>
                        <div className='test-card'>
                            <div className='test-card-image'></div>
                            <p>Jhon Lenon</p>
                            <p>Brand Manager</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Fusce posuere massa.</p>
                        </div>
                        <div className='test-card'>
                            <div className='test-card-image'></div>
                            <p>Jhon Lenon</p>
                            <p>Brand Manager</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Fusce posuere massa.</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )

}

export default Test
