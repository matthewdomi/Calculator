import React from 'react'

const CalculatorKey = (props) => {//Crear los botones con su metodo click
    return (
        <button
            type="button" className="btn btn-outline-dark btn-rounded " 
            data-mdb-ripple-color="dark" 
            onClick={() => props.onClick(props.keyValue)}
        >
            {props.keyValue}{" "}
        </button>
    );
}

export default CalculatorKey