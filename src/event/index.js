import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import EventList from './event-list'
import {
  eventYearSelector,
  updateYear
} from './redux'

import './styles.css'

const propTypes = {
  allEvents: PropTypes.any,
  updateYear: PropTypes.func,
  year: PropTypes.number
}

const onYearChange = changeFunction => e => changeFunction(parseInt(e.target.value, 10))

const Event = props =>
  <div>
    <select value={props.year} onChange={onYearChange(props.updateYear)}>
      <option value='2016'>2016</option>
      <option value='2017'>2017</option>
      <option value='2018'>2018</option>
      <option value='2019'>2019</option>
      <option value='2020'>2020</option>
    </select>
    <EventList allEvents={props.allEvents} year={props.year} />
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

const EventLinked = compose(
  graphql(allEventsQuery, ({
    props: ({data: { allEvents }}) => ({ allEvents })
  })),
  connect(mapStateToProps, mapDispachToProps)
)(Event)

export default EventLinked
