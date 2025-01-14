import React from "react"

// Styles
import "./aboutme.css"

// components
import { Heading } from "components/Heading/Heading"

const AboutMe = ({ about }) => {
  return (
    <section
      data-aos="fade-right"
      className="aboutme"
      name="aboutme"
      id="aboutme"
    >
      <Heading text="About Me" style={{ padding: "3rem" }} />
      <h3>Enterprise Gen AI and Blockchain developer with 3+ years in the MERN stack, specializing in secure dApps and ERC20-compliant solutions. At Avaamo, I built call center automation for 450+ BPO agents in North America and led the development of Datasync AI, integrating Avaamo's RAG pipelines with CMS platforms like SharePoint and ServiceNow. Worked on projects contributing over 1.5 million ARR in company revenue.</h3>
    </section>
  )
}

export default AboutMe
