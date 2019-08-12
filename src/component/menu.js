import React, { Component } from 'react';
import CartMenuItem from './cartmenuitem.js';
import './../css/menu.scss'

class Menu extends Component
{

	constructor(props){
		super(props);
		this.state = {
			Nav: ['HOME', 'SHOP', 'ABOUT', 'BLOG', 'CONTACT'],
			Cart: [],
			openCart: false,
		}
	};

	componentWillMount(){
	    if(localStorage.getItem('Products') != null){
	      let initialProducts = JSON.parse(localStorage.getItem('Products'));
	      this.setState({Cart: initialProducts})
	    }
   	};

	ToggleNav = () => {
		let menuNav = document.querySelector('.menu__nav');
		menuNav.style.display === 'none' ? menuNav.style.display = 'block' : menuNav.style.display = 'none';
	};

	onMouseEnterCart = () =>{
		this.setState({openCart: true});
	};

	onMouseLeaveCart = () =>{
		this.setState({openCart: false});
	};

	componentWillReceiveProps (nextProp){
		this.setState({Cart: nextProp.item});
  	};

  	receiveIdRemove = (id) =>{
  		this.props.requiceIdRemove(id);
  	};

	render(){
		let total = 0;
		let { Cart } = this.state;
		if(Cart.length !== 0) {Cart.map((item)=>total += parseInt(item.price));}
		let { openCart } = this.state;
		let styleCart;
		if(openCart) styleCart = {display: 'block'}
			else styleCart = {display: 'none'}
		return(
			<div className='menu'>
				<div className='container'>
					<div className='menu__logo'>
						<h1>HUYNHCONGPHATFOODS</h1>
					</div>
					<div className='nav__hambuger' onClick={this.ToggleNav}>
						<div className='nav__line'></div>
						<div className='nav__line'></div>
						<div className='nav__line'></div>
					</div>
					<div className='menu__nav' style={window.innerWidth < 1024 ? {display: 'none'} : {display: 'block'}}>
						<ul>{this.state.Nav.map( (item, index) => 
						<li key={index}><a>{item}</a></li> )}
						<li 
						onMouseEnter={this.onMouseEnterCart}
						onMouseLeave={this.onMouseLeaveCart}
						><span className="icon icon-cart"></span><span>[{this.state.Cart.length}]</span></li>
						</ul>
					</div>
					<div 
					className='cart' 
					onMouseEnter={this.onMouseEnterCart}
					onMouseLeave={this.onMouseLeaveCart}
					style={styleCart}
					>
						<div className='cart__title'>
							<h2>Có <span>{this.state.Cart.length}</span> sản phẩm trong giỏ hàng.</h2>
						</div>
						{this.state.Cart.map((item,index)=> 
							<CartMenuItem 
							item={item} 
							key={index}
							requiceIdRemove={this.receiveIdRemove}
							/>
							)}
						<div className='cart__total'>
							<h2>Tổng tiền: </h2>
							<h3>${total}</h3>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Menu