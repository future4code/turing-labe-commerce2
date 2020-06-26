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

const CartItem = styled.p`
margin: 2px;
border-bottom: 1px dashed black;
padding-bottom: 4px;
`

const Limpar = styled.button`
background-color: blue;
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
    ordemProducts:'crescente',
    products: listProducts,
    title: '',
    selectedProduct: [
      {
        id: ''
      }
    ] //só produtos selecionados pelo usuário
  }
  
  onClickCart = () => {
    this.setState({cart: !this.state.cart})
  }



  deletarMensagem = mensagemParaDeletar => {
    const novaListaDeMensagem = this.state.arrayMensagem.filter(item => {
        return item.mensagem !== mensagemParaDeletar;
    });

    this.setState({
        arrayMensagem: novaListaDeMensagem
    });

  };

  onClickAddProduct = (id) => {
    const preco = this.state.products.filter((product) =>{//lista de produtos
      if(id === product.id){ 
        this.setState({somaTotal: this.state.somaTotal + product.price})
        const newTitle = { //guardando o titulo em um objeto
          id: product.id,
          title: product.title,    //titulo no elemento do objeto
          timesInCart: 1
        }
        const itensCarrinho = this.state.selectedProduct.filter((product) =>{//só produtos selecionados pelo usuário
          if(id === product.id){
            newTitle.timesInCart += 1
          }
        })
          const newProductsArray = [newTitle, ...this.state.selectedProduct]  //novo array que recebe o novo objeto     
          this.setState({selectedProduct: newProductsArray}) //add ao nosso antigo array                  
        return this.state.somaTotal         
      }
    })
  }


  onClickClear = (id) => {
    const limpezaProfunda = this.state.selectedProduct.filter(item => {//passa em todos os produtos do carrinho
      return item.id !== id;
    });
    this.setState({selectedProduct: limpezaProfunda});//pega o array vazio e atribui a lista de produtos do carrinho
  };

  onChangeOrdemProdutos = (event) => {
    this.setState({ordemProducts: event.target.value})
    switch (this.state.ordemProducts){  
      case 'crescente':
        return this.setState({products: this.state.products.sort(function(a, b){
          return b.price - a.price
        })})
      case 'decrescente':
        return this.setState({products: this.state.products.sort(function(a, b){
          return a.price - b.price
        })})
      default:
        return this.setState({products: this.state.products})
    }
  }

  render(){
    const renderiza = () => {

    if(this.state.cart){
      return (
        <Cart 
          total = {this.state.somaTotal}

          selectedProduct = {this.state.selectedProduct.map((produto, index) => { //envia o titulo no estado             
            if(produto.id !== ''){
              return <CartItem key={index}>
              <strong>{produto.timesInCart}x </strong> 
              <strong>{produto.title} </strong>
              <Limpar onClick={() => this.onClickClear(produto.id)}>X</Limpar>
            </CartItem>
            }
          })}
        />
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
        onChangeOrdemProdutos={this.onChangeOrdemProdutos}
        ordemProducts={this.state.ordemProducts}

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
