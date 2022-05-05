import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const FooterComponent = () => {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/michael.betancourt.39794/" role="button"
          >
            <FontAwesomeIcon
              icon={faFacebook}
            />
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/michael-betancourt-mora/" role="button"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
            />
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/michaelbeta" role="button">
            <FontAwesomeIcon
              icon={faGithub}
            />
          </a>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundcolor: "rgba(0, 0, 0, 0.2)" }}>
        © 2022 Copyright: Michael Betancourt
      </div>
    </footer>
  )
}

export default FooterComponent