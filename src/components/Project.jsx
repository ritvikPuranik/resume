function Project(props){
    return (<div className="col d-flex align-items-start">
    <div>
      <h3 className="fs-2">{props.title}</h3>
      <p>{props.description}</p>
      <a href={props.github} className="btn btn-info">
        View on GitHub
      </a>
    </div>
  </div>);
}

export default Project;