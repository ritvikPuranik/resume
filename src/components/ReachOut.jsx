function ReachOut(){
    return(<div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img className="d-block mx-auto mb-4 rounded" src="./assets/coffee.jpeg" alt="" width="400" height="300" />
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">Get In Touch</h1>
        <p className="lead">Interested in working together? Reach out, lets have a chat.</p>
        <ul id="menu">
          <li><a href="mailto:ritvik.puranik@gmail.com"><i className="fa fa-2x fa-google"></i></a></li>
          <li><a href="https://www.linkedin.com/in/ritvik-puranik/"><i className="fa fa-2x fa-linkedin"></i></a></li>
          <li><a href="https://www.facebook.com/ritvik.puranik"><i className="fa fa-2x fa-facebook"></i></a></li>
        </ul>
      </div>
    </div>
  </div>);
}

export default ReachOut;