import React, { Component } from "react";

import "./index.css";

export default class Footer extends Component {
	handleDelAllDone = () => {
		const { delAllDone } = this.props;
		delAllDone();
	};

	handleUpdAll = (event) => {
		const {target} = event
		const { udpAllTodos } = this.props
		udpAllTodos(target.checked)
	}

	render() {
		const { todos } = this.props;
		const total = todos.length;
		const Num = (todos) => {
			let Num = 0;
			for (let i = 0; i < todos.length; i++) {
				if (todos[i].done) {
					Num++;
				}
			}
			return Num;
		};
		const doneNum = Num(todos);

		return (
			<div className="todo-footer">
				<label>
					<input
						type="checkbox"
						checked={total === doneNum && total !== 0 ? true : false}
						onChange={this.handleUpdAll}
					/>
				</label>
				<span>
					<span>已完成{doneNum}</span> / 全部{total}
				</span>
				<button className="btn btn-danger" onClick={this.handleDelAllDone}>
					清除已完成任务
				</button>
			</div>
		);
	}
}
