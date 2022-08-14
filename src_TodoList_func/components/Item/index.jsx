import React, { useState } from 'react'

import './index.css'

const Item = props => {
	const [mouse, setMouse] = useState(false)
	const { name, id, done, delTodo, updTodo } = props

	const toggleBg = flag => {
		return () => {
			setMouse(flag)
		}
	}

	const handleDelete = id => {
		return () => {
			delTodo(id)
		}
	}

	const handleCheck = id => {
		return () => {
			updTodo(id)
		}
	}

	return (
		<li
			onMouseOver={toggleBg(true)}
			onMouseLeave={toggleBg(false)}
			style={{ backgroundColor: mouse ? '#ddd' : 'white' }}
		>
			<label>
				<input type="checkbox" checked={done} onChange={handleCheck(id)} />
				<span>{name}</span>
			</label>
			<button
				className="btn btn-danger"
				style={{ display: mouse ? 'block' : 'none' }}
				onClick={handleDelete(id)}
			>
				删除
			</button>
		</li>
	)
}
export default Item
