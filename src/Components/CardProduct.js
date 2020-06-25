import React from 'react';
import styled from 'styled-components'
import Cart from './Cart'


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

class CardProduct extends React.Component {
  state={
    total:0,
  }

  onClickAddProduct = () => {
    this.setState({ total: this.props.price });
    
    return (
      <Cart total={this.state.total}/>
    )
  }

    render(){
      console.log(this.state.total)
    return (
      <ContainerCard>
        <img src={this.props.url} alt="" width="100%"/>
        <p>{this.props.title}</p>
        <p>USD {this.props.price}</p>
        <button onClick={this.onClickAddProduct}>Adicionar ao carrinho</button>
      </ContainerCard>
    );
    }
  }
  
  export default CardProduct;