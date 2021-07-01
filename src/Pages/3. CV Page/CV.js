import NavBar from "../../Components/Navbar/NavBar"
import './CV.css'
import { BsFillPersonFill } from 'react-icons/bs';
import { GiBrain } from 'react-icons/gi'
import { FaGraduationCap, FaCertificate } from 'react-icons/fa'
import { BiDetail } from 'react-icons/bi'

import AlwaysLearning from '../../Images/AlwaysLearning.png'

export default function CV() {

    return (
        <div>
            <NavBar />
            <div class='flex-container'>
            
            <div class="cv" style={{display:'inline'}}>
            <img 
                src={AlwaysLearning}
                className="BannerImg"
                data-tilt data-tilt-max="20" data-tilt-speed="100" data-tilt-perspective="1000"
                />
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-8"></div>
                        <header class="cv-header">
                            <div class="cv-header__text-container">
                                <h1 class="cv-header__name">Danielle Da Silva 
                                <span class="cv-header__name--phonetic">(Danni)</span></h1> 
                                <p class="cv-header__job-title">Front-end developer</p>
                            </div>
                        </header>
                <div class='flex-item-left'>
                    <section class="cv-section">
                            <h2 class="cv-section__title">{<BsFillPersonFill />} Profile</h2>
                            <div class="cv-section__wrapper">
                                <p class="cv-section__description">
                                    I am 34 years old and originally from Cape Town, South Africa. My previous career was in Education, both in teaching children, teens and adults English and in admin and training for for adults in business and basic computer usage. 
                                    {<br />}{<br />}
                                    I have always dabbled in development and app design but actively began pursuing it toward the end of 2019. I am now looking for a company that will assist in my growth and constant learning as a developer.

                                </p>
                            </div>
                    </section>
                    <section class="cv-section">
                            <h2 class="cv-section__title">{<GiBrain />} Experience</h2>
                            <div class="cv-section__wrapper">
                                <div class="cv-section__experience">
                                    <p class="cv-section__role">New Era Brand Management – Lead Front-end Developer</p>
                                    <p class="cv-section__period">February 2021 – Present</p>
                                    <p class="cv-section__description">Front-end and UI development and deployment.</p>
                                    <p class="cv-section__role">Freelance – Front-end Developer</p>
                                    <p class="cv-section__period">July 2020 – February 2021</p>
                                    <p class="cv-section__description">Front-end and UI development and deployment.</p>
                                </div>
                                </div>
                    </section>
                    <section class="cv-section">
                                <h2 class="cv-section__title">{<FaGraduationCap />} Education</h2>
            
                            <div class="cv-section__wrapper">        
            
                            <div class="cv-section__experience">
                                <p class="cv-section__role">HyperionDev Software Engineering Course</p>
                                <p class="cv-section__period">2020 – 2021</p>
                                <p class="cv-section__description">NQF 5 Accredited course with South African Board of Education</p>
                                <br/>
                                <p class="cv-section__role">Dyna Training: Generic Management</p>
                                <p class="cv-section__period">2017 – 2019</p>
                                <p class="cv-section__description">NQF 4 Accredited course with South African Board of Education</p>
                            </div>
                        </div>
                    </section>
                    <section className="cv-section">
                        <h2 class="cv-section__title">{<FaCertificate />} Additional Certifications</h2>
                        <div class="cv-section__wrapper">
                        <div class="cv-section__experience">
                                <p class="cv-section__role">Google Ads Search Certification</p>
                                <p class="cv-section__period">2021</p>
                                <p class="cv-section__description">Official certification from Google Skills platform.</p>
                                <br/>
                                <p class="cv-section__role">TEFL Diploma</p>
                                <p class="cv-section__period">2013</p>
                                <p class="cv-section__description">230hr Diploma in Teaching English as a Foreign Language.</p>
                                <br/>
                            </div>
                            
                        </div>
                    </section>
                </div>
                          

        <section class="cv-section">
        <h2 class="cv-section__title" style={{textAlign:'left'}}>{<BiDetail />} Notable Extras</h2>
            <div class="cv-section__wrapper">
            <h2 style={{textAlign:'left'}}>Skills</h2>
            <p class="cv-sidebar-section__description">Reactjs, HTML, CSS, JavaScript, jQuery, Reactstrap, SCSS, Git.</p>
            </div>
        </section>
        
        <section class="cv-section">
        <div class="cv-section__wrapper">
          <h2 style={{textAlign:'left'}}>Languages</h2>
          <p class="cv-sidebar-section__description">English - Native Level, Afrikaans - Conversational Level, French - A2 level, Swedish - Basic Reading only.</p>            
        </div>
        </section>

        <section class="cv-section">
        <div class="cv-section__wrapper">
          <h2 style={{textAlign:'left'}}>Salary Expectations</h2>
          <p class="cv-sidebar-section__description">Minimum amounts: ZAR 20,000 | US$ 1,400 | £ 1,050</p>            
        </div>
        </section>

      </div>
    </div>
  </div>
  </div>
  </div>
    )
}
