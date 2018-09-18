import { combineReducers } from 'redux'
import CountStore from './Count'

export default combineReducers({
    count: CountStore
})