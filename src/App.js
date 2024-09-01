import React, { useState } from "react";
import "./App.css";

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);

  const calcularIMC = (e) => {
    e.preventDefault();
    if (peso && altura) {
      const alturaEmMetros = altura / 100;
      const imcCalculado = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2);
      setImc(imcCalculado);
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calcularIMC}>
        <div>
          <label>Peso (kg): </label>
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Ex: 70"
          />
        </div>
        <div>
          <label>Altura (cm): </label>
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Ex: 175"
          />
        </div>
        <button type="submit">Calcular IMC</button>
      </form>
      {imc && (
        <div>
          <h2>Seu IMC é: {imc}</h2>
          <p>
            {imc < 18.5
              ? "Abaixo do peso"
              : imc < 24.9
              ? "Peso normal"
              : imc < 29.9
              ? "Sobrepeso"
              : "Obesidade"}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;