import React,{Fragment} from 'react'
import {NavLink,Outlet} from 'react-router-dom';

export default function Home() {
	return (
		<Fragment>
			<ul className="nav nav-tabs">
				<li>
					<NavLink className="list-group-item" replace to="news">
						News
					</NavLink>
				</li>
				<li>
					<NavLink className="list-group-item" to="message">
						Message
					</NavLink>
				</li>
			</ul>
			{/* <Routes>
				<Route path="news" element={<News />} />
				<Route path="message/*" element={<Message />} />
			</Routes> */}
			<Outlet />
		</Fragment>
	)
}
