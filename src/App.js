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

class App extends React.Component {
  render(){
  return (
    <ContainerPai>
      <Filter />
      <Home />
      <Cart />
    </ContainerPai>
  );
  }
}

export default App;
