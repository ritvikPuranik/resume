import React from "react";
import Slider from "react-slick";
import "./opensource.css";

// Card
import { OpenSourceCard } from "./OpenSourceCard/OpenSourceCard";
import { Heading } from "components/Heading/Heading";

const OpenSource = ({ openSource }) => {
  const settings = {
    infinite: true,         
    slidesToShow: 2.2,          
    slidesToScroll: 1,        
    autoplay: true,           
    autoplaySpeed: 3000,      
    speed: 500,              
    centerMode: true,         
    centerPadding: "0",       
    pauseOnHover: true,      
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,    // Show 1 slide on smaller screens
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,    // Show 2 slides on medium screens
        },
      },
    ],
  };

  return (
    <section
      data-aos="fade-right"
      className="opensource-container"
      name="opensource"
      id="opensource"
    >
      <Heading text="Contributions to the Open-Source Community" />
      <div className="opensource-cards">
        {openSource && (
          <Slider {...settings}>
            {openSource.map((repo, index) => (
              <OpenSourceCard key={index} repo={repo} />
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default OpenSource;
