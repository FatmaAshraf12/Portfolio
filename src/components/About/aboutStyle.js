import styled from 'styled-components';

export const AboutSection = styled.section`
    width: 100%;
    height: auto;
    text-align: center;
    background-color: #070707;
    color:#fff;
    padding-bottom: 150px;
    padding-top:70px;
`

export const Title3 = styled.h3`
    margin-bottom:10px;
    color:#fff;
`

export const Skills = styled.div`
    font-size: 20px;
    height: auto;
 `

export const SkillBar = styled.div`
    height: 10px;
    position: relative;
    width:80%;
    background: rgba(17, 17, 17, .3);
    margin: 20px auto; 
`

export const SkillName = styled.div`
    height: 20px;
    position: relative;
    margin: 20px auto;
    color:#fff;
    font-size: 16px;
 `

export const HTML = styled.div`
    width: 100%;
    animation: Animate-HTML 4s;
    height: 10px;
    border-radius: 5px;
    position: absolute;
    left:0px;
    background-color: rgb(170, 14, 105);
    color:#020414;
`
export const CSS = styled(HTML)``
export const JS = styled(HTML)``
export const JSX = styled(HTML)`
    width:90%
`
export const Jquery = styled(HTML)``
export const Bootstrap = styled(HTML)``
export const Reactt = styled(HTML)`
    width:80%
`
export const Hooks = styled(HTML)`
    width:80%
`

export const Line = styled.div`
    width:20px;
    height:10px;
    background-color:rgb(170, 14, 105);
    color:rgb(170, 14, 105);
    margin: auto;
    display: inline-block;
    margin-right: 5px;
    margin-bottom:40px;
`

export const Info = styled.div`
    height:auto;
    text-align:justify;
    margin:auto;
    color:#000;
    font-size: 20px;
    margin-bottom:100px;
    background-color: rgb(236, 233, 233);
`
export const Img = styled.img`
    border-radius:5px;
`
export const InfoP = styled.div`
    padding:50px 40px;
    width:100%;
`


