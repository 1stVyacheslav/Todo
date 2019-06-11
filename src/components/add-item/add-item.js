import React from 'react';

import './add-item.css'

const AddItem = () => {
	return (
		
			<div className='add-item d-flex'>
				<input type='text' className='add-item-input form-control' placeholder='Add Item' />
				<button type='button' className='btn btn-primary'>Add Item</button>				
			</div>

		
		
	)
};

export default AddItem;