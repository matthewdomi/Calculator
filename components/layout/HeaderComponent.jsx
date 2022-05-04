import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'

const CreateHeaderComponent = () => {
  return (

    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-black mb-3">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">
              <FontAwesomeIcon
                icon={faCalculator}
                style={{ fontSize: 85, color: "white" }}
              />
            </a>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Inicio</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#">
                  <a className="nav-link" >Contacto</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#">
                  <a className="nav-link" >Nosotros</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default CreateHeaderComponent