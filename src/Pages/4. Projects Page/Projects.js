import NavBar from "../../Components/Navbar/NavBar";
import "./Projects.css";
import { FaReact } from 'react-icons/fa'
import { SiHtml5, SiCss3, SiJavascript, SiJquery, SiJava, SiMysql } from 'react-icons/si'

export default function Projects() {
  return (
    <div>
      <NavBar />
          <div className="containerFlex">      
            <div class="card-container">
              <div class="card-top ToDo">
                <span class="project-type">To-Do List</span>
                <div class="blur"></div>
              </div>
              <div class="progress ToDo">
                <span> 0 %</span>
              </div>
              <div class="content">
              <br /><br />
                <div class="summary">
                  Create a simple To-Do App. Add a little flair.
                  Currently incomplete.
                </div>
                <a href="#" class="btn"> Open Project </a>
                <div class="project-info">
                  <div class="info">
                    <span>{<FaReact />}</span>
                    <span>React.js</span>
                  </div>
                  <div class="info">
                    <span>{<SiHtml5 />}{<SiCss3 />}</span>
                    <span>HTML/CSS</span>
                  </div>
                  <div class="info">
                    <span>{<SiJavascript />}</span>
                    <span>JavaScript</span>
                  </div>
                </div>
              </div>
            </div> 

            <div class="card-container">
              <div class="card-top DnD">
                <span class="project-type">D&D Website</span>
                <div class="blur"></div>
              </div>
              <div class="progress DnD">
                <span> 100 %</span>
              </div>
              <div class="content">
              <br /><br />
                <div class="summary">
                  Bootcamp Capstone Project - create a website about a passion of yours.
                </div>
                <a href="https://nyxerian.github.io/Capstone-Project-3-Mod1-Task15/" class="btn"> Open Project </a>
                <div class="project-info">
                  <div class="info">
                    <span>{<SiJquery />}</span>
                    <span>JQuery</span>
                  </div>
                  <div class="info">
                    <span>{<SiHtml5 />}{<SiCss3 />}</span>
                    <span>HTML/CSS</span>
                  </div>
                  <div class="info">
                    <span>{<SiJavascript />}</span>
                    <span>JavaScript</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="card-container">
              <div class="card-top Toyshop">
                <span class="project-type">Toyshop Database</span>
                <div class="blur"></div>
              </div>
              <div class="progress Toyshop">
                <span> 100%</span>
              </div>
              <div class="content">
              <br /><br />
                <div class="summary">
                Created a MySQL Database and programme to access and edit it.
                </div>
                <a href="https://github.com/Nyxerian/Java-MySQL_Toyshop_Program" class="btn"> Open Project </a>
                <div class="project-info">
                  <div class="info">
                    <span>{<SiJava />}</span>
                    <span>Java</span>
                  </div>
                  <div class="info">
                    <span>{<SiMysql />}</span>
                    <span>MySQL</span>
                  </div>
                </div>
              </div>
            </div> 





          </div>




    </div>
        
  );
}
