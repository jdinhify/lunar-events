import { handleActions } from 'redux-actions'

import {
    EVENT_DETAIL_UPDATE,
    EVENT_DETAIL_CLEAR
} from '..'
import eventDetailUpdateReducer from './event-detail-update'
import eventDetailClearReducer from './event-detail-clear'

export const initialState = {
    description: '',
    lunarDay: '',
    lunarMonth: ''
}

export const newEventReducer = handleActions({
    [EVENT_DETAIL_UPDATE]: eventDetailUpdateReducer,
    [EVENT_DETAIL_CLEAR]: eventDetailClearReducer(initialState)
}, initialState)

export default newEventReducer
