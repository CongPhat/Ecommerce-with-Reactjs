import React, { Component } from 'react';
import './../css/addtocart.scss';

class AddToCart extends Component
{
  constructor(props){
    super(props);
    this.state = {
      close: false,
    }
  };

  closeAddToCart = () =>{
    this.setState({close: !this.state.close});
  };

  render(){
    let { close } = this.state;
    let style;
    if(close){
      style = {display: 'flex'}
    }
    else style = {display: 'none'}
    return (
      <div className='addtocart' style={style}>
        <h1>Bạn đã thêm thành công sản phẩm <span>{this.props.item}</span> vào giỏ hàng.</h1>
        <div className='addtocart--close' onClick={this.closeAddToCart}>
          <span className='line'></span>
          <span className='line'></span>
        </div>
      </div>
    );
  }
}

export default AddToCart;
