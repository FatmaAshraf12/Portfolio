import React ,{useEffect,Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Aos from 'aos'
import "aos/dist/aos.css"
import {Row,Container } from 'styled-bootstrap-grid';
import {WorkSection ,WorksDiv,Title3,Line,Testmonial,Wave,Line0,Title4,Work,Li,P,Overlay,Divv,Div,Img} from'./workStyle.js'

const Works = () =>{
    useEffect(()=>{
        Aos.init({duration:500});
    },[]);

    return(
        <WorkSection id="works">
            <Container >
                <WorksDiv>
                    <Title3>My Works</Title3>
                    <Line /> <Line /> <Line /> <Line /> <Line />                
            
                    <Testmonial>
                        <Divv><P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </P></Divv>
                        <Overlay />
                    </Testmonial>

                    <Row>
                        <Work data-aos="fade-in" className="col-md-4 col-xs-12">
                            <Li className="fa fa-star"></Li>
                            <Title4>Mobile UX</Title4>  <Line0 />
                            <P>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</P>
                        </Work>
                
                        <Work data-aos="fade-in" className="col-md-4 col-xs-12 ">
                            <Li className="fa fa-star"></Li>
                            <Title4>Mobile UX</Title4>  <Line0 />
                            <P>Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</P>
                        </Work>

                        <Work data-aos="fade-in" className= "col-md-4 col-xs-12">
                            <Li className="fa fa-star"></Li>
                            <Title4>Mobile UX</Title4>  <Line0 />
                            <P>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</P>
                        </Work>
                    </Row>
            </WorksDiv>
        </Container>

        <Container>
                <OwlCarousel className="owl-theme" items={6}loop margin={10}>
                    <Div className="item"><Img src="images/works/2.jpg" className="owl-img"/></Div>
                    <Div className="item"><Img src="images/works/3.jpg"className="owl-img"/></Div>
                    <Div className="item"><Img src="images/works/4.jpg" className="owl-img"/></Div>
                    <Div className="item"><Img src="images/works/6.jpg" className="owl-img"/></Div>
                    <Div className="item"><Img src="images/works/7.jpg" className="owl-img"/></Div>
                    <Div className="item"><Img src="images/works/8.jpg" className="owl-img"/></Div>
                    <Div className="item"><Img src="images/works/2.jpg" className="owl-img"/></Div>
                    <Div className="item"><Img src="images/works/3.jpg" className="owl-img"/></Div>
                    <Div className="item"><Img src="images/works/4.jpg" className="owl-img"/></Div>
                </OwlCarousel>
        </Container>
        
        <Wave />
        </WorkSection>

        )
    }

export default Works;