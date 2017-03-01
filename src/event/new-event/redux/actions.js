import { createAction } from 'redux-actions'
import {
    EVENT_DETAIL_UPDATE,
    EVENT_DETAIL_CLEAR
} from './action-types'

export const updateEventDetail = ({ name, value }) => ({
    type: EVENT_DETAIL_UPDATE,
    name,
    value
})

export const clearEventDetail = createAction(EVENT_DETAIL_CLEAR)
