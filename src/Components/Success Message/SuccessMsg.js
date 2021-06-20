import React from 'react'
import './SuccessMsg.css'
import { useHistory } from 'react-router-dom'

function SuccessMsg() {

    let history = useHistory();

    function handleClick() {
        history.push("/");
    }


    return (
        <div>
            <div id='card' class="animated fadeIn">
  <div id='upper-side'>
      <h3 id='status'>
      Success
    </h3>
  </div>
  <div id='lower-side'>
    <p id='message'>
      Thank you for your message. I will get back to you as soon as possible!
    </p>
    <button id="contBtn" onClick={handleClick}>Continue</button>
  </div>
</div>
        </div>
    )
}

export default SuccessMsg
