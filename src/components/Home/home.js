import React,{useEffect} from 'react';
import {Container } from 'styled-bootstrap-grid';
import Aos from 'aos'
import "aos/dist/aos.css"
import {HomeSection,Title3,Title5,Text,Br} from './homeStyle.js';


const Home = () =>{
    useEffect(()=>{
        Aos.init({duration:200});
    },[]);
    return(
        <HomeSection id="home">
            <Container>
                <Text className="col-xs-12" data-aos="fade-in">
                    <Title3 >FATMA EL-ZAHRAA ASHRAF</Title3>
                    <Br/>
                    <Title5 >Front end developer , looking for good chance to prove myself as a </Title5>
                    <Title5 >good front  end developer</Title5>
                </Text>
            </Container>
        </HomeSection>
    )

}

export default Home;
