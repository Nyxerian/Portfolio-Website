import React from 'react'
import NavBar from "../../Components/Navbar/NavBar"

import './FeedbackForm.css'

function FeedbackForm() {
    return (
        <div>
            <NavBar />
            <div id="contact-form" >
                <div>
                    <h1>I have and 'Always Learning' mindset</h1> 
                    <h4>Any constructive feedback on my site or helpful advice would be appreciated</h4> 
                </div>
                    <p id="failure">Oopsie...message not sent.</p>  
                    <p id="success">Your message was sent successfully. Thank you!</p>

		   <form 
           name="feedbackForm"
            method="POST" 
            data-netlify="true" 
			action="/SuccessMsg"
            >
            <input type="hidden" name="form-name" value="feedbackForm" />
			<div>
		      <label for="name">
		      	<span class="required">Name: *</span> 
		      	<input type="text" placeholder="Your Name" required="required" tabindex="1" autofocus="autofocus" name="name" />
		      </label> 
			</div>
			<div>
		      <label for="email">
		      	<span class="required">Email: *</span>
		      	<input type="email" placeholder="Your Email" tabindex="2" required="required" name="email" />
		      </label>  
			</div>
			<div>		          
		      <label for="message">
		      	<span class="required">Message: *</span> 
		      	<textarea id="message" name="message" placeholder="Please write your message here." tabindex="5" required="required"></textarea> 
		      </label>  
			</div>
			<div>		           
		      <button name="submit" type="submit" id="submit">SEND</button> 
			</div>
		   </form>

	</div>
        </div>
    )
}

export default FeedbackForm
