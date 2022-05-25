import React from 'react';
import { Card } from 'react-bootstrap';
import "./Portfolio.css"
import project1 from "../../img/project1.jpg"
import project2 from "../../img/project2.jpg"
import project3 from "../../img/project3.jpg"

const Portfolio = () => {
    return (
      <div className="hero">
        <div className="content">
          <span className="title">MERN Stack Web Developer</span>
          <h1 className="my-name">
            Hello, I’m <span>Samin</span>
          </h1>
          <p className="my-intro">
            Passionate to work as a MERN Stack Web Developer for a software firm
            where I can leverage my talents in Web Design, Front-End and
            Back-End Web Development to give excellent customer service.
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1HwRIZKdZnob4iVQ9vkfjok7DD14qXssm/view"
            className="download-btn"
          >
            Download CV
          </a>

          <div className="my-5">
            <h3 className="text-muted mb-3 my-project text-lg-start text-center">My Projects</h3>

            <div className="d-flex flex-lg-row flex-column  ">
              <Card className="project-card shadow me-0 me-lg-3 ">
                <Card.Body>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://product-analysis-website-saminravi99.netlify.app/"
                    class="project-link"
                  >
                    <span className="d-flex justify-content-center">
                      <Card.Img
                        className="project-img p-2"
                        variant="top"
                        src={project1}
                      />
                    </span>
                    <Card.Title className="text-center text-muted  my-0">
                      FoodDX
                    </Card.Title>
                  </a>
                </Card.Body>
              </Card>
              <Card className="project-card shadow me-0 me-lg-3">
                <Card.Body>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://independent-service-provider-saminravi99-derma-care.netlify.app/"
                    class="project-link"
                  >
                    <span className="d-flex justify-content-center">
                      <Card.Img
                        className="project-img p-2"
                        variant="top"
                        src={project2}
                      />
                    </span>
                    <Card.Title className="text-center text-muted my-0">
                      Derma Care
                    </Card.Title>
                  </a>
                </Card.Body>
              </Card>
              <Card className="project-card shadow">
                <Card.Body>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://warehouse-management-saminravi.web.app/"
                    class="project-link"
                  >
                    <span className="d-flex justify-content-center">
                      <Card.Img
                        className="project-img p-2"
                        variant="top"
                        src={project3}
                      />
                    </span>
                    <Card.Title className="text-center text-muted my-0">
                      Book Fly
                    </Card.Title>
                  </a>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Portfolio;