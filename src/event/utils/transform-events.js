import { pipe, map, groupBy, prop } from 'ramda'

import { convertLunar2Solar } from './lunar'

const convertDateInEvent = ({year = new Date().getFullYear(), timezone = 7.0}) => event => {
  const { description, lunarDay, lunarMonth } = event
  const solarDateArr = convertLunar2Solar(lunarDay, lunarMonth, year, 0, timezone)
  const solarDate = `${solarDateArr[0]}/${solarDateArr[1]}/${solarDateArr[2]}`

  return {
    ...event,
    description,
    lunarDate: `${lunarDay}/${lunarMonth}`,
    solarDate,
    month: `${solarDateArr[1]}`
  }
}

export const transformEvents = ({year = new Date().getFullYear(), timezone = 7.0}) => ({allEvents = []}) =>
  pipe(
    map(convertDateInEvent({year, timezone})),
    groupBy(e => prop('month', e))
  )(allEvents)
