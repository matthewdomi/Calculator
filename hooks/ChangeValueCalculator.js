import { useState, useEffect } from 'react'

function ChangeValueCalculator() {

    const [prevValue, setPrevValue] = useState(null);
    const [nextValue, setNextValue] = useState("0");
    const [op, setOp] = useState(null);

    useEffect(() => { }, [op, nextValue, prevValue]);

    const CalculatorOperations = {/*Almacena las operaciones de la calculadora y realiza la operacion*/
        "÷": (firstValue, secondValue) => firstValue / secondValue,
        "x": (firstValue, secondValue) => firstValue * secondValue,
        "+": (firstValue, secondValue) => firstValue + secondValue,
        "-": (firstValue, secondValue) => firstValue - secondValue,
        "=": (firstValue, secondValue) => secondValue,
    };

    const performOperation = () => {
        let temp = CalculatorOperations[op](// Realiza la operacion de los valores almacenados
            parseFloat(prevValue),
            parseFloat(nextValue)
        );
        setOp(null);// Setea la operacion
        setNextValue(String(temp));//vuelve 0 el siguiente valot
        setPrevValue(null);//el valor anterior lo vuelve null
    };

    const handleNum = (number) => {//Si el valor es 0, se mantiene asi, si no se le suma al valor que estaba antes
        setNextValue(nextValue === "0" ? String(number) : nextValue + number);
    };

    const insertDot = () => {
        if (!/\./.test(nextValue)) {
            setNextValue(nextValue + ".");
        }
    };
    const percentage = () => {
        setNextValue(parseFloat(nextValue) / 100);
        if (prevValue && nextValue === "") {
            setPrevValue(parseFloat(prevValue) / 100);
        }
    };
    const changeSign = () => {
        setNextValue(parseFloat(nextValue) * -1);
    };
    const clearData = () => {
        setNextValue("0");
        setPrevValue(0);
    };
    const clearLast = () => {
        const newNextValue = nextValue.slice(0,nextValue.length-1);
        if(newNextValue.length>0) setNextValue(newNextValue);
        else setNextValue("0");
    };
    const handleOperation = (value) => {//Recibe el valor ingresado
       
        if (Number.isInteger(Number(value))) {// Si el valor ingresado es numero
            handleNum(parseInt(value, 10));// Se agrega el valor ingresado en pantalla
        } else if (value in CalculatorOperations) {// Si no es numero, quiere decir que es una operacion que se encuentra en CalculatorOperations
            if (op === null) {//Si aun no existe operacion
                setOp(value);// asignamos
                setPrevValue(nextValue);//agregamos el valor previo con el numero que este ingresado
                setNextValue(""); //No asignamos valor a mostrar
            }

            if (op) {// Si ya habia una operacion antes
                setOp(value);// agregamos la operacion
            }
            if (prevValue && op && nextValue) {//Si ya esxiste una operacion, un valor anterior y se ingreso otro valor
                performOperation();
            }
            //Si no son operacion o valores ejecuta lo siguiente
        } else if (value === "c") {//Borra los valores almacenados 
            clearData();
        } else if (value === "Retr"){//Borra el ultimo valor
            clearLast();
        } else if (value === "\xB1") {//asigna signo al valor
            changeSign();
        } else if (value === ".") {// agrega punto al valor
            insertDot();
        } else if (value === "%") {//Lo transforam en porcentaje
            percentage();
        }

    };

    return [handleOperation, nextValue] /*Retorna la funcion manejar la operacion junto con el valor a 
    mostrar en pantalla*/
}

export default ChangeValueCalculator