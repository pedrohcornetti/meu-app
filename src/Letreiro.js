import { useState, useEffect } from "react";

function Letreiro() {
  const [texto, setTexto] = useState("");
  const frase = "Conheça a Fatec";
  let index = 0;

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTexto((prev) => {
        if (prev.length < frase.length) {
          return prev + frase[index++];
        } else {
          index = 0;
          return ""; 
        }
      });
    }, 200); 

    return () => clearInterval(intervalo); 
  }, []);

  return (
    <div>
      <h3>Letreiro</h3>
      <p>{texto}</p>
    </div>
  );
}

export default Letreiro;
