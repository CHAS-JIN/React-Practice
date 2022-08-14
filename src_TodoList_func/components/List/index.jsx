import React from 'react'

import Item from '../Item'

import './index.css'

const List = props => {
	const { todos, delTodo, updTodo } = props

	return (
		<div className="todo-main">
			{todos.map(todo => (
				<Item key={todo.id} {...todo} delTodo={delTodo} updTodo={updTodo} />
			))}
		</div>
	)
}
export default List
