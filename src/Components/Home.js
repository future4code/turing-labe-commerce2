import React from 'react';
import styled from 'styled-components'
import CardProduct from './CardProduct'

const ContainerHome = styled.div`
display: flex;
flex-direction: column;
height: 100%;
padding: 0 16px;
margin: 0 8px;
box-sizing: border-box;
flex:1;
`

const HomeHeader = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
`

const ContainerProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  row-gap: 8px;
  column-gap: 8px;
  margin-top: 8px;
`

class Home extends React.Component {
    render(){
    return (
      <ContainerHome>
        <HomeHeader>
            <span>Quantidade de Produtos: 8</span>
            <select>
                <option value="ordem crescente">Preço: Crescente</option>
                <option value="ordem decrescente">Preço: Decrescente</option>
            </select>
        </HomeHeader>
        <ContainerProdutos>
          <CardProduct 
            url={"https://picsum.photos/200/200?a=1"}
            title={"Foguete Lucas"}
            price={150}
          />
          <CardProduct 
            url={"https://picsum.photos/200/200?a=2"}
            title={"Foguete Jailsom"}
            price={150}
          />
          <CardProduct 
            url={"https://picsum.photos/200/200?a=3"}
            title={"Foguete Diego"}
            price={150}
          />
          <CardProduct 
            url={"https://picsum.photos/200/200?a=4"}
            title={"Foguete Vinicius"}
            price={150}
          />
          <CardProduct 
            url={"https://picsum.photos/200/200?a=5"}
            title={"Foguete Miranda"}
            price={150}
          />
          <CardProduct 
            url={"https://picsum.photos/200/200?a=6"}
            title={"Foguete Nogueira"}
            price={150}
          />
          <CardProduct 
            url={"https://picsum.photos/200/200?a=7"}
            title={"Foguete Miyabara"}
            price={150}
          />
          <CardProduct 
            url={"https://picsum.photos/200/200?a=8"}
            title={"Foguete Fredeanelle"}
            price={150}
          />
        </ContainerProdutos>
      </ContainerHome>
    );
    }
  }
  
  export default Home;