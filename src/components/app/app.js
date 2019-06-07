import React from 'react';

//Импорт модулей
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';

//Импорт css-стилей
import './app.css';

const App = () => {

	const toDoData = [
		{label: 'Drink Coffee', important: false, id: 0},
		{label: 'Make Awesome App', important: true, id: 1},
		{label: 'Have a lunch', important: false, id: 2}
	];

	return (
		<div className='todo-app'>
			<AppHeader toDo={2} done={1}/>
			<div className='top-panel d-flex'>
				<SearchPanel />
				<ItemStatusFilter />
			</div>
			
			<TodoList todos={ toDoData }/>
		</div>
	)
};

export default App;