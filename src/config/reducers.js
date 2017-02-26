import { combineReducers } from 'redux'

import counterReducer from 'counter/redux/reducers'
import eventReducer from 'event/redux/reducers'
import apolloClient from './apollo'

const reducers = combineReducers({
  apollo: apolloClient.reducer(),
  counter: counterReducer,
  event: eventReducer
})

export default reducers
