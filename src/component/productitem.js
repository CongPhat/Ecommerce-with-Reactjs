import React, { Component } from 'react';

class ProductItem extends Component {

	constructor(){
		super();
		this.state = {
			hover:false,
			open: true
		}
	}

	setImg = () => {
		return {
			backgroundImage: `url(${this.props.product.img})`
		};
	};

	toggleHover = () => {
		this.setState({hover: !this.state.hover})
	};

	addToCart = () => {
		this.props.getProduct(this.props.product.name, this.props.product.price, this.state.open);
	};

	render(){
		let style;
		if(this.state.hover){
			style = {opacity: 1}
		}
		else style = {opacity: 0}
		return(
			<div className='products__item' 
			onMouseEnter={this.toggleHover}
			onMouseLeave={this.toggleHover}
			>
		      	<div className='products__item__img' style={this.setImg()}></div>
		        <div className='products__item__intro'>
		        	<h1>{this.props.product.name}</h1>
		        	<h2>${this.props.product.price}</h2>
		        </div>
		        <div className='products__item__addtocart' 
		        style={window.innerWidth > 1024 ? style : {opacity: 1}}
		        onClick={this.addToCart}
		        >
		        	<span className="icon icon-cart"></span>
		       	</div>
		    </div>	
		);		
	}
}

export default ProductItem