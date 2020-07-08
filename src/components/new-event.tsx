import React, { useState } from 'react'
import '../integration/aws-config'
import { API, graphqlOperation } from 'aws-amplify'
import { createEvent } from '../graphql/mutations'
import { CreateEventInput } from '../graphql/types'
import { useMutation, queryCache } from 'react-query'

const initialEvent = {
  description: '',
  lunarDay: '',
  lunarMonth: '',
}

const isEmpty = (object: { [key: string]: any }) =>
  Object.values(object).some((value: string) => value.trim() === '')

export const NewEvent = () => {
  const [newEvent, newEventSet] = useState<CreateEventInput>(initialEvent)
  const [mutate, { isLoading }] = useMutation(
    (event: CreateEventInput): any =>
      API.graphql(graphqlOperation(createEvent, { input: event })),
    {
      onSuccess: () => {
        newEventSet(initialEvent)
        queryCache.invalidateQueries('all-events')
      },
    },
  )

  const handleUpdate = (key: string) => (e: { target: { value: any } }) =>
    newEventSet({ ...newEvent, [key]: e.target.value })

  const addNewEvent = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    mutate(newEvent)
  }

  return (
    <form className="noprint row" onSubmit={addNewEvent}>
      <div className="col-3-6 flex flex-direction-column">
        <label htmlFor="newEventDescription">Nội Dung</label>
        <textarea
          id="newEventDescription"
          rows={2}
          placeholder="Nội Dung"
          onChange={handleUpdate('description')}
          required
          value={newEvent.description}
        />
      </div>
      <div className="col-1-6">
        <label>
          Ngày AL
          <input
            id="newEventDay"
            type="number"
            placeholder="Ngày AL"
            min="1"
            max="30"
            onChange={handleUpdate('lunarDay')}
            required
            value={newEvent.lunarDay}
          />
        </label>
      </div>
      <div className="col-1-6">
        <label>
          Tháng AL
          <input
            id="newEventMonth"
            type="number"
            placeholder="Tháng AL"
            min="1"
            max="12"
            onChange={handleUpdate('lunarMonth')}
            required
            value={newEvent.lunarMonth}
          />
        </label>
      </div>
      <div className="col-1-6 text-align-right">
        <button type="submit" disabled={isEmpty(newEvent)}>
          {isLoading ? '...' : 'Thêm sự kiện'}
        </button>
      </div>
    </form>
  )
}
