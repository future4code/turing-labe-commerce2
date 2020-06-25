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

const listProducts = [
  {
    id: 1,
    title: 'Foguete Lucas',
    price: 50,
    url: 'https://picsum.photos/200/200?a=1',
  },
  {
    id: 2,
    title: 'Foguete Jailsom',
    price: 60,
    url: 'https://picsum.photos/200/200?a=2',
  },
  {
    id: 3,
    title: 'Foguete Diego',
    price: 70,
    url: 'https://picsum.photos/200/200?a=3',
  },
  {
    id: 4,
    title: 'Foguete Vinicius',
    price: 80,
    url: 'https://picsum.photos/200/200?a=4',
  },
  {
    id: 5,
    title: 'Foguete Miranda',
    price: 40,
    url: 'https://picsum.photos/200/200?a=5',
  },
  {
    id: 6,
    title: 'Foguete Nogueira',
    price: 30,
    url: 'https://picsum.photos/200/200?a=6',
  },
  {
    id: 7,
    title: 'Foguete Miyabara',
    price: 20,
    url: 'https://picsum.photos/200/200?a=7',
  },
  {
    id: 8,
    title: 'Foguete Fredeanelle',
    price: 10,
    url: 'https://picsum.photos/200/200?a=8',
  },
  
]

class Home extends React.Component {
    state = {
      products: listProducts
    }
    render(){
      console.log(this.state.products);
    return (
      <ContainerHome>
        <HomeHeader>
    <span>Quantidade de Produtos: {this.state.products.length}</span>
            <select>
                <option value="ordem crescente">Preço: Crescente</option>
                <option value="ordem decrescente">Preço: Decrescente</option>
            </select>
        </HomeHeader>
        <ContainerProdutos>
              {this.state.products.map((product, index) => {
                return (
                  <CardProduct 
                    title={product.title}
                    price={product.price}
                    url={product.url}
                  />
                )
              })}
        </ContainerProdutos>
      </ContainerHome>
    );
    }
  }
  
  export default Home;