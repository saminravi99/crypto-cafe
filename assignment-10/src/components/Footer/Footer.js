import "./Footer.css"
import React from 'react';

const Footer = () => {


  // Using Function to get Year 
    const date = new Date();
    const year = date.getFullYear();
    
    return (
      <div className="mt-5 mb-3">
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 h-100 text-center text-lg-left my-auto mx-auto">
                <ul className="list-inline mb-2">
                  <li className="list-inline-item">
                    <a href="/about">About</a>
                  </li>
                  <li className="list-inline-item">&sdot;</li>
                  <li className="list-inline-item">
                    <a href="/contact">Contact</a>
                  </li>
                  <li className="list-inline-item">&sdot;</li>
                  <li className="list-inline-item">
                    <a href="/terms">Terms of Use</a>
                  </li>
                  <li className="list-inline-item">&sdot;</li>
                  <li className="list-inline-item">
                    <a href="/policy">Privacy Policy</a>
                  </li>
                </ul>
                <h5 className="text-muted small mb-4 mb-lg-0">
                  &copy; Derma Care {year}. All Rights Reserved.
                </h5>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
};

export default Footer;