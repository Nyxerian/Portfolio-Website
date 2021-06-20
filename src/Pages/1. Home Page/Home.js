import './Home.css'
import NavBar from "../../Components/Navbar/NavBar"
import ProfileSplash from "../../Components/ProfileSplash"
import Intro from "../../Components/Blurb/Intro"


export default function Home() {

    return (
        <div>
            <NavBar />
            <h3 className='LightGlow'>Danielle Da Silva</h3>
            <br />
            <div class='flex-container'>
                <div class='Profile-Container'>
                    <ProfileSplash />
                </div>
                <div class='Intro-Container'>
                    <Intro />
                </div>
            </div>
        </div>
    )
}