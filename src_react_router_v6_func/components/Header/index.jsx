import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
	const navigate = useNavigate()

	const back = () => {
		navigate(-1)
	}
	const forward = () => {
		navigate(1)
	}
	const toDetail_1 = () => {
		navigate('/home/message/detail', {
			replace: true,
			state: { id: '001', title: '消息1', content: '锄禾日当午' },
		})
	}

	return (
		<div className="col-xs-offset-2 col-xs-8">
			<div className="page-header">
				<h2>React Router Demo</h2>
				<button onClick={back}>←后退</button>
				<button onClick={forward}>前进→</button>
				<button onClick={toDetail_1}>去到消息1</button>
			</div>
		</div>
	)
}

export default Header
