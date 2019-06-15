import React from 'react';

import './search-panel.css'

const SearchPanel = ( {term, onSearchChange} ) => {

		return (
		<input type='text'
					 className='form-control search-input'	placeholder = 'search' 
					 value={term}
					 onChange={ (e) => onSearchChange(e.target.value)}/>
	);
};

export default SearchPanel;
