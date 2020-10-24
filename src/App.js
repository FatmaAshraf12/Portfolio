import React from 'react';
import About from './components/About/about'
import Navbar from './components/Navbar/navbar'
import Home from './components/Home/home'
import Works from './components/Works/works'
import Contacts from './components/Contacts/contacts'
import Index from './components/Index/Index'
import ScrollArea from 'react-scrollbar'
import {BrowserRouter ,Switch, Route} from 'react-router-dom'


import './App.css';

class App extends React.Component {


  render() {
    return ( 

     <>
        <Navbar/>
        <Home id="home"/>
        <About id="about"/>       
        <Works id="works"/>      
        <Contacts id="contacts"/> 
</>
    );
  }
}

export default App;
