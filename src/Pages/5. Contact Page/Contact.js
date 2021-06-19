import NavBar from "../../Components/Navbar/NavBar"
import './Contact.css'


export default function Contact() {





    return(
        <div>
            <NavBar />
            <div class='container'>
                <div class='flex-item'>
                    <h3 className='ContactGlow'>Contact Me!</h3>
                    <p class="ContactDetails">
                        Durban, South Africa (+2 GMT) <br />
                        <p> Contact Number: (+27) 078 871 4075</p>
                        <a href="mailto:DanielleNyxDaSilva@gmail.com">DanielleNyxDaSilva@gmail.com</a>
                        <br />
                        <a href="https://www.linkedin.com/in/danielle-da-silva-baab0289/">LinkedIn Profile</a>
                        <br />
                        <a href="https://github.com/Nyxerian">Github Profile</a>
                        <br />
                        <a href="https://twitter.com/RamblingDanni">Twitter</a>
                    </p>                    
                </div>
            </div>
            <div class="snowflakes" aria-hidden="true">
                <div class="snowflake">
                ❅
                </div>
                <div class="snowflake">
                ❅
                </div>
                <div class="snowflake">
                ❆
                </div>
                <div class="snowflake">
                ❄
                </div>
                <div class="snowflake">
                ❅
                </div>
                <div class="snowflake">
                ❆
                </div>
                <div class="snowflake">
                ❄
                </div>
                <div class="snowflake">
                ❅
                </div>
                <div class="snowflake">
                ❆
                </div>
                <div class="snowflake">
                ❄
                </div>
            </div>
        </div>
    )
}