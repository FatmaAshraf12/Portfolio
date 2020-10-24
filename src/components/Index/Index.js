import React from 'react';
import About from './../About/about'
import Navbar from './../Navbar/navbar'
import Home from './../Home/home'
import Works from './../Works/works'
import Contacts from './../Contacts/contacts'

const Index = () =>{
    return(
        <div>
            <Home />
        <About />
        <Works />
        <Contacts />
        </div>
        
    )
}

export default Index;