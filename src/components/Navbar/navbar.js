import React from 'react';
import About from './../About/about'
import { Link } from "react-scroll";
import {Row, Col,Container } from 'styled-bootstrap-grid';
import {Nav,Ul,Li,Linkk}from'./navbarStyle.js';

class Navbar extends React.Component{

    
	render(){
    return(
        <Nav expand="lg">
			<Container>
			<Ul>
					<Li><Linkk activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={800}>Home</Linkk></Li>
					<Li><Linkk activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={800}>About</Linkk></Li>
					<Li><Linkk activeClass="active" to="works" spy={true} smooth={true} offset={-70} duration={800}>Works</Linkk></Li>
					<Li><Linkk activeClass="active" to="contacts" spy={true} smooth={true} offset={-70} duration={800}>Contacts</Linkk></Li>
			</Ul>
			</Container>
        </Nav>
    )}
}

export default Navbar;