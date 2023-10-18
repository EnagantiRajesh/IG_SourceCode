import Header from '../Header';
import './index.css'

import grouped from "styled-components";
import group1 from '../img/works/skt.jpg'
import group2 from '../img/works/tcs.jpg'
import group3 from '../img/works/amw.jpg'
import group4 from '../img/works/beem.jpg'

const cardImg1={
   height: '27vh',
   width: '100%',
   backgroundImage: `url(${group1})`,
   backgroundSize: 'cover', // Adjust as needed
   backgroundPosition: 'center'
}
const cardImg2={
   height: '27vh',
   width: '100%',
   backgroundImage: `url(${group2})`,
   backgroundSize: 'cover', // Adjust as needed
   backgroundPosition: 'center'
}
const cardImg3={
   height: '27vh',
   width: '100%',
   backgroundImage: `url(${group3})`,
   backgroundSize: 'cover', // Adjust as needed
   backgroundPosition: 'center',
}
const cardImg4={
   height: '27vh',
   width: '100%',
   backgroundImage: `url(${group4})`,
   backgroundSize: 'cover', // Adjust as needed
   backgroundPosition: 'center'
}

const Group = () => {

    return(
        <>
            <Header/>
            <div className='group-container'>
            {/* <div className='group-back-cont'>
                 <span className='group-title'>CREATING</span>
                 <span className='group-title'>CUSTOM</span>
                 <span className='group-title'>PRODUCTS</span>
              </div> */}
              <div className='group-card-container'>
                 <p className='group-title'>PORTFOLIO</p>
                 <h2 className='group-para'>MEET OUR FEATURED PRODUCTS</h2>
                   <div className='all-cards'>
                     <div className='group-card'>
                        <div style={cardImg1}>
                             {/* <img className='group-card-image' alt='ho' src='http://dev.skilltechnologies.in/Infoswan/img/works/skt.jpg'/>  */}
                            <p className='hover-para'>Skill Technologies</p>
                        </div>
                        <button className='download-button'>DOWNLOAD BROCHURE</button> 
                        <div className='card-body'>
                           <p className='card-text'>Being one of the leading IT service providers, we have a large pool of certified engineers and IT support staff on hand to assist you.With our experienced professionals.</p>
                         </div>
                         <button className='readmorebtn'><a href='http://skilltechnologies.in/' target='_blanck' >Read More</a></button>
                     </div>
                     <div className='group-card'>
                        <div style={cardImg2}>
                            <p className='hover-para'>Trivedhi Clerical Solution (TCS)</p>
                            {/* <img className='group-card-image' alt='ho' src='http://dev.skilltechnologies.in/Infoswan/img/works/tcs.jpg'/> */}
                         </div>
                         <button className='download-button'>DOWNLOAD BROCHURE</button>
                         <div className='card-body'>
                           <p className='card-text'>Trivedhi Clerical Solution (TCS) is an indigenous product developed by Skill Technologies. We aspire to enable all businesses to work with hassle-free billing.</p>
                         </div>
                         <button className='readmorebtn'><a href='http://trivedhi.com/' target='_blanck' >Read More</a></button>
                        </div>
                        <div className='group-card'>
                           <div style={cardImg3}>
                              <p className='hover-para'>Aanand Media Works</p>
                           {/* <img className='group-card-image' alt='ho' src='http://dev.skilltechnologies.in/Infoswan/img/works/amw.jpg'/> */}
                           </div>
                           <button className='download-button'>DOWNLOAD BROCHURE</button>
                           <div className='card-body'>
                              <p className='card-text'>No Matter In Which Industry You Are; We Can Help You Build On Your Past Successes And Prepare For Your Great Future.</p>
                           </div>
                           <button className='readmorebtn'><a href='http://skilltechnologies.in/' target='_blanck' >Read More</a></button>
                        </div>
                        <div className='group-card'>
                           <div style={cardImg4}>
                           <p className='hover-para'>BeemTech</p>
                           {/* <img className='group-card-image' alt='ho' src='http://dev.skilltechnologies.in/Infoswan/img/works/beem.jpg'/> */}
                           </div>
                           <button className='download-button'>DOWNLOAD BROCHURE</button> <div className='card-body'>
                              <p className='card-text'>We achieve this success without ever compromising our values by providing quality construction practices, effective communication, and a deep understanding of the building environment.</p>
                           </div>
                           <button className='readmorebtn'><a href='https://beemtech.in/' target='_blanck' >Read More</a></button>
                        </div> 
                   </div>
              </div>
            </div>
        </>
    )
}

export default Group
