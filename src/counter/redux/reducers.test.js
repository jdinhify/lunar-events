import reducer, { initialState } from './reducers'
import {
    COUNTER_DECREMENT,
    COUNTER_INCREMENT
} from './action-types'

describe('counter reducer', () => {
    it('returns the initial state', () => {
        expect(
            reducer(initialState, {})
        ).toEqual(initialState)
    })

    it('increases the counter value', () => {
        expect(
            reducer(initialState, {
                type: COUNTER_INCREMENT
            })
        ).toEqual({value: 1})
    })

    it('decreases the counter value', () => {
        expect(
            reducer(initialState, {
                type: COUNTER_DECREMENT
            })
        ).toEqual({value: -1})
    })
})
