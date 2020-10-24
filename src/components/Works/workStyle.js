import styled from 'styled-components'

export const WorkSection = styled.section`
    width:100%;
    height:auto;
    text-align: center;
    background-color: #070707;
    color:#fff;
`

export const WorksDiv = styled.div`
    color:#fff;
    text-align: center;
    margin-bottom: 70px;
`
export const Testmonial = styled.div`
    width: 100%;
    height:350px;
    background: url("/images/works/9.jpg");
    background-repeat: no-repeat;

    background-position: center center;
    background-size:cover;
    position: relative;
    color:#000;
    margin-bottom:100px;
`
export const Divv = styled.div`
    width:100%;
    padding:40px 40px;
    color:#000;
    opacity:1;
`

export const Overlay = styled.div`
    position: absolute;
    left:0px;
    top:0px;
    background-color: rgba(170, 14, 105,0.4);
    width:100%;
    color:#fff;
    height:350px;
`


export const Line = styled.div`
    width:20px;
    height:10px;
    background-color:rgb(170, 14, 105);
    margin: auto;
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 80px;
`
export const Title3 = styled.h3`
    margin-bottom: 10px;
`

export const Ttle4 = styled.h4``

export const Work = styled.div`  
    padding: 20px 50px ;
`

export const Div = styled.div``
export const P = styled.p``
export const Li = styled.li``
export const Img =  styled.img``
export const Title4 = styled.h4``

export const Line0 = styled.hr`
    color:#fff;
    background-color: grey;
    width:30%;
    margin:auto;
    margin-bottom: 30px;
`


export const Wave = styled.div`
    margin-top:190px;
    width: 100%;
    height:50px;
    position: relative;
    &:before {
        content:'';
        position: absolute;
        left:0;
        bottom:0;
        width: 100%;
        height: 130px;
        background: url("/images/wave.png");
        background-size: cover;
        background-repeat: repeat;
      }
`
