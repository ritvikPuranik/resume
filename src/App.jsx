import React, { useEffect, useState } from "react"

// Components
import Nav from "components/Nav/Nav"
import Home from "components/Home/Home"
import Menu from "components/Menu/Menu"
import Portfolio from "components/Portfolio"
import Contact from "components/Contact/Contact"
import Services from "components/Services/Services"
import OpenSource from "components/OpenSource/OpenSource"
import AboutMe from "components/AboutMe/AboutMe"
import Blog from "components/Blog/Blog"
import Footer from "components/Footer/Footer"
// Sanity
import sanityClient from "client"

// Animation
import Aos from "aos"
import "aos/dist/aos.css"

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [openSource, setOpenSource] = useState([]);


  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type in ["portfolio","service","openSource"]]{
          _type == "portfolio" => {
            id,
            title,
            tagline,
            category,
            liveUrl,
            repositoryUrl,
            img{
              asset->{url}
            },
          },
          _type == "service" => {
            title,
            tags,
            icon{
              asset->{url}
            },
          },
          _type == "openSource" => {
            repository,
            stars,
            commitLink,
            contributionDate,
          },
        }
        `
      )
      .then((data) => {
        let tempOpenSource = [];
        let tempProjects = [];
        let tempServices = [];

        console.log("data>>", data);
        data.map((doc) => {
          if(doc.repository) {
            // It is an openSource project
            tempOpenSource.push(doc)
          } else if (doc.liveUrl) {
            // It is a project
            tempProjects.push(doc)
          } else {
            tempServices.push(doc)
          }

          return null
        });
        setOpenSource(tempOpenSource);
        setProjects(tempProjects)
        setServices(tempServices)
      })
      .catch(console.error)
  }, [])

  useEffect(() => {
    Aos.init({ duration: 2000, offset: 10 })
  }, [])

  return (
    <div className="app-container">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <AboutMe />
      <Portfolio projects={projects} />
      <OpenSource openSource={openSource} />
      <Services services={services} />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
