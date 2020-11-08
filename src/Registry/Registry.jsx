import React from 'react'
import amazonLogo from '../amazon-logo.png'
import moonUnicorn from '../moon-unicorn.png'
import './Registry.css'

const Registry = () => {
  return (
    <div className="center">
      <p>
      Thank you so much for visiting our baby registry, and helping us get ready for our baby. More than anything, we are just so grateful for your love and support. Thank you!
      </p>
      <img src={moonUnicorn} alt="moon-unicorn" height="180"/>
      <a href="https://www.amazon.com/baby-reg/35D30XMZOO914" rel="noreferrer" target="_blank" >
        <img src={amazonLogo} alt="amazon-logo" width="300" className="amazon-logo"/>
      </a>
      <a className="noteButton" href="https://www.amazon.com/baby-reg/35D30XMZOO914" rel="noreferrer" target="_blank" >Visit  our registry 	&#x2665;</a>
    </div>
  )
}

export default Registry