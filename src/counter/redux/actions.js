import { createAction } from 'redux-actions'

import {
    COUNTER_DECREMENT,
    COUNTER_INCREMENT
} from './action-types'


export const counterIncrement = createAction(COUNTER_INCREMENT)
export const counterDecrement = createAction(COUNTER_DECREMENT)
