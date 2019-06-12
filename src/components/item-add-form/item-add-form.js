import React, { Component} from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

	render() {
		return (
			<div className='item-add-form'>
				<button className='btn btn-outline-secondary' onClick={ () => this.props.onItemAdded('Hello World!')}>Add Item</button>
				{/* <input type='text' placeholder='Add item' className='input-control item-add-form-input'/> */}

			</div>
		)
	}
}