import { transformEvents } from './transform-events'

it('transforms event list', () => {
  const events = [
    { description: 'Event 1', lunarDay: '13', lunarMonth: '12' },
    { description: 'Event 2', lunarDay: '1', lunarMonth: '2' },
    { description: 'Event 3', lunarDay: '10', lunarMonth: '1' },
  ]

  const expected = {
    '1': [
      {
        description: 'Event 3',
        lunarDay: '10',
        lunarMonth: '1',
        solarDate: '03/02/2020',
        weekDay: 'Thứ Hai',
      },
    ],
    '12': [
      {
        description: 'Event 1',
        lunarDay: '13',
        lunarMonth: '12',
        solarDate: '25/01/2021',
        weekDay: 'Thứ Hai',
      },
    ],
    '2': [
      {
        description: 'Event 2',
        lunarDay: '1',
        lunarMonth: '2',
        solarDate: '23/02/2020',
        weekDay: 'Chủ Nhật',
      },
    ],
  }
  const actual = transformEvents({ year: 2020 })(events)

  expect(actual).toEqual(expected)
})
