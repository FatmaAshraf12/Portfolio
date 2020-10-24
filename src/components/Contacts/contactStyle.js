import styled from 'styled-components';

export const ContactSection = styled.section`
    width:100%;
    background-color:#fff;
    height:300px;
`
export const Title3 = styled.h3`
    text-align:center;
    font-size:40px;
    font-weight:bold;
    color:rgb(170, 14, 105);
    margin-bottom: 60px;
`

export const Form = styled.div`
    width:100%;
    height:auto;
    text-align: left;
    margin-bottom: 60px;
`


export const Name = styled.p`
    display: inline-block;
    margin-right: 20px;
    width: 100px;
    height:100xp;
    font-weight: bold;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`

export const Input = styled.input`
    margin-left: 10px;
    width:50%;
    border-radius: 5px;
  border-color: rgb(181, 181, 189);
  border:none;
  border-bottom:1px solid grey;
        &:focus{
    outline:none
}
`

export const Button = styled.button`
    padding:5px 40px;
    border-radius: 2px;
    background-color: rgb(170,14,105);
    border-color: rgb(170, 14, 105);
    color:#fff;
    font-weight: 100;
    position: absolute;
    left:40%;
    margin-top: 20px; 
    margin-bottom: 30px;  
    
    &:focus{
    outline:none;
    border-color: rgb(170, 14, 105);
    }
`

export const ContactInfo = styled.div`
    text-align: left;
`

export const Br= styled.br``
export const P = styled.p``
export const Title5 = styled.h5`
    font-weight: bold;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`
