import React, { useState } from 'react'
import { transformEvents } from '../lib/transform-events'

const allEvents = [
  {
    description: 'Event 1',
    lunarDay: '4',
    lunarMonth: '1',
    id: '1',
  },
  {
    description: 'Event 2',
    lunarDay: '5',
    lunarMonth: '1',
    id: '2',
  },
]

const EventEntry = (props) => {
  const [event, setEvent] = useState({
    description: props.event.description,
    lunarDay: props.event.lunarDay,
    lunarMonth: props.event.lunarMonth,
  })
  const [editing, setEditing] = useState(false)

  const { description, lunarDay, lunarMonth } = event
  const {
    event: { solarDate, weekDay, id },
  } = props

  const updateDetail = (type: string) => (e) =>
    setEvent({
      ...event,
      [type]: e.target.value,
    })

  const handleSave = (e) => {
    e.preventDefault()
    const { description, lunarDay, lunarMonth } = event

    console.log('saving event', id, description, lunarDay, lunarMonth)
    setEditing(false)
  }

  const toggleEdit = () => setEditing(!editing)

  const handleDelete = () => console.log(id)

  return (
    <form className="row" onSubmit={handleSave}>
      <div className="col-3-6">
        {editing ? (
          <textarea
            rows={3}
            value={description}
            onChange={updateDetail('description')}
            required
          />
        ) : (
          <span>{description}</span>
        )}
      </div>
      <div className="col-1-6 text-align-center">{weekDay}</div>
      <div className="col-1-6 text-align-center">
        {editing ? (
          <div className="row">
            <div className="col-3-6">
              <input
                type="number"
                value={lunarDay}
                min="1"
                max="31"
                onChange={updateDetail('lunarDay')}
                required
              />
            </div>
            <div className="col-3-6">
              <input
                type="number"
                value={lunarMonth}
                min="1"
                max="12"
                onChange={updateDetail('lunarMonth')}
                required
              />
            </div>
          </div>
        ) : (
          <span>{`${lunarDay}/${lunarMonth}`}</span>
        )}
      </div>
      <div className="col-1-6 text-align-center">{solarDate}</div>
      <div className="col-1-6 noprint">
        {editing ? (
          <div className="row justify-end">
            <button type="submit">Lưu</button>
            <button
              style={{ marginLeft: '.5rem' }}
              className="delete"
              type="button"
              onClick={handleDelete}
            >
              Xoá
            </button>
          </div>
        ) : undefined}
        <div className="row justify-end">
          <button type="button" onClick={toggleEdit}>
            {editing ? 'Huỷ' : 'Sửa'}
          </button>
        </div>
      </div>
    </form>
  )
}

const Month = ({ month, events }) => (
  <div className="month">
    <div className="row">
      <h2>Tháng {month}</h2>
    </div>
    {events.map((event) => (
      <EventEntry key={event.id} event={event} />
    ))}
  </div>
)

export const EventList = ({ year }) => {
  const events = transformEvents({ year })({ allEvents })

  return (
    <div className="event-list">
      <div className="event-list">
        <div className="row">
          <h1>Các sự kiện quan trọng trong năm {year}</h1>
        </div>
        <div>
          {Object.keys(events).map((month, index) => (
            <Month key={index} month={month} events={events[month]} />
          ))}
        </div>
      </div>
    </div>
  )
}
