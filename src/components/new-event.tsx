import React, { useState } from 'react'

export const NewEvent = () => {
  const [newEvent, setNewEvent] = useState({
    description: '',
    lunarDay: '',
    lunarMonth: '',
  })

  const handleUpdate = (key: string) => (e: { target: { value: any } }) =>
    setNewEvent({ ...newEvent, [key]: e.target.value })

  const addNewEvent = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log(newEvent)
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
          />
        </label>
      </div>
      <div className="col-1-6 text-align-right">
        <button type="submit">Thêm sự kiện</button>
      </div>
    </form>
  )
}
