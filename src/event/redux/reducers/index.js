import { handleActions } from 'redux-actions'

import { EVENT_YEAR_UPDATE } from '../action-types'
import eventYearUpdateReducer from './event-year-update'

export const initialState = {
  year: new Date().getFullYear()
}

const eventReducer = handleActions({
  [EVENT_YEAR_UPDATE]: eventYearUpdateReducer
}, initialState)

export default eventReducer
