
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
      <img src={props.img} alt={props.title} style={divStyle} />
      <h4 className="fs-2 mt-3">{props.title}</h4>
      <p>{props.description}</p>
      <a href={props.link} className="btn btn-info">
        View Certificate
      </a>
    </div>
  </div>);

}

export default Course;