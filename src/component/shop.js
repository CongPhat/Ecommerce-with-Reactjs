import React, { Component } from 'react';
import './../css/shop.scss';

class Shop extends Component
{
  render(){
    return (
      <div className='section'>
      	<div className='container'>
      		<div className='shop'>
      			<div className='shop__intro'>
      				<h1>Vegetables</h1>
      				<p>Protect the health of every home</p>
      				<button type='button'>Shop Now</button>
      			</div>
      			<div className='shop__item'>
      				<div className='shop__item__name'>
      					<h2>Fruits</h2>
      				</div>
      			</div>
      			<div className='shop__item'>
      				<div className='shop__item__name'>
      					<h2>Vegetables</h2>
      				</div>
      			</div>
      			<div className='shop__item'>
      				<div className='shop__item__name'>
      					<h2>Juices</h2>
      				</div>
      			</div>
      			<div className='shop__item'>
      				<div className='shop__item__name'>
      					<h2>Dried</h2>
      				</div>
      			</div>
      		</div>
      	</div>
      </div>
    );
  }
}

export default Shop;
