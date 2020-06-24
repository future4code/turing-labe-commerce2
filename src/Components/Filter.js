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
    render(){
    return (
      <ContainerFilter>
        ola
      </ContainerFilter>
    );
    }
  }
  
  export default Filter;