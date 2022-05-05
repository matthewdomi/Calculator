import React from 'react'
import Head from 'next/head'
import Calculator from '../../styles/Calculator.module.css';
import CalculatorKey from "./CalculatorKey";
import ChangeValueCalculator from "../../hooks/ChangeValueCalculator";

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
  const [handleOperation,nextValue] = ChangeValueCalculator();
console.log(nextValue);
  return (
    <div className={Calculator.calculator}>
      <div className={Calculator.content}>
        <div className={Calculator.clearWithScreen}>
          <input type="number" readOnly="readonly" name="screnn" className={Calculator.screen} placeholder={nextValue} />
        </div>
        <div className={Calculator.buttonGroup + " row"} name="buttonGroup">
          <div className="col">
            <CalculatorKey keyValue={"%"} onClick={handleOperation} />
          </div>
          <div className="col">
            <CalculatorKey keyValue={"c"} onClick={handleOperation} />
          </div>
          <div className="col">
            <CalculatorKey keyValue={"Retr"} onClick={handleOperation} />
          </div>
          <div className="col">
            <CalculatorKey keyValue={"÷"} onClick={handleOperation} />
          </div>
          <div className="w-100"></div>
          <div className="col">
            <CalculatorKey keyValue={"7"} onClick={handleOperation} />
          </div>
          <div className="col">
            <CalculatorKey keyValue={"8"} onClick={handleOperation} />
          </div>
          <div className="col">
            <CalculatorKey keyValue={"9"} onClick={handleOperation} />
          </div>
          <div className="col">
            <CalculatorKey keyValue={"x"} onClick={handleOperation} />
          </div>
          <div className="w-100"></div>
          <div className="col">
            <CalculatorKey keyValue={"4"} onClick={handleOperation} />
          </div>
          <div className="col">
            <CalculatorKey keyValue={"5"} onClick={handleOperation} />
          </div>
          <div className="col">
            <CalculatorKey keyValue={"6"} onClick={handleOperation} />
          </div>
          <div className="col">
            <CalculatorKey keyValue={"-"} onClick={handleOperation} />
          </div>
          <div className="w-100"></div>
          <div className="col">
            <CalculatorKey keyValue={"1"} onClick={handleOperation} />
          </div>
          <div className="col">
            <CalculatorKey keyValue={"2"} onClick={handleOperation} />
          </div>
          <div className="col">
            <CalculatorKey keyValue={"3"} onClick={handleOperation} />
          </div>
          <div className="col">
            <CalculatorKey keyValue={"+"} onClick={handleOperation} />
          </div>
          <div className="w-100"></div>
          <div className="col">
            <CalculatorKey keyValue={"\xB1"} onClick={handleOperation} />
          </div>
          <div className="col">
            <CalculatorKey
              keyValue={0}
              onClick={handleOperation}
            />
          </div>
          <div className="col">
            <CalculatorKey
              keyValue={"."}
              onClick={handleOperation}
            />
          </div>
          <div className="col">
            <CalculatorKey keyValue={"="} onClick={handleOperation} />
          </div>
        </div>
      </div>
    </div>
  )

}

export default CreateIndex