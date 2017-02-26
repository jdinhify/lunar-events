import React, { PropTypes } from 'react'

const propTypes = {
  event: PropTypes.object.isRequired
}

const EventEntry = props => {
  const {
    description,
    lunarDate,
    solarDate
  } = props.event

  return (
    <div className='row'>
      <div className='col-4-6'>{description}</div>
      <div className='col-1-6 text-align-center'>{lunarDate}</div>
      <div className='col-1-6 text-align-center'>{solarDate}</div>
    </div>
  )
}

EventEntry.propTypes = propTypes

export default EventEntry
