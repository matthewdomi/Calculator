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
          <div>
            <h1 className="h1 text-light">Calculadora online sencilla - Nextjs</h1>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default CreateHeaderComponent