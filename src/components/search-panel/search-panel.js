import React from 'react';

import './search-panel.css'

const SearchPanel = ({ searchString, onChangeSearch }) => {
	return (
		<input 
						type='text' 
						className='form-control search-input'	
						placeholder = 'search'
						onChange={ (e) => onChangeSearch(e.target.value) }
						value={searchString}
		/>
	);
};

export default SearchPanel;