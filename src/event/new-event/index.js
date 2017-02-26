import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import {
  updateEventDetail,
  clearEventDetail
} from './redux'

const onChange = ({name, func, isNumber}) => e => func({name, value: isNumber ? parseInt(e.target.value, 10) : e.target.value})

const doAddEvent = ({newEvent: {description, lunarDay, lunarMonth}, addEvent, refetch, clearEventDetail}) => e => {
  e.preventDefault()
  addEvent({variables: {
    description,
    lunarDay: parseInt(lunarDay, 10),
    lunarMonth: parseInt(lunarMonth, 10)}})
    .then(refetch())
    .then(clearEventDetail())
}

const propTypes = {
  updateEventDetail: PropTypes.func,
  newEvent: PropTypes.object,
  addEvent: PropTypes.func,
  refetch: PropTypes.func,
  clearEventDetail: PropTypes.func
}

const NewEvent = ({updateEventDetail, newEvent, addEvent, refetch, clearEventDetail}) =>
  <form onSubmit={doAddEvent({newEvent, addEvent, refetch, clearEventDetail})}>
    <textarea
      placeholder='Nội Dung'
      onChange={onChange({name: 'description', func: updateEventDetail})}
      required
      value={newEvent.description} />
    <input
      type='number'
      placeholder='Ngày'
      min='1'
      max='31'
      onChange={onChange({name: 'lunarDay', func: updateEventDetail, isNumber: true})}
      required
      value={newEvent.lunarDay} />
    <input
      type='number'
      placeholder='Tháng'
      min='1'
      max='12'
      onChange={onChange({name: 'lunarMonth', func: updateEventDetail, isNumber: true})}
      required
      value={newEvent.lunarMonth} />
    <input type='submit' />
  </form>

NewEvent.propTypes = propTypes

const mapStateToProps = ({newEvent}) => ({
  newEvent
})

const mapDispatchToProps = dispatch => ({
  updateEventDetail: data => dispatch(updateEventDetail(data)),
  clearEventDetail: () => dispatch(clearEventDetail())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewEvent)
