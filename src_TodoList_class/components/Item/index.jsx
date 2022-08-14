import React, { Component } from "react";

import "./index.css";

export default class Item extends Component {
	state = { mouse: false };

	toggleBg = (flag) => {
		return () => {
			this.setState({ mouse: flag });
		};
	};

	handleDelete = (id) => {
		const { delTodo } = this.props;
		return () => {
			delTodo(id);
		};
	};

	handleCheck = (id) => {
		const { updTodo } = this.props;
		return () => {
			updTodo(id);
		};
	};

	render() {
		const { name, id, done } = this.props;
		let { mouse } = this.state;
		return (
			<li
				onMouseOver={this.toggleBg(true)}
				onMouseLeave={this.toggleBg(false)}
				style={{ backgroundColor: mouse ? "#ddd" : "white" }}
			>
				<label>
					<input
						type="checkbox"
						checked={done}
						onChange={this.handleCheck(id)}
					/>
					<span>{name}</span>
				</label>
				<button
					className="btn btn-danger"
					style={{ display: mouse ? "block" : "none" }}
					onClick={this.handleDelete(id)}
				>
					删除
				</button>
			</li>
		);
	}
}
