import { EVENT_YEAR_UPDATE } from './action-types'

export const updateYear = year => ({
  type: EVENT_YEAR_UPDATE,
  year
})
