import { connect } from 'react-redux'
import React, { Component } from 'react'

import { decrement, increment, asyncIncrement } from '../../redux/actions/count'
import { INCREMENT, DECREMENT, ASYNCINCREMENT } from '../../redux/constant'

class Count extends Component {
	increment = () => {
		const { value } = this.selectNumber
		// store.dispatch(creatIncrementAction(value * 1));
		this.props[INCREMENT](value * 1)
	}

	decrement = () => {
		const { value } = this.selectNumber
		// store.dispatch(creatDecrementAction(value * 1));
		this.props[DECREMENT](value * 1)
	}

	incrementIfOdd = () => {
		const { value } = this.selectNumber
		if (this.props.count % 2 !== 0) {
			// store.dispatch(creatIncrementAction(value * 1));
			this.props[INCREMENT](value * 1)
		}
	}

	incrementAsync = () => {
		const { value } = this.selectNumber
		// setTimeout(() => {
		// store.dispatch(creatIncrementAsyncAction(value * 1,500));
		// }, 500);
		this.props[ASYNCINCREMENT](value * 1, 500)
	}

	render() {
		return (
			<div>
				<h1>当前为Count组件，Person组件中人数为{this.props.personCount}</h1>
				<h4>
					当前求和为：{this.props.count}
					{/*{store.getState()}*/}
				</h4>
				<select ref={c => (this.selectNumber = c)}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>
				&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
				&nbsp;
				<button onClick={this.incrementAsync}>异步加</button>&nbsp;
			</div>
		)
	}
}

export default connect(
	state => ({ 
		count: state.count,
		personCount: state.person.length
	}),
	{
		increment,
		decrement,
		asyncIncrement,
	}
)(Count)

//# function mapStateToProps(state) {
// 	return { count: state }
// }
// function mapDidpatchToProps(dispatch) {
// 	return {
// 		[INCREMENT]: number => dispatch(creatIncrementAction(number)),
// 		[DECREMENT]: number => dispatch(creatDecrementAction(number)),
// 		[ASYNCINCREMENT]: (number, time) =>
// 			dispatch(creatIncrementAsyncAction(number, time)),
// 	}
// }

//# export default connect(mapStateToProps, mapDidpatchToProps)(CountUI)
