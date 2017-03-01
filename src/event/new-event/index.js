import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import {
    updateEventDetail,
    clearEventDetail
} from './redux'

const propTypes = {
    updateEventDetail: PropTypes.func,
    newEvent: PropTypes.object,
    addEvent: PropTypes.func,
    refetch: PropTypes.func,
    clearEventDetail: PropTypes.func,
    user: PropTypes.object
}

const onChange = ({name, func, isNumber}) => e => func({name, value: e.target.value})

const doAddEvent = ({newEvent: {description, lunarDay, lunarMonth}, addEvent, refetch, clearEventDetail, user: { id: userId }}) => e => {
    e.preventDefault()

    addEvent({
        variables: {
            description,
            lunarDay: parseInt(lunarDay, 10),
            lunarMonth: parseInt(lunarMonth, 10),
            userId
        }
    })
        .then(() => {
            clearEventDetail()
            refetch()
        })
}

const NewEvent = ({updateEventDetail, newEvent, addEvent, refetch, clearEventDetail, user}) =>
    <form className='noprint row' onSubmit={doAddEvent({newEvent, addEvent, refetch, clearEventDetail, user})}>
        <div className='col-4-6'>
            <textarea
                rows='3'
                placeholder='Nội Dung'
                onChange={onChange({name: 'description', func: updateEventDetail})}
                required
                value={newEvent.description} />
        </div>
        <div className='col-1-6 text-align-center'>
            <input
                type='number'
                placeholder='Ngày'
                min='1'
                max='31'
                onChange={onChange({name: 'lunarDay', func: updateEventDetail})}
                required
                value={newEvent.lunarDay} />
            <input
                type='number'
                placeholder='Tháng'
                min='1'
                max='12'
                onChange={onChange({name: 'lunarMonth', func: updateEventDetail})}
                required
                value={newEvent.lunarMonth} />
        </div>
        <div className='col-1-6 text-align-right'><button type='submit'>Thêm sự kiện</button></div>
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
