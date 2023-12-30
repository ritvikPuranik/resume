import React from "react";

const courseImg = ["webDevBootcamp.png", "blockchainAZ.png", "ethDevBootcamp.png"];


const divStyle = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '300px',
  height: '200px',
  borderRadius: '20px'
};

function Course(props){
    return (<div className="col d-flex align-items-start">
    <div>
      <img src={require("../assets/"+courseImg[props.index])} alt={props.title} style={divStyle} />
      <h4 className="fs-2 mt-3" style={{"min-height": "75px"}}>{props.title}</h4>
      <p className="height-course-desc">{props.description}</p>
      <a href={props.certificate} className="btn btn-info">
        View Certificate
      </a>
    </div>
  </div>);

}


export default Course;