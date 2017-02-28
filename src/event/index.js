import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import EventList from './event-list'
import NewEvent from './new-event'
import UserLogin from './user-login'
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
  deleteEvent: PropTypes.func,
  user: PropTypes.object,
  signinUser: PropTypes.func,
  loading: PropTypes.bool
}

const onYearChange = changeFunction => e => changeFunction(parseInt(e.target.value, 10))

const doPrint = () => window.print()

const Event = props => props.user
  ? <div>
    <NewEvent addEvent={props.addEvent} refetch={props.refetch} user={props.user} />
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
      deleteEvent={props.deleteEvent}
      loading={props.loading} />
  </div>
  : <UserLogin signinUser={props.signinUser} refetch={props.refetch} loading={props.loading} />

Event.propTypes = propTypes

const mapStateToProps = state => ({
  year: eventYearSelector(state)
})

const mapDispachToProps = dispatch => ({
  updateYear: year => dispatch(updateYear(year))
})

const allEventsQuery = gql`
  query allEvents($email: String!)  {
    allEvents (filter: {
      users_some: {
        email: $email
      }
    }) {
      id,
      description,
      lunarMonth,
      lunarDay
    }
  }
`

const addEventMutation = gql`
  mutation addEvent($description: String!, $lunarDay: Int!, $lunarMonth: Int!, $userId: [ID!]) {
    createEvent(
      description: $description,
      lunarDay: $lunarDay,
      lunarMonth: $lunarMonth,
      usersIds: $userId
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
const signinUser = gql`
  mutation ($email: String!, $password: String!) {
    signinUser(email: {email: $email, password: $password}) {
      token
    }
  }
`

const userQuery = gql`
  query user {
    user {
      id,
      email
    }
  }
`

const EventLinked = compose(
  graphql(addEventMutation, {name: 'addEvent'}),
  graphql(updateEventMutation, {name: 'updateEvent'}),
  graphql(deleteEventMutation, {name: 'deleteEvent'}),
  graphql(signinUser, {name: 'signinUser'}),
  graphql(userQuery, {
    options: {forceFetch: true},
    props: ({ownProps, data: {user, loading}}) => ({...ownProps, user, loading})
  }),
  graphql(allEventsQuery, {
    options: ({ user: { email = '' } = {} }) => ({ variables: { email: email } }),
    props: ({
      data: { allEvents, refetch, loading }}) => ({ allEvents, refetch, loading })
  }),
  connect(mapStateToProps, mapDispachToProps)
)(Event)

export default EventLinked
