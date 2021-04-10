import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';
ListTodoPage.propTypes = {};

function ListTodoPage(props) {
	const inittodoList = [
		{
			id: 1,
			title: 'Eat',
			status: 'new',
		},
		{
			id: 2,
			title: 'Sleep',
			status: 'completed',
		},
		{
			id: 3,
			title: 'Code',
			status: 'new',
		},
	];
	const location = useLocation();
	const history = useHistory();
	const match = useRouteMatch();
	const [todoList, setTodoList] = useState(inittodoList);
	const [filteredStatus, setFilteredStatus] = useState(() => {
		const params = queryString.parse(location.search);
		return params.status || 'all';
	});

	useEffect(() => {
		const params = queryString.parse(location.search);
		setFilteredStatus(params.status || 'all');
	}, [location.search]);

	const handleTodoClick = (todo, idx) => {
		//clone current array to the new one
		const newTodoList = [...todoList];

		console.log(todo, idx);
		//toggle state
		newTodoList[idx] = {
			...newTodoList[idx],
			status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
		};
		// newTodoList[idx] = newTodo;

		//update todo list

		setTodoList(newTodoList);
	};
	const handleShowAllClick = () => {
		// setFilteredStatus('all')
		const queryParams = { status: 'all' };
		history.push({
			pathname: match.path,
			search: queryString.stringify(queryParams),
		});
	};
	const handleShowCompleted = () => {
		const queryParams = { status: 'completed' };
		history.push({
			pathname: match.path,
			search: queryString.stringify(queryParams),
		});
		// setFilteredStatus('completed');
	};
	const handleShowNewClick = () => {
		const queryParams = { status: 'new' };
		history.push({
			pathname: match.path,
			search: queryString.stringify(queryParams),
		});
		// setFilteredStatus('new');
	};

	const renderedTodoList = todoList.filter((todo) => filteredStatus === 'all' || todo.status === filteredStatus);
	// console.log(renderedTodoList);

	const handleOnSubmit = (values) => {
		console.log('Form submits', values);
	};

	return (
		<div>
			<h3>What to do</h3>
			<TodoForm onSubmit={handleOnSubmit} />
			<h3>Todo List</h3>
			<TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
			<div>
				<button onClick={handleShowAllClick}>Show All</button>
				<button onClick={handleShowCompleted}>Show Completed</button>
				<button onClick={handleShowNewClick}>Show New</button>
			</div>
		</div>
	);
}

export default ListTodoPage;
