import React from "react";
import Cuscuz from './img/cuscuz.png'
import styled from 'styled-components'
export const Div= styled.div`
display: flex;
flex-direction: column;
align-items: center;
h2{
  margin:5% 0% 2% 0% ;
}
`
export const Title= styled.h1`
text-align:center;
`
export const Img= styled.img`
margin:0 auto;
width:50%;
`
export const Ol = styled.ol`
font-size:1.5rem;
width:50%;
`
export const Ul = styled.ul`
font-size:1.5rem;
width:50%;
`

export default function Main() {
  return (
   <Div>
    <Title>RECEITA DE CUSCUZ DE MILHO</Title>
   <Img src={Cuscuz} alt="Cuscuz" />
    <h2>INGREDIENTES</h2>
    <Ul>
      <li>300 g de farinha de milho</li>
      <li>1/2 colher (chá) de sal</li>
      <li>1 copo (americano) de água</li>
      <li>2 colheres (sopa) de manteiga</li>
    </Ul>
    <h2>MODO DE PREPARO</h2>
    <Ol>
      <li>Misture farinha de milho e sal.</li>
      <li>Adicione água aos poucos, sempre mexendo com uma colher para distribuir bem o líquido, e deixe hidratar por 10 minutos. </li>
      <li>Preencha o fundo de uma cuscuzeira com água e coloque o cesto de vapor. </li>
      <li>Bote a farinha de milho já hidratada no cesto, tomando cuidado para não compactar. Cozinhe em fogo alto.</li>
      <li>Quando sair um leve vapor pela lateral da tampa, baixe o fogo e deixe cozinhar por mais 10 minutos até o cuscuz ficar bem macio. </li>
      <li>Desenforme o cuscuz, transfira para uma tigela e desfaça em pedaços com um garfo.</li>
      <li>Em uma tigela, misture a manteiga com um pouco da água fervente da cuscuzeira. </li>
      <li>Mexa com uma colher até derreter pelo menos a metade da manteiga.</li>
      <li>Regue o cuscuz com a mistura de água e manteiga, misture com o garfo e sirva.</li>
    </Ol>
   </Div>
  );
}