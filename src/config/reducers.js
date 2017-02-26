import { combineReducers } from 'redux'

import eventReducer from 'event/redux/reducers'
import newEventReducer from 'event/new-event/redux/reducers'
import apolloClient from './apollo'

const reducers = combineReducers({
  apollo: apolloClient.reducer(),
  event: eventReducer,
  newEvent: newEventReducer
})

export default reducers
