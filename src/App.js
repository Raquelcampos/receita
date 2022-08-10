import React, { Component } from "react";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import Main from "./Components/Main.js";
 import { createGlobalStyle } from "styled-components";

 export const GlobalStyle = createGlobalStyle`

   *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }

 `;

export default class App extends Component {
  render() {
    return (
      <>
       <GlobalStyle /> 
        <Header  menu="ENVIAR SUA RECEITA" menu2="CADASTRE-SE" menu3="ENTRAR"/>
        <Main/>
        <Footer/>
      </>
    );
  }
}
