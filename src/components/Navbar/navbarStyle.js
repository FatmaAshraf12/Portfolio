import styled from 'styled-components'
import { Link } from "react-scroll";

export const Nav = styled.section`
	width:100%;
	height:50px;
	padding-top: 20px;
	background-color: #070707;
	color:#fff;
	position:fixed;
	z-index:9999999;
`
export const Ul = styled.ul`
width:90%;
margin:auto;
	height:auto;
	font-size: 18px;
	font-weight: 200;	
	list-style: none;
`
export const Linkk = styled(Link)`
color:rgb(170,14,105);
font-weight:200;
padding-top:5px;
	&:hover{
		color:#fff;
		border-bottom:none;
		text-decoration: none;
		cursor:pointer;
	}
`
export const Li = styled.li`
display:inline-block;
pointer:cursor;
padding-right:9%;
padding-left:9%;
&:focus{
	color:red;
}
`



