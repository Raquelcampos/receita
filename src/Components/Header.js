import React from "react";
import styled from 'styled-components'
import Lupa from './img/lupa.png'
export const Div= styled.div`
background-color: blueviolet;
display:flex;
height:12vh;
justify-content: space-evenly;
align-items: center;
@import url('https://fonts.googleapis.com/css2?family=Caveat&family=Dancing+Script&display=swap');
h1{
  -webkit-text-stroke: 2px white;
  font-family: 'Dancing', cursive;
  color:blueviolet;
}
div{
  border:solid 2px white;
  width:300px;
  height:40px;
  display:flex;
  border-radius:20px;
  overflow: hidden;
  justify-content: space-between;
  background-color: white;
}
button{
  width:12%;
  height:35px;
  border:none;
  background-color: blueviolet;
  border-radius:50%;
  cursor: pointer;
}
img{
  width:50%; 
}
input{
  border:none;
  outline: 0;
  text-align: center;
}
p:hover{
  color: white;
  cursor: pointer;
}
@media(max-width:1000px){
  p{
    display:none;
  }
}
@media(max-width:700px){
  h1{
    font-size:1.5rem;
  }
  div{
    width:35%;
  }
 
}
`
export default function Header() {
  return (
    <Div>
     
     
      <h1>NADAMAL RECEITAS</h1>
      <div>
       <input type="text"  placeholder="Encontre uma receita..." />
       <button> <img src={Lupa} alt="lupa" /></button>
      </div>
      <p>ENVIAR SUA RECEITA</p>
      <p>CADASTRE-SE</p>
      <p>ENTRAR</p>
     
    </Div>
  );
}