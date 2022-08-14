import React, { Fragment } from 'react'
import { NavLink,useRoutes } from 'react-router-dom'

import Header from './components/Header'
import routes from "./routes";


export default function App() {
	const elements = useRoutes(routes)
	return (
		<Fragment>
			<div className="row">
				<Header />
			</div>
			<div className="row">
				<div className="col-xs-2 col-xs-offset-2">
					<div className="list-group">
						{/* 路由链接 */}
						<NavLink className="list-group-item" to="/about">
							About
						</NavLink>
						<NavLink className="list-group-item" to="/home">
							Home
						</NavLink>
					</div>
				</div>
				<div className="col-xs-6">
					<div className="panel">
						<div className="panel-body">
							{/* 注册路由 */}
							{elements}
							{/* <Routes>
								<Route path="/about" element={<About />} />
								<Route path="/home/*" element={<Home />} />
								<Route path="/" element={<Navigate to="about" />} />
							</Routes> */}
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}
