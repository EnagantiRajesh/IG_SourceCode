
import {Component} from 'react';
import { BrowserRouter,Routes, Route,} from 'react-router-dom';
import TabContext from './Components/Tabcontext'
import Home from './Components/Home/index';
import About from './Components/About/index';
import Group from './Components/Group/index';
import Test from './Components/Test/index';
import Reach from './Components/Reach/index';
import NotFound from './Components/NotFound';
import Privacy from './Components/Privacy/privacy';
import './App.css';

class App extends Component {
   
  state={active:'1'}

  changeTab=(num)=>{
    this.setState({active:num})
    console.log(num);
  }
  render(){
    const{active}=this.state
  return (
    <BrowserRouter>
      <TabContext.Provider
      value={{active,
      changeTab:this.changeTab
      }}>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/group" element={<Group/>} />
          <Route exact path="/testimonials" element={<Test/>} />
          <Route exact path="/reach" element={<Reach/>} />
          <Route exact path="/Privacy" element={<Privacy/>} />
          <Route path='*' element={<NotFound/>} />
          </Routes>  
          </TabContext.Provider>
    </BrowserRouter>
  )}
}

export default App;
