import React from 'react'
import "./Subscribe.css"

const Subscribe = () => {
  return (
    <section className='subscribe'>
      <div className="allsubs">
        <div className="alltext">
          <h1>Subscribe to The Newsletters</h1>
          <p>Connected to the Most Critical Events</p>
          <form>
            <input type="text" placeholder='Email' />
            <input className='btn' type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Subscribe