import React, { Component } from "react";

import Item from "../Item";

import "./index.css";

export default class List extends Component {
	render() {
		const { todos, delTodo, updTodo } = this.props;
		return (
			<div className="todo-main">
				{todos.map((todo) => (
					<Item key={todo.id} {...todo} delTodo={delTodo} updTodo = {updTodo}/>
				))}
			</div>
		);
	}
}
