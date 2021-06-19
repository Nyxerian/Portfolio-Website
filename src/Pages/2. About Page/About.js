import React from "react";
import NavBar from "../../Components/Navbar/NavBar"
import './About.css'

import Credo from '../../Images/Slide Images/My Credo.jpg'
import SlytherinDnD from '../../Images/Slide Images/Slytherin D&D.jpg'

export default function About() {


    return (
        <div>
            <NavBar />
            <div class='flex-container'>
                <div class='flex-item-left'>
                    <h2 style={{fontSize:30, textAlign:'center', textDecoration:'underline'}}>About Me</h2>
                    <br />
                    <h3 style={{textDecoration:'underline'}}>Career Goals</h3>
                    <p>
                        I currently work mostly with HTML, CSS and JavaScript, though in any free time, I learn as much as I can about React.js and how I can improve. I love to fiddle around and see what works and what doesn't.
                        {<br />}
                        {<br />}
                        In the future, I would like to continue learning React.js and also branch into React Native or another mobile app development tool. Other languages that I am interested in learning are: Python, C#, and C++ for use in game development.
                    </p>
                                       
                    <h3 style={{textDecoration:'underline', textAlign:'center'}}>Life Goals</h3>
                    <p>
                        Currently, I live on the South Coast of Durban, South Africa, in a rather remote town. Short term goals are to move back to Cape Town where fiber is widely available, as well as being close to work opportunities.
                        {<br />}
                        {<br />}
                        In the long term, I am opent to relocation outside of South Africa and would welcome the opportunity to immigrate.
                    </p>
                    {<br />}                   
                    <h3 style={{textDecoration:'underline', textAlign:'right'}}>Outside of Work Interests</h3>
                    <p>
                        I am an avid Dungeons and Dragons player and enjoy character creations and building stories around their adventures. I am facsinated by anything of Japanese culture or cuisine - therefore, I do love sushi!{<br />}
                        My favorite holiday is Halloween as both myself and those around me have a keen interest in creation and special effects make-up. It helps that many of those friends, as well as my husband, work in costume and prop design and fabrication for film!
                        {<br />}
                        {<br />}
                        Being out with my group of friends is important for unwinding, usually either at the D&D table or for a night out with some drinks and Karaoke - caring for my own sense of wellbeing is important to the continuation of my career and life goals. I love to travel and spent many years living in other countries, including Tanzania, Zambia and China. I very rarely experience cultural shock and enjoy learning about countries and their languages.
                    </p>
                    <br />
                </div>
                <div class='flex-item-right'>                   
                    <div id="img1">
                        <div>
                            <img 
							className="one"
                            src={Credo} 
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'fit',
                                alignContent: 'center',
                                }}                           
                            />
                        </div>
                    </div>
                    <div id="img2">
                        <div>
                            <img 
							className="one"
                            src={SlytherinDnD} 
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'fit',
                                alignContent: 'center',
                                }}                           
                            />
                        </div>
                    </div>                                                                 
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