import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

	state = {
		filter: '_all'
	}

	btnClass = (text) => {
		if (this.state.filter === text) {
			return 'btn-info';
		}

		return 'btn-outline-secondary';
	}

	changeFilter = (e) => {

		const obj = e.target,
					trgtClasses = obj.className.split(' ');
		
		this.setState({ filter: trgtClasses[0]});

		this.props.onChangeFilter(trgtClasses[0])
	}

	render() {
		return (
			<div className='btn-group' onClick={this.changeFilter}>
				<button type='button' className={`_all btn ${this.btnClass('_all')}`}>All</button>
				<button type='button' className={`_active btn ${this.btnClass('_active')}`}>Active</button>
				<button type='button' className={`_done btn ${this.btnClass('_done')}`}>Done</button>
			</div>
		)
	}
}