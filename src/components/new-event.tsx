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
      <div className="col-4-6">
        <textarea
          rows={3}
          placeholder="Nội Dung"
          onChange={handleUpdate('description')}
          required
        />
      </div>
      <div className="col-1-6 text-align-center">
        <input
          type="number"
          placeholder="Ngày"
          min="1"
          max="31"
          onChange={handleUpdate('lunarDay')}
          required
        />
        <input
          type="number"
          placeholder="Tháng"
          min="1"
          max="12"
          onChange={handleUpdate('lunarMonth')}
          required
        />
      </div>
      <div className="col-1-6 text-align-right">
        <button type="submit">Thêm sự kiện</button>
      </div>
    </form>
  )
}
