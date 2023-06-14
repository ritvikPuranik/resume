import {startups} from '../content.js';
import Carousel from 'react-bootstrap/Carousel';

const ventureImg = ["ezPark.png", "delOr.png", "naturePure.png"];

const VenturesCarousel = () => {
  return (
    <Carousel>
      {startups && startups.map((item, index)=>{
          return (
            <Carousel.Item style={{marginLeft: "100px"}}>
        <img
          className="d-block"
          src={require("../assets/"+ventureImg[index])}
          alt={item.title}
          style={{backgroundSize: 'auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '200px',
          height: '200px',}}
        />
        <Carousel.Caption>
          <h3 style={{color:"black"}}>{item.title}</h3>
          <p style={{color:"black"}}>{item.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
            );
        })}
    </Carousel>
  );
};

function Ventures(){
    return(<section id="ventures" className="px-4 py-5 my-5 text-center">
    <h1 className="display-5 fw-bold">My Startup/ Freelance Ventures</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">I'm a digital product junky. Over the years, I've used several web and mobile apps across industries and verticals. Eventually, I decided that it would be interesting to try designing and building some of my own.</p>
      <VenturesCarousel />
      <div class="d-grid gap-2 col-6 mx-auto">
        <a href={require("../assets/Ritvik Puranik (1).pdf")} class="btn btn-outline-primary btn-lg" target="_blank" style={{marginTop: "9rem"}}>Download Resume</a>
      </div>
    </div>
  </section>);
}

export default Ventures;