import React, { useState } from 'react';

const Logica = () => {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  const determinarMayor = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (num1 > num2) {
      setResultado(`El número mayor es: ${num1}`);
    } else if (num2 > num1) {
      setResultado(`El número mayor es: ${num2}`);
    } else {
      setResultado('Los números son iguales');
    }
  };

  return (
    <div>
      <h1>Determinar el Número Mayor</h1>
      <input
        type="number"
        value={numero1}
        onChange={(e) => setNumero1(e.target.value)}
        placeholder="Ingrese el primer número"
      />
      <input
        type="number"
        value={numero2}
        onChange={(e) => setNumero2(e.target.value)}
        placeholder="Ingrese el segundo número"
      />
      <button onClick={determinarMayor}>Determinar</button>
      <p>{resultado}</p>
    </div>
  );
};

export default Logica;