import { useState, useEffect } from "react";

function Relogio() {
  const [horaAtual, setHoraAtual] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setHoraAtual(new Date());
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  return (
    <div>
      <h2>Relógio</h2>
      <p>{horaAtual.toLocaleTimeString()}</p>
    </div>
  );
}

export default Relogio;
