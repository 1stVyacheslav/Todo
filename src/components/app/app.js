import React, {Component} from 'react';

//Импорт модулей
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

//Импорт css-стилей
import './app.css';

export default class App extends Component {

	maxId =100;

	state = {
		toDoData: [
			{label: 'Drink Coffee', important: false, id: 0},
			{label: 'Make Awesome App', important: true, id: 1},
			{label: 'Have a lunch', important: false, id: 2}
		]
	}

	deleteItem = (id) => {
		this.setState( ({toDoData}) => {

			const index = toDoData.findIndex( (el) => el.id === id )
			
			const newArray = [
				...toDoData.slice(0, index),
				...toDoData.slice(index+1)
			];

			return {toDoData: newArray};
		} )
	};

	addItem = (text) => {
		
		const newItem = {
			label: text,
			important: false,
			id: this.maxId++
		};

		this.setState( ({toDoData}) => {
			const newArray = [...toDoData, newItem];

			return {toDoData: newArray};
		})
	};

	render() {
		return (
			<div className='todo-app'>
				<AppHeader toDo={2} done={1}/>
				<div className='top-panel d-flex'>
					<SearchPanel />
					<ItemStatusFilter />
				</div>
				
				<TodoList todos={ this.state.toDoData } onDeleted={ this.deleteItem } />
				<ItemAddForm onItemAdded={ this.addItem }/>
			</div>
		)
	}
	
};
