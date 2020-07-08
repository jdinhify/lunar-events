import React, { useState } from 'react'
import { EventList } from '../src/components/event-list'
import { NewEvent } from '../src/components/new-event'

export default () => {
  const [year, setYear] = useState(String(new Date().getFullYear()))

  const years = [...Array(8).keys()].map(
    (number) => parseInt(year, 10) - 4 + number,
  )
  return (
    <div>
      <NewEvent />
      <div className="row noprint">
        <div className="col-4-6">
          <span>Năm hiển thị: &nbsp;&nbsp;</span>
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            {years.map((value) => (
              <option value={value}>{value}</option>
            ))}
          </select>
        </div>
        <div className="col-2-6 text-align-right">
          <button onClick={() => window.print()}>In</button>
        </div>
      </div>
      <EventList year={year} />
    </div>
  )
}
