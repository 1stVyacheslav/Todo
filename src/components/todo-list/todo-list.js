import React from 'react';

import TodoListItem from '../todo-list-item';

import './todo-list.css';

const TodoList = ({todos, onDeleted, onToggleImportant, onToggleDone}) => {
	const elements = todos.map( (item) => {
		const { id, hidden, ...itemProps } = item;
		let classNames = 'list-group-item'
		if (hidden) {
			classNames += ' d-none';
		}
		return (
		<li className={classNames} key={id}>
			<TodoListItem 
				{...itemProps} 
				onDeleted={ () => onDeleted(id) }
				onToggleImportant={ () => onToggleImportant(id) }
				onToggleDone={ () => onToggleDone(id) }
			/>
		</li>
		)
});

	return (
		<ul className='list-group todo-list'> 
			{ elements }
		</ul>
)};

export default TodoList;