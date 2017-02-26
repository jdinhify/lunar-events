import React, { Component, PropTypes } from 'react'

const propTypes = {
  event: PropTypes.object.isRequired,
  updateEvent: PropTypes.func,
  refetch: PropTypes.func
}

class EventEntry extends Component {
  constructor (props) {
    super(props)
    this.state = {
      description: props.event.description,
      lunarDay: props.event.lunarDay,
      lunarMonth: props.event.lunarMonth,
      editing: false
    }
  }

  updateDetail = type => e => this.setState({[type]: e.target.value})

  handleSave = e => {
    e.preventDefault()
    const {
      description,
      lunarDay,
      lunarMonth
    } = this.state
    const {
      event: { id },
      updateEvent,
      refetch
    } = this.props
    updateEvent({
      variables: {
        id,
        description,
        lunarDay,
        lunarMonth
      }
    })
      .then(refetch())
      .then(this.setState({editing: false}))
  }

  toggleEdit = e => this.setState({editing: !this.state.editing})

  render () {
    const {
      description,
      lunarDay,
      lunarMonth,
      editing
    } = this.state
    const {
      event: {
        solarDate,
        weekDay
      }
    } = this.props

    return (
      <div className='row'>
        <div className='col-3-6'>
          {editing ?
            <input
              type='text'
              value={description}
              onChange={this.updateDetail('description')} />
            : <span>{description}</span>
          }
        </div>
        <div className='col-1-6 text-align-center'>{weekDay}</div>
        <div className='col-1-6 text-align-center'>
          {editing ?
            <span>
              <input
                type='text'
                value={lunarDay}
                onChange={this.updateDetail('lunarDay')} />
              <span>/</span>
              <input
                type='text'
                value={lunarMonth}
                onChange={this.updateDetail('lunarMonth')} />
            </span>
            : <span>{`${lunarDay}/${lunarMonth}`}</span>
          }
        </div>
        <div className='col-1-6 text-align-center'>{solarDate}</div>
        <div className='col-1-6 text-align-center'>
          {editing ? <button onClick={this.handleSave}>Save</button> : undefined}
          <button onClick={this.toggleEdit}>{editing ? 'Cancel' : 'Edit'}</button>
        </div>
      </div>
    )
  }
}

EventEntry.propTypes = propTypes

export default EventEntry
