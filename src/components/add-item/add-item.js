import React from 'react';

import './add-item.css'

const AddItem = () => {
	return (
		<form className='add-item form-inline'>
			<div className='input-group-sm'>
				<input type='text' className='add-item-input form-control' placeholder='Add Item' />
				<div className='input-group-append'>
					<button type='button' className='btn btn-primary btn-sm'>Add Item</button>					
				</div>
			</div>

		</form>
		
	)
};

export default AddItem;