import React, { Component } from 'react';

import './add-item.css'

export default class AddItem extends Component {

	
	
	render() {

		const { onAdded } = this.props;

		return (
		
			<div className='add-item d-flex'>
				<input type='text' className='add-item-input form-control' placeholder='Add Item' />
				<button type='button' className='btn btn-primary' onClick={ onAdded }>Add Item</button>				
			</div>		
		)
	}
	

};
