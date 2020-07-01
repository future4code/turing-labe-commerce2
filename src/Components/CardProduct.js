import React from 'react';
import styled from 'styled-components'


const ContainerCard = styled.div`
    padding: 4px;
`

class CardProduct extends React.Component {
  
  render(){
    
    return (
      <ContainerCard>
        <img src={this.props.url} alt="" width="100%"/>
        <p>{this.props.title}</p>
        <p>USD {this.props.price}</p>
      </ContainerCard>
    );
    }
  }
  
  export default CardProduct;