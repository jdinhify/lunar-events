import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import {
    counterDecrement,
    counterIncrement,
    counterValueSelector
} from './redux'

import './styles.css'

const Counter = props => {
    const {
        counter,
        counterDecrement,
        counterIncrement
    } = props

    return (
        <div>
            <h1 className='counter-heading'>{'Counter'}</h1>
            <span className='counter-span'>{counter}</span>
            <button onClick={counterDecrement}>{'-'}</button>
            <button onClick={counterIncrement}>{'+'}</button>
        </div>
    )
}

Counter.propTypes = {
    counter: PropTypes.any,
    counterDecrement: PropTypes.func.isRequired,
    counterIncrement: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    counter: counterValueSelector(state)
})

const mapDispatchToProps = dispatch => ({
    counterDecrement: () => dispatch(counterDecrement()),
    counterIncrement: () => dispatch(counterIncrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
