import * as actionType from '../action/ActionType'

const Count = (state = 0, action) => {
    switch(action.type) {
        case actionType.ADD:
            return state + 1
        case actionType.REDUCE:
            return state - 1
        default:
            return state
    }
}

export default Count