import { combineReducers } from 'redux'

import counterReducer from 'counter/redux/reducers'

const reducers = combineReducers({
    counter: counterReducer
})

export default reducers
