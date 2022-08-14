import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";

import React, { Component } from "react";

export default class App extends Component {
	state = {
		todos: [
			{ id: "001", name: "吃饭", done: true },
			{ id: "002", name: "睡觉", done: true },
			{ id: "003", name: "打代码", done: false },
		],
	};

	// 增加，接收Obj
	addTodo = (todoObj) => {
		const { todos } = this.state;
		this.setState({ todos: [todoObj, ...todos] });
	};

	// 删除，接收id
	delTodo = (todoId) => {
		const { todos } = this.state;
		const newTodos = todos.filter((todo) => {
			return todo.id !== todoId;
		});
		this.setState({ todos: newTodos });
	};

	// 更新，接收id
	updTodo = (todoId) => {
		const { todos } = this.state;
		const newTodos = todos.map((todo) => {
			if (todo.id === todoId) {
				let done = !todo.done;
				return { ...todo, done };
			} else return todo;
		});
		this.setState({ todos: newTodos });
	};

	delAllDone = () => {
		const { todos } = this.state;
		const newTodos = todos.filter((todo) => {
			return todo.done === false;
		});
		this.setState({ todos: newTodos });
	};

	udpAllTodos = (checked) => {
		const { todos } = this.state;
		const newTodos = todos.map((todo) => {
			return { ...todo, done:checked };
		});
		this.setState({ todos: newTodos });
	};

	render() {
		const { todos } = this.state;
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addTodo={this.addTodo} />
					<List todos={todos} delTodo={this.delTodo} updTodo={this.updTodo} />
					<Footer
						todos={todos}
						delAllDone={this.delAllDone}
						udpAllTodos={this.udpAllTodos}
					/>
				</div>
			</div>
		);
	}
}
