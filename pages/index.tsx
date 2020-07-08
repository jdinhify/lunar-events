import React, { useState } from 'react'
import { EventList } from '../src/components/event-list'
import { NewEvent } from '../src/components/new-event'
import { Protected } from '../src/components/auth'

const Home = () => {
  const [year, setYear] = useState(String(new Date().getFullYear()))

  const years = [...Array(8).keys()].map(
    (number) => parseInt(year, 10) - 4 + number,
  )
  return (
    <Protected>
      <NewEvent />
      <div className="row noprint">
        <div className="col-4-6">
          <span>Năm hiển thị: &nbsp;&nbsp;</span>
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            {years.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="col-2-6 flex justify-content-flex-end">
          <button
            className="flex align-items-center"
            onClick={() => window.print()}
          >
            <img
              className="icon-print"
              src="/icon-print.png"
              alt="printer icon"
            />{' '}
            <span>In</span>
          </button>
        </div>
      </div>
      <EventList year={year} />
      <style jsx>{`
        .icon-print {
          height: 16px;
          padding-right: 0.5rem;
        }
      `}</style>
    </Protected>
  )
}

export default Home
