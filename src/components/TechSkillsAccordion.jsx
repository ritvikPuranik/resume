import React, { useState } from 'react';

let TechSkillsAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      <div class="mb-4">
        <button class="btn btn-lg btn-light mb-3" onClick={() => handleClick(0)}>
            My role in PreSales/ Solutions Team
          </button>
          {activeIndex === 0 && <div>Some of my work includes writing automation scripts and jobs, building ITSM solutions for customers and developing custom applications as per client requirements. My company is a leader in the conversational AI space and with the advent of ChatGPT, a large part of our activities revolves around interacting with the tool(Prompt Engineering).</div>}
      </div>
      <div>
        <button class="btn btn-lg btn-light mb-3" onClick={() => handleClick(1)}>
          Technical skills that I'm proficient in
        </button>
        {activeIndex === 1 && <div>
                <ul>
                  <li>Avaamo's internal platform for designing Chatbots</li>
                  <li>Javascript(NodeJS)</li>
                  <li>ExpressJS</li>
                  <li>React</li>
                  <li>HTML/CSS</li>
                  <li>MySql and Sequelize(ORM for SQL)</li>
                  <b>Other Tools I'm proficient with</b>
                  <ul>
                    <li>Postman</li>
                    <li>Terminal</li>
                    <li>Bootstrap</li>
                    <li>Github</li>
                    <li>ngrok</li>
                    <li>AWS console</li>
                  </ul>
                </ul></div>}
      </div>
    </div>
  );
};

export default TechSkillsAccordion;