import React from 'react'
import renderer from 'react-test-renderer'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

import Counter from './'
import { initialState } from './redux'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)

describe('Counter component', () => {
    it('renders correctly', () => {
        const store = mockStore({ counter: initialState })
        const component = renderer.create(
            <Counter store={store}/>
        )

        expect(component).toMatchSnapshot()
    })
})
