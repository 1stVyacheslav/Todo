//Импорт библиотек
import React from 'react';
import ReactDOM from 'react-dom';

//Импорт модулей
import TodoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';

const App = () => {

	const toDoData = [
		{label: 'Drink Coffee', important: false},
		{label: 'Make Awesome App', important: true},
		{label: 'Have a lunch', important: false}
	];

	return (
		<div>
			<AppHeader />
			<SearchPanel />
			<TodoList todos={ toDoData }/>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));