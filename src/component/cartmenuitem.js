import React, { Component } from 'react';

class CartMenuItem extends Component
{
	getId = () =>{
		this.props.requiceIdRemove(this.props.item.id);
	};

	render(){
		return(
			<div className='cart__product'>
				<h1>{this.props.item.name}</h1>
				<h2>${this.props.item.price}</h2>
				<div className='cart__delete' onClick={this.getId}>
					<span className="icon icon-bin"></span>
				</div>
			</div>
		);
	}
}

export default CartMenuItem