import Header from '../Header';
import { Link } from 'react-router-dom';
import './index.css'


const Reach = () => {

    return(
        <>
            <Header/>
            <div className='reach-container'>
                <div className='container'>
                    <div className="row gx-0">
                        <div className="col-12 col-xl-6">
                          <span className="block__subtitle">Contact</span>
                          <h2 className="block__title">Welcome to Infoswan Group</h2>
                          <p className="block__text">Ready to embark on a journey of innovation and growth? Contact Infoswan Group of Companies today to explore how our solutions can transform your business.
                          </p>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className="row gx-0">
                        <div className='col-5 reach-card-container'>
                            <div className='container-fluid px-0'>
                                <div className="row gx-5">
                                <div className="col-12 col-md-6 contact-data__item">
                                    <h5>Location</h5>
                                    <p>
                                    Plot No 14, Green Hamlet,<br/>
                                    Silpa Park, Kondapur,<br/>
                                    Hyderabad, Telangana - 500084, India.
                                    </p>
                                    <h5>Resources</h5>
                                    <ul>
                                    <li>
                                        <Link to='/Privacy' className="link-s">Privacy & Policy</Link>
                                    </li>
                                    <li>
                                        <a href="TermsandConditions.html" target="_blank" className="link-s">Terms and Conditions</a>
                                    </li>
                                    <li><a href="CookiePolicy.html" target="_blank" className="link-s">Cookie Policy</a></li>
                                    </ul>
                                </div>
                                <div className="col-12 col-md-6 contact-data__item">
                                    <h5>Follow us</h5>
                                    <ul>
                                    <li>
                                        <a href="#" target="_blank" className="link-s">Facebook</a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank" className="link-s">Instagram</a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank" className="link-s">Twitter</a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank" className="link-s">Linkedin</a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank" className="link-s">Pinterest</a>
                                    </li>
                                    </ul>
                                </div>
                                <div className="col-12 col-md-6 contact-data__item">
                                    <h5>Call any time</h5>
                                    <p><a href="tel:040-3584 3505" className="link-s">040-3584 3505</a>
                                    <a href="tel:901 418 3086" className="link-s">901 418 3086</a></p>
                                </div>
                                <div className="col-12 col-md-6 contact-data__item">
                                    <h5>Email</h5>
                                    <p><a href="mailto:info@skilltechnologies.in" className="link-s">info@skilltechnologies.in</a>
                                    <a href="mailto:contact@skilltechnologies.in" className="link-s">contact@skilltechnologies.in</a></p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-7 email-container'>
                            <div className="contact-data__item">
                            <h5>Just say hello!</h5>
                                <div className="form-container">
                                <div className="reply-group">
                                    <svg className="reply-group__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                                    <circle cx="15.5" cy="9.5" r="1.5"></circle>
                                    <circle cx="8.5" cy="9.5" r="1.5"></circle>
                                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 
                                    20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z"></path>
                                    </svg>
                                    <p className="reply-group__title">Done!</p>
                                    <span className="reply-group__text">Thanks for your message. We will get back as soon as possible.</span>
                                </div>
                                <form action='submit' method='post' className='form-container'>
                                    <input type="hidden" name="project_name" value="Infoswan Group"/>
                                    <input type="hidden" name="admin_email" value="info@skilltechnologies.in"/>
                                    <input type="hidden" name="form_subject" value="Contact Form Message"/>
                                    <div className="container-fluid px-0">
                                    <div className="row gx-5">
                                        <div className="col-12 col-xl-4">
                                        <input type="text" name="Name" placeholder="Your Name*" required=""/>
                                        </div>
                                        <div className="col-12 col-xl-4">
                                        <input type="email" name="E-mail" placeholder="Email Adress*" required=""/>
                                        </div>
                                        <div className="col-12 col-xl-4">
                                        <input type="tel" name="Phone" placeholder="Phone Number"/>
                                        </div>
                                        <div className="col-12">
                                        <textarea name="Message" placeholder="A Few Words*" required=""></textarea>
                                        </div>
                                        <div className="col-12">
                                        <span className="inputs-description">*Required fields</span>
                                        <button className="btn-solid link-l">Submit</button>
                                        </div>
                                    </div>
                                    </div>
                                </form>
                                </div>
                            </div>
                        {/* <form action='submit' method='post' className='form-container'>
                            <p>Just Say Hello</p>
                                <input className='input-text' type='text' placeholder='Name'/>
                                <input type='email' className='input-text' placeholder='Email'/>
                                <input type='phone' className='input-text' placeholder='Phone'/><br/>
                                <textarea className='textarea'  rols='5' cols='90'>Few Words</textarea><br/>
                                <button>Submit</button>
                            </form>   */}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Reach
