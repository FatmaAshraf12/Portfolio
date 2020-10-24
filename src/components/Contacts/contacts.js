import React,{useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col,Container } from 'styled-bootstrap-grid';
import Aos from 'aos'
import "aos/dist/aos.css"
import {ContactSection ,Title3,Form,Name,Input,Br ,Button,ContactInfo,Title5,P} from './contactStyle.js';

const Contacts = ()=>{
    useEffect(()=>{
        Aos.init({duration:500});
    },[]);
return(
    <ContactSection id="contacts">
        <Title3>Contacts</Title3>
        <Container>
        <Row>
            <Form className="col-md-8 col-xs-12">
                <Name>Name</Name>
                <Input /><Br />

                <Name>E-mail</Name>
                <Input /><Br />

                <Name>Message</Name>
                <Input /><Br />
                
                <Button>Submit</Button>

            </Form>
            <ContactInfo className="col-md-4 col-xs-12">
                <Title5>E-mail</Title5>
                <P>fatma_ashraf12@yahoo.com</P>
                <Title5>Phone</Title5>
                <P>0123456789</P>
            </ContactInfo>
        </Row>
    </Container>
</ContactSection>
    
)
}

export default Contacts ;