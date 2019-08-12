import React, { Component } from 'react';
import ProductItem from './productitem';
import './../css/product.scss';

class Products extends Component
{
  getProduct =(item, price, status)=>{
    this.props.getProduct(item, price, status);
  };

  render(){
    const { item } = this.props;
    return (
      <div className='section'>
        <div className='container'>
          <div className='products'>
            <div className='products__title'>
              <h3>Featured Products</h3>
              <h2>Our Products</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
            {item.map( (product, index) => <ProductItem 
              getProduct={this.getProduct}
              product={product} 
              key={index}/> )}
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
