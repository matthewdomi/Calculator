import React from 'react'
import Head from 'next/head'
import Calculator from '../../styles/Calculator.module.css';

const CreateIndex = () => {
  return (
    <div>
      <Head>
        <title>Calculadora online</title>
        <meta name="description" content="Calculadora online hecha en next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {CreatCalculator()}

    </div>
  )
}
const CreatCalculator = () => {

  return (
    <div className={Calculator.calculator}>
      <div className={Calculator.content}>
        <div className={Calculator.clearWithScreen}>
          <button type="button" className="btn btn-outline-danger btn-rounded clear" data-mdb-ripple-color="dark">C</button>
          <input type="text" id="valor" name="numeros" className={Calculator.screen} readonly/>
        </div>
        <div className={Calculator.buttonGroup+" row"} name="buttonGroup">
          <div className="col">
            <button type="button" className="btn btn-outline-info btn-rounded " data-mdb-ripple-color="dark">7</button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-outline-info btn-rounded " data-mdb-ripple-color="dark">8</button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-outline-info btn-rounded " data-mdb-ripple-color="dark">9</button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-outline-info btn-rounded " data-mdb-ripple-color="dark">+</button>
          </div>
          <div className="w-100"></div>
          <div className="col">
            <button type="button" className="btn btn-outline-info btn-rounded " data-mdb-ripple-color="dark">4</button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-outline-info btn-rounded " data-mdb-ripple-color="dark">5</button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-outline-info btn-rounded " data-mdb-ripple-color="dark">6</button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-outline-info btn-rounded " data-mdb-ripple-color="dark">-</button>
          </div>
          <div className="w-100"></div>
          <div className="col">
            <button type="button" className="btn btn-outline-info btn-rounded " data-mdb-ripple-color="dark">1</button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-outline-info btn-rounded " data-mdb-ripple-color="dark">2</button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-outline-info btn-rounded " data-mdb-ripple-color="dark">3</button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-outline-info btn-rounded " data-mdb-ripple-color="dark">÷</button>
          </div>
          <div className="w-100"></div>
          <div className="col">
            <button type="button" className="btn btn-outline-info btn-rounded " data-mdb-ripple-color="dark">0</button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-outline-info btn-rounded " data-mdb-ripple-color="dark">.</button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-outline-info btn-rounded " data-mdb-ripple-color="dark">=</button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-outline-info btn-rounded " data-mdb-ripple-color="dark">x</button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default CreateIndex