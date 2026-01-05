import {combineReducers, createStore} from 'redux'
import countReducer from './Reducer'
import colorReducer from './ColorReducer'

const reducer = combineReducers({
    count: countReducer,
    color: colorReducer
})
let store = createStore(reducer)

export default store