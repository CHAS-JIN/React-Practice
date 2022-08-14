import React from 'react'
import {useLocation} from "react-router-dom";


export default function Detail() {
	// params传参
	// const {id,title,content} = useParams()

	// search传参
	// const [search]=useSearchParams()
	// const id = search.get('id')
	// const title = search.get('title')
	// const content = search.get('content')

	const {state:{id,title,content}} = useLocation()
	return (
		<ul>
			<li>消息编号：{id}</li>
			<li>消息标题：{title}</li>
			<li>消息内容：{content}</li>
		</ul>
	)
}
