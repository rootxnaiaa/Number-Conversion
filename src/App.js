import React, { useState } from 'react';

function App() {
  const [decimal, setDecimal] = useState('');
  const [octal, setOctal] = useState('');
  const [binary, setBinary] = useState('');
  const [hexadecimal, setHexadecimal] = useState('');

  const handleDecimalChange = (event) => {
    const value = event.target.value;
    setDecimal(value);
    setOctal(parseInt(value, 10).toString(8));
    setBinary(parseInt(value, 10).toString(2));
    setHexadecimal(parseInt(value, 10).toString(16).toUpperCase());
  };

  const handleOctalChange = (event) => {
    const value = event.target.value;
    setOctal(value);
    setDecimal(parseInt(value, 8).toString(10));
    setBinary(parseInt(value, 8).toString(2));
    setHexadecimal(parseInt(value, 8).toString(16).toUpperCase());
  };

  const handleBinaryChange = (event) => {
    const value = event.target.value;
    setBinary(value);
    setDecimal(parseInt(value, 2).toString(10));
    setOctal(parseInt(value, 2).toString(8));
    setHexadecimal(parseInt(value, 2).toString(16).toUpperCase());
  };

  const handleHexadecimalChange = (event) => {
    const value = event.target.value;
    setHexadecimal(value);
    setDecimal(parseInt(value, 16).toString(10));
    setOctal(parseInt(value, 16).toString(8));
    setBinary(parseInt(value, 16).toString(2));
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">Konversi Bilangan</h2>
        <div>
          <label>Decimal:</label>
          <input type="text" value={decimal} onChange={handleDecimalChange} />
        </div>
        <div>
          <label>Octal:</label>
          <input type="text" value={octal} onChange={handleOctalChange} />
        </div>
        <div>
          <label>Binary:</label>
          <input type="text" value={binary} onChange={handleBinaryChange} />
        </div>
        <div>
          <label>Hexadecimal:</label>
          <input type="text" value={hexadecimal} onChange={handleHexadecimalChange} />
        </div>
      </div>
    </div>
  );
}

export default App;
