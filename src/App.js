import "./App.css";
import { Boton } from "./componentes/Boton";
import Pantalla from "./componentes/Pantalla";
import BotonClear from "./componentes/BotonClear";
import { useState } from "react";
import { evaluate, isNumeric, log, string } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    if(input == 'Infinity'){
      setInput('');
    } else {
      if ((input === '' && isNumeric(val))){
        setInput(input + val);
      } else if (isNaN(val) && isNaN(input[input.length-1])){
          alert('Ingrese un valor antes del operador')
        } else {
         setInput(input + val);
        }
      }
    }

  const calcularResultado = () => {
    const ultimo = input[input.length-1];
    if (input && typeof input == "string" && ultimo != '.' && ultimo != '-' && ultimo != '+' && ultimo != '*' && ultimo != '/'){
      setInput((evaluate(input)).toString());
    } else {
      alert("Por favor ingrese valores para realizar los calculos")
    }
  };

 

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img
          src="https://i.ibb.co/zRXLyZ0/react-logo.png"
          className="logo"
          alt="logo de React"
        />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input}/>
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
