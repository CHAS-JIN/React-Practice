import { Navigate } from 'react-router-dom'

import About from '../components/About'
import Home from '../components/Home'
import News from '../components/News'
import Detail from '../components/Detail'
import Message from '../components/Message'

const routes = [
	{
		path: '/about',
		element: <About />,
	},
	{
		path: '/home/*',
		element: <Home />,
		children: [
			{
				path: 'news',
				element: <News />,
			},
			{
				path: 'message/*',
				element: <Message />,
				children: [
					{
						// params传参
						// path: 'detail/:id/:title/:content',
						path: 'detail',
						element: <Detail />,
					},
				],
			},
		],
	},
	{
		path: '/',
		element: <Navigate to="/about" />,
	},
]

export default routes
