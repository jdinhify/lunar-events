import React, { Component, PropTypes } from 'react'

const propTypes = {
  event: PropTypes.object.isRequired,
  updateEvent: PropTypes.func,
  refetch: PropTypes.func,
  deleteEvent: PropTypes.func
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
        lunarDay: parseInt(lunarDay, 10),
        lunarMonth: parseInt(lunarMonth, 10)
      }
    })
      .then(refetch())
      .then(this.setState({editing: false}))
  }

  toggleEdit = e => this.setState({editing: !this.state.editing})

  handleDelete = e => {
    const {
      deleteEvent,
      refetch,
      event: { id }
    } = this.props
    deleteEvent({
      variables: {
        id
      }
    })
      .then(refetch())
  }

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
      <form className='row' onSubmit={this.handleSave}>
        <div className='col-3-6'>
          {editing
            ? <textarea
              rows='3'
              value={description}
              onChange={this.updateDetail('description')}
              required />
            : <span>{description}</span>
          }
        </div>
        <div className='col-1-6 text-align-center'>{weekDay}</div>
        <div className='col-1-6 text-align-center'>
          {editing
            ? <div className='row'>
              <div className='col-3-6'>
                <input
                  type='number'
                  value={lunarDay}
                  min='1'
                  max='31'
                  onChange={this.updateDetail('lunarDay')}
                  required />
              </div>
              <div className='col-3-6'>
                <input
                  type='number'
                  value={lunarMonth}
                  min='1'
                  max='12'
                  onChange={this.updateDetail('lunarMonth')}
                  required />
              </div>
            </div>
            : <span>{`${lunarDay}/${lunarMonth}`}</span>
          }
        </div>
        <div className='col-1-6 text-align-center'>{solarDate}</div>
        <div className='col-1-6 noprint'>
          {editing
            ? <div className='row justify-end'>
              <button type='submit'>Lưu</button>
              <button style={{marginLeft: '.5rem'}} className='delete' type='button' onClick={this.handleDelete}>Xoá</button>
            </div>
            : undefined
          }
          <div className='row justify-end'>
            <button type='button' onClick={this.toggleEdit}>{editing ? 'Huỷ' : 'Sửa'}</button>
          </div>
        </div>
      </form>
    )
  }
}

EventEntry.propTypes = propTypes

export default EventEntry
