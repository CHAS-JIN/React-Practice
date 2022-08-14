import React, { useState } from 'react'
import './App.css'

import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'

const App = () => {
	const [todos, setTodos] = useState([
		{ id: '001', name: '吃饭', done: true },
		{ id: '002', name: '睡觉', done: true },
		{ id: '003', name: '打代码', done: false },
	])

	const addTodo = todoObj => {
		setTodos([todoObj, ...todos])
	}
	const delTodo = todoId => {
		const newTodos = todos.filter(todo => {
			return todo.id !== todoId
		})
		setTodos(newTodos)
	}
	const updTodo = todoId => {
		const newTodos = todos.map(todo => {
			if (todo.id === todoId) {
				let done = !todo.done
				return { ...todo, done }
			} else return todo
		})
		setTodos(newTodos)
	}
	const delAllDone = () => {
		const newTodos = todos.filter(todo => {
			return todo.done === false
		})
		setTodos(newTodos)
	}
	const udpAllTodos = checked => {
		const newTodos = todos.map(todo => {
			return { ...todo, done: checked }
		})
		setTodos(newTodos)
	}

	return (
		<div className="todo-container">
			<div className="todo-wrap">
				<Header addTodo={addTodo} />
				<List todos={todos} delTodo={delTodo} updTodo={updTodo} />
				<Footer
					todos={todos}
					delAllDone={delAllDone}
					udpAllTodos={udpAllTodos}
				/>
			</div>
		</div>
	)
}

export default App