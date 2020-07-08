import { pipe, map, groupBy, prop } from 'ramda'
import { convertLunar2Solar } from './lunar'

const padNumber = (number) => String(number).padStart(2, '0')

const weekDays = {
  0: 'Chủ Nhật',
  1: 'Thứ Hai',
  2: 'Thứ Ba',
  3: 'Thứ Tư',
  4: 'Thứ Năm',
  5: 'Thứ Sáu',
  6: 'Thứ Bảy',
}

const convertDateInEvent = ({ year, timezone = 7.0 }) => (event) => {
  const { description, lunarDay, lunarMonth } = event
  const [solarDay, solarMonth, solarYear] = convertLunar2Solar(
    parseInt(lunarDay, 10),
    parseInt(lunarMonth, 10),
    parseInt(year, 10),
    0,
    timezone,
  )
  const solarDate = `${padNumber(solarDay)}/${padNumber(
    solarMonth,
  )}/${solarYear}`
  const weekDay =
    weekDays[new Date(solarYear, solarMonth - 1, solarDay).getDay()]

  return {
    ...event,
    description,
    solarDate,
    weekDay,
  }
}

const lunarDayCompareFn = (date1, date2) => {
  const date1Str = `${String(date1.lunarMonth).padStart(2, '0')}${String(
    date1.lunarDay,
  ).padStart(2, '0')}`
  const date2Str = `${String(date2.lunarMonth).padStart(2, '0')}${String(
    date2.lunarDay,
  ).padStart(2, '0')}`

  return date1Str.localeCompare(date2Str)
}

export const transformEvents = ({ year, timezone = 7.0 }) => (allEvents = []) =>
  pipe(
    map(convertDateInEvent({ year, timezone })),
    groupBy((e) => prop('lunarMonth', e)),
  )(allEvents.sort(lunarDayCompareFn))
