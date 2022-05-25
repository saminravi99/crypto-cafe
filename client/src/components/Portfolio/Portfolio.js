import React from "react";
import { Card, ProgressBar } from "react-bootstrap";
import "./Portfolio.css";
import project1 from "../../img/project1.jpg";
import project2 from "../../img/project2.jpg";
import project3 from "../../img/project3.jpg";

const Portfolio = () => {
  return (
    <div className="hero">
      <div className="content">
        <div className="d-lg-flex ">
          <div>
            <span className="title">MERN Stack Web Developer</span>
            <h1 className="my-name">
              Hello, I’m <span>Samin</span>
            </h1>
            <p className="my-intro">
              Passionate to work as a MERN Stack Web Developer for a software
              firm where I can leverage my talents in Web Design, Front-End and
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
          </div>

          <div className="my-info">
            <Card className="shadow" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <div>
                    <span>
                      <strong>Email:</strong>
                    </span>{" "}
                    <span>saminisrar1@gmail.com</span>
                  </div>
                  
                </Card.Subtitle>
                <Card.Text>
                  <div>
                    <div className="mb-2">
                      <span>
                        <strong>Mongo:</strong>
                      </span>
                      <ProgressBar animated variant="success" now={70} />
                    </div>
                    <div className="mb-2">
                      <span>
                        <strong>Express:</strong>
                      </span>
                      <ProgressBar animated variant="danger" now={80} />
                    </div>
                    <div className="mb-2">
                      <span>
                        <strong>React:</strong>
                      </span>
                      <ProgressBar animated variant="info" now={90} />
                    </div>
                    <div className="mb-2">
                      <span>
                        <strong>Node:</strong>
                      </span>
                      <ProgressBar animated variant="warning" now={60} />
                    </div>
                  </div>
                </Card.Text>
                <h6 className="text-muted">
                  <strong>Address : Dhaka, Bangladesh</strong>
                </h6>
                
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="my-5">
          <h3 className="text-muted mb-3 my-project text-lg-start text-center">
            My Projects
          </h3>

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
