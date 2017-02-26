import React, { PropTypes } from 'react'

import EventEntry from './event-entry'

const propTypes = {
  events: PropTypes.array.isRequired,
  month: PropTypes.string.isRequired
}
const Month = ({month, events}) =>
  <div>
    <h2>Tháng {month}</h2>
    {
      events.map(event => <EventEntry key={event.id} event={event} />)
    }
  </div>

Month.propTypes = propTypes

export default Month
