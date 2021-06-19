import NavBar from "../../Components/Navbar/NavBar";
import "./Projects.css";
import { FaReact } from 'react-icons/fa'
import { SiHtml5, SiCss3, SiJavascript } from 'react-icons/si'

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

            
          </div>
    </div>
        
  );
}
