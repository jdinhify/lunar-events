import React, { PropTypes } from 'react'

const propTypes = {
  event: PropTypes.object.isRequired
}

const EventEntry = props => {
  const {
    description,
    lunarDate,
    solarDate,
    weekDay
  } = props.event

  return (
    <div className='row'>
      <div className='col-3-6'>{description}</div>
      <div className='col-1-6 text-align-center'>{weekDay}</div>
      <div className='col-1-6 text-align-center'>{lunarDate}</div>
      <div className='col-1-6 text-align-center'>{solarDate}</div>
    </div>
  )
}

EventEntry.propTypes = propTypes

export default EventEntry
