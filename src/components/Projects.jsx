import {courses, projects} from '../content.js';
import Project from './Project.jsx';
import Course from './Course.jsx';

function Projects(){
    return(<section>
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold">My Work so far</h1>
          <h3>Here are a few projects I've completed and certificates I collected along the way. Want to know more?
            <ul id="menu">
              <li><a href="mailto:ritvik.puranik@gmail.com"><i className="fa fa-google"></i></a></li>
              <li><a href="https://www.linkedin.com/in/ritvik-puranik/"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </h3>
        </div>
  
        <div className="container px-4 py-5" id="hanging-icons">
          <h2 className="pb-2 border-bottom">Projects</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
              {projects && projects.map(item=>{
                  return (<Project key={item.title} title={item.title} description={item.description} github={item.github} />);
              })}
            
          </div>
        </div>
  
  
        <div className="container px-4 py-5" id="hanging-icons">
          <h2 className="pb-2 border-bottom">Certifications</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            {courses && courses.map(item=>{
                  return (<Course key={item.title} title={item.title} description={item.description} link={item.link} img={item.img}/>);
              })}
          </div>
        </div>
      </section>);
}

export default Projects;