import { handleActions } from 'redux-actions'

import {
    COUNTER_DECREMENT,
    COUNTER_INCREMENT
} from '../action-types'
import counterDecrementReducer from './counter-decrement'
import counterIncrementReducer from './counter-increment'

export const initialState = {
    value: 0
}

export const counterReducer =  handleActions({
    [COUNTER_DECREMENT]: counterDecrementReducer,
    [COUNTER_INCREMENT]: counterIncrementReducer
}, initialState)

export default counterReducer
