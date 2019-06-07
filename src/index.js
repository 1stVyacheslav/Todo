//Импорт библиотек
import React from 'react';
import ReactDOM from 'react-dom';

//Импорт модулей
import TodoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import ItemStatusFilter from './components/item-status-filter';

//Импорт css-стилей
import './index.css'

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
}

ReactDOM.render(<App />, document.getElementById('root'));