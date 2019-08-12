import React, { Component } from 'react';
import './../css/carousel.scss'

class Carousel extends Component
{
	constructor(){
		super();
		this.state = {
			CarouselItem: '100% FRESH & ORGANIC FOODS',
		}
	}
  render(){
    return (
      <div className='carousel'>
      	<h1 className='effect-left'>{this.state.CarouselItem}</h1>
      	<h2 className='effect-right'>WE DELIVER ORGANIC VEGESTABLES & FRUITS</h2>
      	<button className='carousel__btn' type='submit'>View Details</button>
      </div>
    );
  }
}

export default Carousel;
