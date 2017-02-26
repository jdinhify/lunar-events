import React, { PropTypes } from 'react'

import { transformEvents } from '../utils/transform-events'
import Month from './month'

const propTypes = {
  allEvents: PropTypes.array.isRequired,
  year: PropTypes.number
}
const defaultProps = {
  allEvents: [],
  year: new Date().getFullYear()
}

const EventList = ({allEvents, year}) => {
  const events = transformEvents({year})({allEvents})

  return (
    <div>
      <h1>Event List</h1>
      <div>
        {
          Object
            .keys(events)
            .map((month, index) => <Month key={index} month={month} events={events[month]} />)
        }
      </div>
    </div>
  )
}

EventList.propTypes = propTypes
EventList.defaultProps = defaultProps

export default EventList
