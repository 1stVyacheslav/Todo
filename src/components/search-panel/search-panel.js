import React from 'react';

import './search-panel.css'

const SearchPanel = ({ onChangeSearch }) => {
	return (
		<input 
						type='text' 
						className='form-control search-input'	
						placeholder = 'search'
						onChange={ (e) => onChangeSearch(e.target.value) }
		/>
	);
};

export default SearchPanel;