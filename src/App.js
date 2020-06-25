import React from 'react';
import styled from 'styled-components'
import Home from './Components/Home'
import Filter from './Components/Filter'
import Cart from './Components/Cart'

const ContainerPai = styled.div`
display: flex;
box-sizing: border-box;
padding: 8px;
`;

const ButtonCart = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 80px;
    height: 80px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 5px;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.5s ease 0s;
`

const ButtonImage = styled.img`
width: 90%;
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

class App extends React.Component {
  state ={
    cart: false,
    inputValorMin: '',
    inputValorMax: '' ,
    somaTotal: 0,
    products: listProducts
  }
  
  onClickCart = () => {
    this.setState({cart: !this.state.cart})
  }

  onClickAddProduct = () => {
    const totalValue = this.state.products.price;
    this.setState({somaTotal: totalValue})
    console.log(this.state.products.price)
  }
  
  render(){
    const renderiza = () => {
      if(this.state.cart){
        return (
          <Cart total = {this.state.somaTotal}/>
        )
      }
    }

    return (
      <ContainerPai>
        <Filter  
        
        />
        <Home 
        products={this.state.products}
        productsLenght={this.state.products.length}
        onClickAddProduct={this.onClickAddProduct}
        />
        {renderiza()}
          <ButtonCart onClick={this.onClickCart}>
            <ButtonImage 
              src="https://w7.pngwing.com/pngs/785/236/png-transparent-fire-and-shopping-cart-illustration-shopping-cart-icon-flame-shopping-cart-icon-text-camera-icon-logo.png"
              alt="carrinho-de-compra" />
          </ButtonCart>
      </ContainerPai>
      
    );
  }
}

export default App;
