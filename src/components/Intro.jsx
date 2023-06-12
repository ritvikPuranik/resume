import React from "react";
import TechSkillsAccordion from "./TechSkillsAccordion.jsx";

function Intro(){
    return (<section className="hero is-white has-text-centered">
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">Software Engineer, Blockchain Developer, and more</h1>
      <h2>I solve real world problems through code.</h2>
      <ul id="menu">
        <li><a href="mailto:ritvik.puranik@gmail.com"><i className="fa fa-2x fa-google"></i></a></li>
        <li><a href="https://www.linkedin.com/in/ritvik-puranik/"><i className="fa fa-2x fa-linkedin"></i></a></li>
        <li><a href="https://www.facebook.com/ritvik.puranik"><i className="fa fa-2x fa-facebook"></i></a></li>
        <li><a href="https://github.com/ritvikPuranik"><i className="fa fa-2x fa-github"></i></a></li>
      </ul>
    </div>
  
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img className="d-block mx-auto mb-4 rounded" src={require('../assets/introPic.jpg')} alt="" width="400" height="500" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">Hi, I’m Ritvik. Nice to meet you.</h1>
          <p className="lead">As someone who's recently out of college, I bring the energy and curiosity that you need in your venture. To know more about me and what I am capable of, continue reading.</p>
        </div>
      </div>
    </div>

    <div className="b-example-divider"></div>

    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img className="d-block mx-auto mb-4 rounded" src={require('../assets/tools.png')} alt="" width="500" height="500" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">I’m a Software Engineer at Avaamo</h1>
          <p className="lead">In my professional journey, I have extensively worked with NodeJS, and created applications using Express. </p>
          <TechSkillsAccordion />
        </div>
      </div>
    </div>

    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img className="d-block mx-auto mb-4 rounded" src={require('../assets/BlockchainTools.png')} alt="" width="500" height="500" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">I aspire to be a Blockchain Developer</h1>
          <p className="lead">As someone who's fascinated by Blockchain technology, I have spent time and effort understanding the tech and developing projects around it.</p>
          <div className="row-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h4>Tools/ Frameworks I have used:</h4>
              <p><ul>
                <li>Ganache</li>
                <li>Metamask</li>
                <li>ReactJS</li>
                <li>Truffle console</li>
                <li>VSCode</li>
                <li>Github</li>
              </ul></p>
            </div>
          </div>           
        </div>
      </div>
    </div>
  </section>);
}

export default Intro;
// export {MyAccordion};
