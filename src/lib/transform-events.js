import { pipe, map, groupBy, prop, sort } from 'ramda'
import { compareProps } from './ramda-utils'

import { convertLunar2Solar } from './lunar'

const weekDays = {
  0: 'Chủ Nhật',
  1: 'Thứ Hai',
  2: 'Thứ Ba',
  3: 'Thứ Tư',
  4: 'Thứ Năm',
  5: 'Thứ Sáu',
  6: 'Thứ Bảy',
}

const convertDateInEvent = ({
  year = new Date().getFullYear(),
  timezone = 7.0,
}) => (event) => {
  const { description, lunarDay, lunarMonth } = event
  const [solarDay, solarMonth, solarYear] = convertLunar2Solar(
    parseInt(lunarDay, 10),
    parseInt(lunarMonth, 10),
    year,
    0,
    timezone,
  )
  const solarDate = `${solarDay}/${solarMonth}/${solarYear}`
  const weekDay =
    weekDays[new Date(solarYear, solarMonth - 1, solarDay).getDay()]

  return {
    ...event,
    description,
    solarDate,
    weekDay,
  }
}

export const transformEvents = ({
  year = new Date().getFullYear(),
  timezone = 7.0,
}) => ({ allEvents = [] }) =>
  pipe(
    map(convertDateInEvent({ year, timezone })),
    sort(compareProps(['+lunarMonth', '+lunarDay'])),
    groupBy((e) => prop('lunarMonth', e)),
  )(allEvents)
