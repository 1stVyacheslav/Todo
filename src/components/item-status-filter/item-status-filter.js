import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

	state = {

	}

	changeFilter = (e) => {

		const obj = e.target,
					trgtClass = obj.className.split(' ')[0];

		this.props.onChangeFilter(trgtClass)
	}

	render() {
		return (
			<div className='btn-group' onClick={this.changeFilter}>
				<button type='button' className='_all btn btn-info'>All</button>
				<button type='button' className='_active btn btn-outline-secondary'>Active</button>
				<button type='button' className='_done btn btn-outline-secondary'>Done</button>
			</div>
		)
	}
}