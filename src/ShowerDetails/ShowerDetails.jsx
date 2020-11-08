import React from 'react'
import moonUnicorn from '../moon-unicorn.png'

const ShowerDetails = () => {
  return (
    <div className="center">
      <p>
        Join us to celebrate this special time with friends and family!
      </p>
      <img src={moonUnicorn} alt="moon-unicorn" height="180"/>
      <p>
        Day: Saturday November 21th<br />
        Time: 5:00 PM - 6:30 PM<br />
        Virtual via Zoom<br />
        <br />
        RSVP NOW
      </p>
    </div>
  )
}

export default ShowerDetails