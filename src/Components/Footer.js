import React from "react";
import Face from './img/face.png'
import Insta from './img/insta.png'
import Twitter from './img/twitter.png'
import styled from 'styled-components'
export const Div=styled.footer`
background-color: blueviolet;
display:flex;
height:12vh;
align-items: center;
justify-content: space-between;
@import url('https://fonts.googleapis.com/css2?family=Caveat&family=Dancing+Script&display=swap');
h1{
  -webkit-text-stroke: 2px white;
  font-family: 'Dancing', cursive;
  color:blueviolet;
}
`
export const Img=styled.div`
width:15%;
display:flex;
align-items: center;
justify-content: space-between;
img{
  background-color:white;
  border-radius:50%;
  width:20%;
  height:50px;
  cursor:pointer;
}
`
export default function Footer() {
  return (
   <Div>
     <h1>NADAMAL RECEITAS</h1>
     <Img>
      <img src={Face} alt="facebook" />
      <img src={Insta} alt="instagran" />
      <img src={Twitter} alt="Twitter" />
     </Img>
   </Div>
  );
}