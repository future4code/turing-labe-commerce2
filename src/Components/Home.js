import React from 'react';
import styled from 'styled-components'

const ContainerHome = styled.div`
display: flex;
flex-direction: column;
height: 100%;
padding: 16px;
margin: 0 8px;
box-sizing: border-box;
flex:1;
`

const HomeHeader = styled.div`
display:flex;
justify-content: space-between;
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
      </ContainerHome>
    );
    }
  }
  
  export default Home;