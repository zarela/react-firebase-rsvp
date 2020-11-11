import React from 'react'
import moonUnicorn from '../moon-unicorn.png'
import './ShowerDetails.css'

const ShowerDetails = () => {
  return (
    <div className="center">
      <p>
        Join us to celebrate this special time with friends and family!
      </p>
      <img src={moonUnicorn} alt="moon-unicorn" height="180"/>
      <p>
        Day: Saturday November 21th<br/>
        Time: 5:00 PM - 6:30 PM<br/>
        Virtual via Zoom <br/>
        Zoom Link: {''}
         <a href="https://us02web.zoom.us/j/88078277688"  rel="noreferrer" target="_blank">Enter Here</a><br/>
         Meeting ID: 880 7827 7688<br/>
      </p>
      <div className="recommendations">
        <p>
          <h4>Recommendations:</h4>
          Join in time of 5 mins earlier<br/>
          Please keep your audio deactivated<br/>
          Preferably use a computer to connect<br/>
          Have a blank piece of paper and markers handy<br/>
        </p>
      </div>
    </div>
  )
}

export default ShowerDetails