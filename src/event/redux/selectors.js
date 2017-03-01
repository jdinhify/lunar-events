import { createSelector } from 'reselect'
import { prop } from 'ramda'

export const eventSelector = state => state.event

export const eventYearSelector = createSelector(
    eventSelector,
    event => prop('year', event)
)
