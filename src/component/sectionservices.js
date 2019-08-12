import React, { Component } from 'react';
import './../css/services.scss';

class Services extends Component
{
  render(){
    return (
      <div className='section'>
	  	<div className='container'>
	  		<div className='services'>
	  			<div className='services__item'>
		        	<div className='services__item--color'>
		        		<div className='white-border'></div>
		        		<span className="flaticon-shipped"></span>
		        	</div>
		        	<div className='services__item__intro'>
		        		<h3>FREE SHIPPING</h3>
		        		<span>ON ORDER OVER $100</span>
		        	</div>
	        	</div>
	        <div className='services__item'>
	        	<div className='services__item--color'>
	        		<div className='white-border'></div>
	        		<span className="flaticon-diet"></span>
	        	</div>
	        	<div className='services__item__intro'>
	        		<h3>ALWAYS FRESH</h3>
	        		<span>PRODUCT WELL PACKAGE</span>
	        	</div>
	        </div>
	        <div className='services__item'>
	        	<div className='services__item--color'>
	        		<div className='white-border'></div>
	        		<span className="flaticon-award"></span>
	        	</div>
	        	<div className='services__item__intro'>
	        		<h3>SUPERIOR QUALITY</h3>
	        		<span>QUALITY PRODUCTS</span>
	        	</div>
	        </div>
	        <div className='services__item'>
	        	<div className='services__item--color'>
	        		<div className='white-border'></div>
	        		<span className="flaticon-customer-service"></span>
	        	</div>
	        	<div className='services__item__intro'>
	        		<h3>SUPPORT</h3>
	        		<span>24/7 SUPPORT</span>
	        	</div>
	        </div>  
	  		</div>
	  	</div>
      </div>
    );
  }
}

export default Services;
