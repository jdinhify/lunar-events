import React, { PropTypes } from 'react'

import EventEntry from './event-entry'

const propTypes = {
    events: PropTypes.array.isRequired,
    month: PropTypes.string.isRequired,
    updateEvent: PropTypes.func,
    refetch: PropTypes.func,
    deleteEvent: PropTypes.func
}
const Month = ({month, events, updateEvent, refetch, deleteEvent}) =>
    <div className='month'>
        <div className='row'><h2>Tháng {month}</h2></div>
        {
      events.map(event =>
          <EventEntry
              key={event.id}
              event={event}
              updateEvent={updateEvent}
              refetch={refetch}
              deleteEvent={deleteEvent} />)
    }
    </div>

Month.propTypes = propTypes

export default Month
