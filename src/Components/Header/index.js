import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import TabContext from '../Tabcontext';
import { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { useLocation } from 'react-router-dom';
import logo from '../img/logo.png'
import './index.css'
const Header=() =>{
  const location=useLocation();
  const currentpath=location.pathname
  const [response,setresponse]=useState(false)
  const [tab,settab]=useState(false)
  const change=()=>{
    setresponse(!response);
  }
  const tabchange=(e)=>{
    e.preventDefault();
    settab(!tab)
  }
  return (
    <>

      <Navbar bg="light" className=' d-none d-sm-none d-md-block d-lg-block d-xl-block head-container'>
        <Container>
          <Navbar.Brand  className='col-3'>
            <img className='logo' alt='infoswan' src={logo}/>
          </Navbar.Brand>
          <Nav className="me-auto col-9 header">
            <Nav.Link >
            <Link to='/' className='head'>Home</Link></Nav.Link>
            <Nav.Link ><button className='click-button' onClick={tabchange}> 
            <Link to='/about' className='head'>
              About us</Link> </button></Nav.Link>
            <Nav.Link >
            <Link to='/group' className='head'>Our Group</Link></Nav.Link>
            <Nav.Link >
            <Link to="/testimonials" className='head'>Testimonials</Link></Nav.Link>
            <Nav.Link >
            <Link to='/reach' className='head'>Reach Us</Link></Nav.Link>
          </Nav>
        </Container>
        {/* <TabContext.Consumer>
        {(value)=>(
        <div>
        {currentpath==='/about' && <div className='tabs-container'>
        <button className='click-button' onClick={()=>value.changeTab('1')}>Vision</button>
        <button className='click-button' onClick={()=>value.changeTab('2')}>Why Choose Infoswan</button>
        <button className='click-button' onClick={()=>value.changeTab('3')}>Vision</button>
      </div>}</div>)}</TabContext.Consumer> */}
      </Navbar>
      
      <navbar className="navbar navbar-expand-lg navbar-light bg-white d-block d-sm-block d-md-none d-lg-none d-xl-none head-container">
      <div className='mobile-container'>
      <a className="navbar-brand"><img className='logo' alt='infoswan' src={logo}/></a>
      <button onClick={change} className="navbar-toggler menu-button" type="button">
        {! response && <span><AiOutlineMenu className='icon'/></span>}
        {response && <span className='icon'>X</span>}
      </button></div>
      {response && <div className="collapse navbar-collapse mobile" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
        <Link to='/' className='head'>Home</Link>
        {/* <button className='para-button' onClick={tabchange}>
        <Link to='/about' className='head'>About</Link></button> */}
        <Link to='/about' className='head'>About</Link>
        <Link to='/group' className='head'>Our Group</Link>
        <Link to="/testimonials" className='head'>Testimonials</Link>
        <Link to='/reach' className='head'>Reach Us</Link>
        </div>
        
      </div>}
      <TabContext.Consumer>
        {(value)=>(
        <div>
        {currentpath==='/about' && <div className='tabs-container'>
        <button className='click-button' onClick={()=>value.changeTab('1')}>VISION</button>
        <button className='click-button' onClick={()=>value.changeTab('2')}>Why Choose Infoswan</button>
        {/* <button className='click-button' onClick={()=>value.changeTab('3')}>Vision</button> */}
      </div>}</div>)}</TabContext.Consumer>
      
     </navbar>
    </>
  );
}

export default Header;