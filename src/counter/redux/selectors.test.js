import { counterValueSelector } from './selectors'

describe('counterValueSelector', () => {
    it('returns the counter value', () => {
        const value = Math.random()

        expect(
            counterValueSelector({ counter: { value }})
        ).toEqual(value)
    })
})
