import React, { Component} from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

	state = {
		label: ''
	}

	onLabelChange = (e) => {
		this.setState({
			label: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onItemAdded(this.state.label);
		document.querySelector('.item-add-form input').value = '';
	}

	render() {
		return (
			<form className='item-add-form d-flex' onSubmit={this.onSubmit}>
				<input type='text' placeholder='What needs to be done' className='form-control mr-3' onChange={this.onLabelChange}/>
				<button className='btn btn-outline-secondary' >Add Item</button>

			</form>
		)
	}
}