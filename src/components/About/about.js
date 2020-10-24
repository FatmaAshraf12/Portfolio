import React ,{useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col,Container } from 'styled-bootstrap-grid';
import Aos from 'aos'
import "aos/dist/aos.css"
import {AboutSection,Title3,Info,Img,InfoP ,Line,SkillBar, Skills , SkillName , HTML ,CSS ,JS ,JSX ,Jquery ,Hooks ,Reactt,Bootstrap} from './aboutStyle.js';

const About=()=>{
    useEffect(()=>{
        Aos.init({});
    },[]);

return(
    <AboutSection id="about">
        <Container>
            <Title3>About Me</Title3>
            <Line/><Line/><Line/><Line/><Line/><Line/>                     
               
            <Info>
                <Row data-aos="fade-in">
                    <Img src="images/works/2.jpg" className="col-md-6"/>
                    <InfoP className="col-md-6">I graduated from faculty of computers and artificiall intellgece.i get diploma in web design and evelopment. i believe in any one can do any thing he want</InfoP>
                </Row>
            </Info>
        

            <Skills data-aos="fade-in">
                <Title3>My Skills</Title3>
                <Line/><Line/><Line/><Line/><Line/><Line/> 
 
                <Row>
                    <SkillName className="col-md-2">HTML/HTML3</SkillName>
                    <SkillBar className="col-md-9 col-xs-12">
                        <HTML />
                    </SkillBar> 
                </Row>
                    
                <Row>
                    <SkillName className="col-md-2">Css / CSS3</SkillName>
                    <SkillBar className="col-md-9 col-xs-12">
                        <CSS />
                    </SkillBar>
                </Row>

                <Row>
                    <SkillName className="col-md-2">Bootstrap</SkillName>
                    <SkillBar className="col-md-9 col-xs-12">
                        <Bootstrap />
                    </SkillBar>
                </Row>

                <Row>
                    <SkillName className="col-md-2">JS</SkillName>
                    <SkillBar className="col-md-9 col-xs-12">
                        <JS />
                    </SkillBar>
                </Row>

                <Row>
                    <SkillName className="col-md-2">jQuery</SkillName>
                    <SkillBar className="col-md-9 col-xs-12">
                        <Jquery />
                    </SkillBar>
                </Row>

                <Row>
                    <SkillName className="col-md-2">React.js</SkillName>
                    <SkillBar className="col-md-9 col-xs-12">
                        <Reactt />
                    </SkillBar>
                </Row>

                <Row>
                    <SkillName className="col-md-2">JSX</SkillName>
                    <SkillBar className="col-md-9 col-xs-12">
                        <JSX />
                    </SkillBar>
                </Row>

                <Row>
                    <SkillName className="col-md-2">React Hooks</SkillName>
                    <SkillBar className="col-md-9 col-xs-12">
                        <Hooks />
                    </SkillBar>
                </Row>
            </Skills>
        </Container>
    </AboutSection>

)
}

export default About;


