import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import EventList from './event-list'
import NewEvent from './new-event'
import {
  eventYearSelector,
  updateYear
} from './redux'

import './styles.css'

const propTypes = {
  allEvents: PropTypes.any,
  updateYear: PropTypes.func,
  year: PropTypes.number,
  addEvent: PropTypes.func,
  refetch: PropTypes.func,
  updateEvent: PropTypes.func,
  deleteEvent: PropTypes.func
}

const onYearChange = changeFunction => e => changeFunction(parseInt(e.target.value, 10))

const doPrint = () => window.print()

const Event = props =>
  <div>
    <NewEvent addEvent={props.addEvent} refetch={props.refetch} />
    <div className='row noprint'>
      <div className='col-4-6'>
        <span>Năm hiển thị: &nbsp;&nbsp;</span>
        <select value={props.year} onChange={onYearChange(props.updateYear)}>
          <option value='2016'>2016</option>
          <option value='2017'>2017</option>
          <option value='2018'>2018</option>
          <option value='2019'>2019</option>
          <option value='2020'>2020</option>
        </select>
      </div>
      <div className='col-2-6 text-align-right'>
        <button onClick={doPrint}>In</button>
      </div>
    </div>
    <EventList
      allEvents={props.allEvents}
      year={props.year}
      updateEvent={props.updateEvent}
      refetch={props.refetch}
      deleteEvent={props.deleteEvent} />
  </div>

Event.propTypes = propTypes

const mapStateToProps = state => ({
  year: eventYearSelector(state)
})

const mapDispachToProps = dispatch => ({
  updateYear: year => dispatch(updateYear(year))
})

const allEventsQuery = gql`
  query allEvents {
    allEvents {
      id,
      description,
      lunarMonth,
      lunarDay
    }
  }
`

const addEventMutation = gql`
  mutation addEvent($description: String!, $lunarDay: Int!, $lunarMonth: Int!) {
    createEvent(
      description: $description,
      lunarDay: $lunarDay,
      lunarMonth: $lunarMonth
    ) { id }
  }
`

const updateEventMutation = gql`
  mutation updateEvent($id: ID!, $description: String!, $lunarDay: Int!, $lunarMonth: Int!) {
    updateEvent(
      id: $id,
      description: $description,
      lunarDay: $lunarDay,
      lunarMonth: $lunarMonth
    ) { id }
  }
`

const deleteEventMutation = gql`
  mutation deleteEvent($id: ID!) {
    deleteEvent(
      id: $id
    ) { id }
  }
`

const EventLinked = compose(
  graphql(addEventMutation, {name: 'addEvent'}),
  graphql(updateEventMutation, {name: 'updateEvent'}),
  graphql(deleteEventMutation, {name: 'deleteEvent'}),
  graphql(allEventsQuery, ({
    props: ({data: { allEvents, refetch }}) => ({ allEvents, refetch })
  })),
  connect(mapStateToProps, mapDispachToProps)
)(Event)

export default EventLinked
