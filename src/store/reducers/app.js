import * as ActionTypes from '../actions/actionTypes'

let initState = {
    num: 0
}

export default (state = initState, action) => {
    switch(action.type) {
    case ActionTypes.ADD:
        state.num++
        return { ...state }
    case ActionTypes.MINUS:
        state.num--
        return { ...state }
    case ActionTypes.MULTIPLES_ACTION:
        state.num = state.num * state.num
        return { ...state }
    case ActionTypes.DIVIDE_ACTION:
        state.num = state.num / state.num
        return { ...state }
    default:
        return { ...state }
    }
}
