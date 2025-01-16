import React from "react";

// Styles
import "./services.css";

// Card
import { ServicesCard } from "components/Services/ServicesCard/ServicesCard";
import { Heading } from "components/Heading/Heading";

const Services = ({ services }) => {
  return (
    <section
      data-aos="fade-left"
      className="services-container"
      name="services"
      id="services"
    >
      <Heading text="What I can do for you" />
      <div className="services-cards">
        {services &&
          services?.map(({ title, icon, tags }, index) => (
            <ServicesCard
              key={index}
              image={icon.asset.url}
              title={title}
              tags={tags}
            />
          ))}
      </div>
    </section>
  );
};

export default Services;
