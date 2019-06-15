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

	maxId = 100;

	createTodoItem = (label) => {
		return {
			label: label,
			important: false,
			done: false,
			id: this.maxId++

		}
	};

	state = {
		toDoData: [
			this.createTodoItem('Drink Coffee'),
			this.createTodoItem('Make Awesome App'),
			this.createTodoItem('Have a lunch')
		],
		term: '',
		filter: 'all'
	};


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
		
		const newItem = this.createTodoItem(text);

		this.setState( ({toDoData}) => {
			const newArray = [...toDoData, newItem];

			return {toDoData: newArray};
		})
	};

	toggleProperty(arr, id, propName) {

		// update item
		const index = arr.findIndex( (el) => el.id === id ),
					oldItem = arr[index],
					newItem = {...oldItem, [propName]: !oldItem[propName]};

		// constract new array
		const newArray = [
			...arr.slice(0, index),
			newItem,
			...arr.slice(index+1)
		];

		return newArray;
}

	onToggleImportant = (id) => {
		this.setState( ({toDoData}) => {
			return {
				toDoData: this.toggleProperty(toDoData, id, 'important')
			}
		} )
	};

	onToggleDone = (id) => {
		this.setState( ({toDoData}) => {
			return {
				toDoData: this.toggleProperty(toDoData, id, 'done')
			}
		} )
	};

	search(items, text) {
		if (text.length === 0) {
			return items;
		} 

		return items.filter( (item) => {
			return item.label
				.toLowerCase()
				.indexOf(text.toLowerCase()) > -1;
		})
	}

	onSearchChange = (term) => {
		this.setState({ term });
	}

	onFilterChange = (filter) => {
		this.setState({ filter });
	}

	filter(items, filter) {
		switch(filter) {
			case 'active':
				return items.filter( (item) => !item.done);
			case 'done':
				return items.filter( (items) => items.done);
			default:
						return items;
		}
	}

	render() {

		const { toDoData, term, filter } = this.state,
					doneCount = toDoData
													.filter( (el) => el.done )
													.length,
					toDoCount = toDoData.length - doneCount,
					visibleItems = this.filter( this.search(toDoData, term), filter );

		return (
			<div className='todo-app'>
				<AppHeader toDo={toDoCount} done={doneCount}/>
				<div className='top-panel d-flex'>
					<SearchPanel onSearchChange={this.onSearchChange}/>
					<ItemStatusFilter 
							filter={filter}
							onFilterChange={this.onFilterChange}
					/>
				</div>
				
				<TodoList 
					todos={ visibleItems }
					onDeleted={ this.deleteItem }
					onToggleImportant={this.onToggleImportant}
					onToggleDone={this.onToggleDone}
					/>
				<ItemAddForm onItemAdded={ this.addItem }/>
			</div>
		)
	}
	
};
