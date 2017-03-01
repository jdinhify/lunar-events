import { pipe, map, groupBy, prop } from 'ramda'

import { convertLunar2Solar } from './lunar'

const weekDays = {
    0: 'Chủ Nhật',
    1: 'Thứ Hai',
    2: 'Thứ Ba',
    3: 'Thứ Tư',
    4: 'Thứ Năm',
    5: 'Thứ Sáu',
    6: 'Thứ Bảy'
}

const convertDateInEvent = ({year = new Date().getFullYear(), timezone = 7.0}) => event => {
    const { description, lunarDay, lunarMonth } = event
    const solarDateArr = convertLunar2Solar(lunarDay, lunarMonth, year, 0, timezone)
    const solarDay = solarDateArr[0]
    const solarMonth = solarDateArr[1]
    const solarYear = solarDateArr[2]
    const solarDate = `${solarDay}/${solarMonth}/${solarYear}`
    const weekDay = weekDays[new Date(solarYear, solarMonth - 1, solarDay).getDay()]

    return {
        ...event,
        description,
        solarDate,
        month: `${solarMonth}`,
        weekDay
    }
}

export const transformEvents = ({year = new Date().getFullYear(), timezone = 7.0}) => ({allEvents = []}) =>
    pipe(
        map(convertDateInEvent({year, timezone})),
        groupBy(e => prop('month', e))
    )(allEvents)
