import React from 'react';
import styled from 'styled-components'

const ContainerFilter = styled.div`
display: flex;
flex-direction: column;
height: 90vh;
border: 1px solid black;
padding: 16px;
box-sizing: border-box;
width: 20%;
`

class Filter extends React.Component {
  state ={
    inputValorMin: '',
    inputValorMax: '',
    inputBusca: ''
  };

  handleInputChangeMin = event =>{
    this.setState({inputValorMin: event.target.value})
  };

  handleInputChangeMax = event =>{
    this.setState({inputValorMax: event.target.value})
  };

  handleInputChangeSearch = event =>{
    this.setState({inputBusca: event.target.value})
  }
  

  render(){
    // console.log(this.state.inputValorMax);
    // console.log(this.state.inputValorMin);
    // console.log(this.state.inputBusca);
    return (
      <ContainerFilter>
        <h1>Filtros:</h1>
        <label>Valor Maximo:</label>
        <input type="number" value={this.state.inputValorMax} onChange={this.handleInputChangeMax}/>
        <label>Valor Mínimo:</label>
        <input type="number" value={this.state.inputValorMin} onChange={this.handleInputChangeMin}/>  
        <label>Buscar produto</label>
        <input type="text" value={this.state.inputBusca} onChange={this.handleInputChangeSearch} />    
      </ContainerFilter>
    );
  }
}
  
export default Filter;