import React, { useState } from "react";
import "./Contador.css"; 

function Contador() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const total = homens + mulheres;

  const incrementarHomens = () => setHomens(homens + 1);
  const decrementarHomens = () => homens > 0 && setHomens(homens - 1);

  const incrementarMulheres = () => setMulheres(mulheres + 1);
  const decrementarMulheres = () => mulheres > 0 && setMulheres(mulheres - 1);

  const resetar = () => {
    setHomens(0);
    setMulheres(0);
  };

  return (
    <div className="contador">
      <h1>Total</h1>
      <h2>{total}</h2>
      <button onClick={resetar} className="resetar">
        🔄
      </button>

      <div className="grupo">
        <div className="pessoa">
          <img src="https://cdn.icon-icons.com/icons2/550/PNG/512/business-color_business-contact-86_icon-icons.com_53469.png" alt="Homem" />
          <div>
            <button className="button-add" onClick={incrementarHomens}>+</button>
            <button className="button-remove" onClick={decrementarHomens}>-</button>
          </div>
          <p>Homens</p>
          <h3>{homens}</h3>
        </div>

        <div className="pessoa">
          <img src="https://img.freepik.com/vetores-premium/icone-de-mulher-feminina-de-mulher-de-negocios_24877-11467.jpg?w=900" alt="Mulher" />
          <div>
            <button className="button-add" onClick={incrementarMulheres}>+</button>
            <button className="button-remove" onClick={decrementarMulheres}>-</button>
          </div>
          <p>Mulheres</p>
          <h3>{mulheres}</h3>
        </div>
      </div>
    </div>
  );
}

export default Contador;
