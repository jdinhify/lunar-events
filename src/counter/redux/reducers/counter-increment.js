import Immutable from 'immutable'

const counterIncrementReducer = state =>
    Immutable
        .fromJS(state)
        .set('value', state.value + 1)
        .toJSON()

export default counterIncrementReducer
