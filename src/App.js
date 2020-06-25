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

class App extends React.Component {
  state ={
    cart: false,
    inputValorMin: '',
    inputValorMax: ''  
  }
  
  onClickCart = () => {
    this.setState({cart: !this.state.cart})
  }

  
  render(){
    const renderiza = () => {
      if(this.state.cart){
        return (
          <Cart />
        )
      }
    }
    return (
      <ContainerPai>
        <Filter  
        
        />
        <Home />
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
