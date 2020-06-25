import React from 'react';
import styled from 'styled-components';

const ContainerFilter = styled.div`
display: flex;
flex-direction: column;
height: 90vh;
border: 1px solid black;
padding: 16px;
box-sizing: border-box;
width: 20%;
`

class Cart extends React.Component {
    
    render(){
    return (
      <ContainerFilter>
        <h1>Carrinho: </h1>
        <p>Total: <b>USD {this.props.total}</b></p>
      </ContainerFilter>
    );
    }
  }
  
  export default Cart;