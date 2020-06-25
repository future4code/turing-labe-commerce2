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
const ContainerCard = styled.div`
    border: 1px dashed orange;
    padding: 4px;

    > button {
    z-index: 1;
    position: relative;
    font-size: inherit;
    font-family: inherit;
    color: white;
    padding: 0.5em 1em;
    outline: none;
    border: none;
    background-color: hsl(236, 32%, 26%);
    overflow: hidden;
    transition: color 0.4s ease-in-out;
    width: 100%;
}
    > button::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: #3cefff;
    transform-origin: center;
    transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
    transition: transform 0.45s ease-in-out;
}

> button:hover {
  cursor: pointer;
  color: #161616;
}   
  > button:hover::before {
  transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
}
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
            <span>Quantidade de Produtos: {this.props.productsLenght}</span>
            <select>
                <option value="ordem crescente">Preço: Crescente</option>
                <option value="ordem decrescente">Preço: Decrescente</option>
            </select>
        </HomeHeader>
        <ContainerProdutos>
              {this.props.products.map((product, index) => {
                return (
                  <ContainerCard>
                    <CardProduct 
                      key={index}
                      title={product.title}
                      price={product.price}
                      url={product.url}
                    />
                    <button onClick={() => this.props.onClickAddProduct(product.id)}>Adicionar ao carrinho</button>
                  </ContainerCard>
                )
                })
              }
        </ContainerProdutos>
      </ContainerHome>
    );
    }
  }
  
  export default Home;