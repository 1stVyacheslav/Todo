import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

	state = {

	}

	changeFilter = (e) => {
		// console.log(e.target.className)
		this.props.onChangeFilter(e.target.className)
	}

	render() {
		return (
			<div className='btn-group' onClick={this.changeFilter}>
				<button type='button' className='btn btn-info _all'>All</button>
				<button type='button' className='btn btn-outline-secondary _active'>Active</button>
				<button type='button' className='btn btn-outline-secondary _done'>Done</button>
			</div>
		)
	}
}