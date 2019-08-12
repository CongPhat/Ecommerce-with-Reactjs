import React, { Component } from 'react';
import Menu from './component/menu';
import Carousel from './component/carousel';
import Services from './component/sectionservices';
import Shop from './component/shop';
import Products from './component/productlist';
import AddToCart from './component/addtocart';
import './App.css';

class App extends Component
{
  constructor(){
    super();
    this.state = {
      productList: [
        {name: 'BELL PEPPER', price: '120', img: './images/product-1.jpg'},
        {name: 'STRAWBERRY', price: '115', img: './../images/product-2.jpg'},
        {name: 'GREEN BEANS', price: '112', img: './../images/product-3.jpg'},
        {name: 'PURPLE CABBAGE', price: '105', img: './../images/product-4.jpg'},
        {name: 'TOMATOE', price: '180', img: './../images/product-5.jpg'},
        {name: 'BROCOLLI', price: '80', img: './../images/product-6.jpg'},
        {name: 'CARROTS', price: '123', img: './../images/product-7.jpg'},
        {name: 'FRUIT JUICE', price: '92', img: './../images/product-8.jpg'}
      ],
      itemInBasket: [],
    }
  }

   componentWillMount(){
    if(localStorage.getItem('Products') != null){
      let initialProducts = JSON.parse(localStorage.getItem('Products'));
      this.setState({itemInBasket: initialProducts})
    }
   };

  getProduct =(item, price, status)=>{
    let itemInBasket = this.state.itemInBasket;
    let idProducts = Math.random()*0x1000000;
    idProducts = idProducts.toFixed(0);
    let product = {id: idProducts, name: item, price};
    itemInBasket = [...itemInBasket, product];
    this.setState({itemInBasket});
    setTimeout(()=>{
      localStorage.setItem('Products', JSON.stringify(this.state.itemInBasket));
    },1000);
  };

  receiveIdRemove = (id) =>{
    let { itemInBasket } = this.state;
    itemInBasket.forEach( (item, index) => {if(item.id === id){itemInBasket.splice(index, 1)}});
    this.setState({itemInBasket});
     setTimeout( () => {
        localStorage.setItem('Products', JSON.stringify(this.state.itemInBasket));
      },1000);
  };

  render(){
    return (
      <div className='App'>
        <Menu item={this.state.itemInBasket} requiceIdRemove={this.receiveIdRemove}/>
        <Carousel />
        <Services />
        <Shop />
        <Products item={this.state.productList} getProduct={this.getProduct}/>
        <AddToCart item={this.state.productAddToCart} status={this.state.openAddToCart}/>
      </div>
    );
  }
}

export default App;
