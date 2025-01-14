import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./opensource.css";

// Card
import { OpenSourceCard } from "./OpenSourceCard/OpenSourceCard";
import { Heading } from "components/Heading/Heading";

const OpenSource = ({ openSource }) => {
  return (
    <section
      data-aos="fade-right"
      className="opensource-container"
      name="opensource"
      id="opensource"
    >
      <Heading text="Contributions to the Open-Source Community" />
      <div className="opensource-cards">
        {openSource &&
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            centerMode
            centerSlidePercentage={35}
            autoPlay
            interval={3000}
            transitionTime={1000}
          >
            {openSource?.map((repo, index) => (
              <OpenSourceCard
                key={index}
                repo={repo}
              />
            ))}
          </Carousel>
        }
      </div>
    </section>
  );
};

export default OpenSource;
