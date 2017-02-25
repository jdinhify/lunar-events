import {
    counterIncrement,
    counterDecrement
} from './actions'
import {
    COUNTER_DECREMENT,
    COUNTER_INCREMENT
} from './action-types'

describe('counter actions', () => {
    it('create an action to increase counter value', () => {
        const expectedAction = { type: COUNTER_INCREMENT }

        expect(
            counterIncrement()
        ).toEqual(expectedAction)
    })

    it('create an action to decrease counter value', () => {
        const expectedAction = { type: COUNTER_DECREMENT }

        expect(
            counterDecrement()
        ).toEqual(expectedAction)
    })
})
