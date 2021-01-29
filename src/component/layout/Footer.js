import React from 'react'

const Footer = () => {
  return (
      <footer className="container py-5">
          <div className="row">
              <div className="col-12 col-md">
                  <small className="d-block mb-3 text-muted">Made by</small>
              </div>
              <div className="col-6 col-md">
                  <h5>Ayush Jain</h5>
              </div>
              <div className="col-6 col-md">
                  <h5>Follow me</h5>
                  <ul className="list-unstyled text-small">
                      <li><a target="_blank" rel="noopener noreferrer" className="text-muted" href="https://www.linkedin.com/in/jos%C3%A9raffalli/">Linkedin</a></li>
                      <li><a className="text-muted" href="#">GitHub</a></li>
                      <li><a className="text-muted" href="#">Ayush Jain</a></li>
                  </ul>
              </div>
          </div>
      </footer>
  )
}
export default Footer
