import React from 'react'

import './index.css'

const Footer = props => {
	const { todos } = props
	const total = todos.length

	const handleDelAllDone = () => {
		const { delAllDone } = props
		delAllDone()
	}

	const handleUpdAll = event => {
		const { target } = event
		const { udpAllTodos } = props
		udpAllTodos(target.checked)
	}

	const Num = todos => {
		let Num = 0
		for (let i = 0; i < todos.length; i++) {
			if (todos[i].done) {
				Num++
			}
		}
		return Num
	}
	const doneNum = Num(todos)

	return (
		<div className="todo-footer">
			<label>
				<input
					type="checkbox"
					checked={total === doneNum && total !== 0 ? true : false}
					onChange={handleUpdAll}
				/>
			</label>
			<span>
				<span>已完成{doneNum}</span> / 全部{total}
			</span>
			<button className="btn btn-danger" onClick={handleDelAllDone}>
				清除已完成任务
			</button>
		</div>
	)
}
export default Footer
