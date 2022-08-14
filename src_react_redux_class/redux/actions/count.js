import { INCREMENT, DECREMENT } from '../constant'
export const increment = data => ({ type: INCREMENT, data })
export const decrement = data => ({ type: DECREMENT, data })
export const asyncIncrement = (data, time) => {
	return dispatch => {
		setTimeout(() => {
			dispatch(increment(data))
		}, time)
	}
}
