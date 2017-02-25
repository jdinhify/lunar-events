import Immutable from 'immutable'

const counterDecrementReducer = state =>
    Immutable
        .fromJS(state)
        .set('value', state.value - 1)
        .toJSON()

export default counterDecrementReducer
