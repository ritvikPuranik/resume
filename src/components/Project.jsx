const projectImg = ["family-wallet.png","vote-system.png","todolist.png"];

const divStyle = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '300px',
  height: '200px',
  borderRadius: '20px'
};

function Project(props){
    return (<div className="col d-flex align-items-start">
    <div>
      <img src={require("../assets/"+projectImg[props.index])} alt="img-not-found" style={divStyle} />
      <h3 className="fs-2 mt-3">{props.title}</h3>
      <p className="height-project-desc">{props.description}</p>
      <a href={props.github} className="btn btn-info">
        View on GitHub
      </a>
    </div>
  </div>);
}

export default Project;