import React,{} from 'react'
import { nanoid } from 'nanoid'

import './index.css'

export default function Header(props) {
	const handleKeyUp = event => {
		const { target, keyCode } = event
		const { addTodo } = props
		if (keyCode !== 13) {
			return
		}
		if (target.value.trim() === '') {
			alert('输入不能为空')
			target.value = ''
			return
		}

		const newTodo = { id: nanoid(), name: target.value, done: false }
		addTodo(newTodo)
		// value 无效，必须 target.value
		target.value = ''
	}
	return (
		<div className="todo-header">
			<input
				onKeyUp={handleKeyUp}
				type="text"
				placeholder="请输入你的任务名称，按回车键确认"
			/>
		</div>
	)
}