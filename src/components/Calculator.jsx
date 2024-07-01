// src/Calculator.js
import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'AC') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="w-80 p-4 bg-gray-800 rounded-lg">
        <div className="mb-4 text-right text-2xl">{input}</div>
        <div className="mb-4 text-right text-4xl">{result}</div>
        <div className="grid grid-cols-4 gap-2">
          {['%', '/', '*', 'AC', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=', '0', '.'].map((value) => (
            <button
              key={value}
              onClick={() => handleButtonClick(value)}
              className={`p-4 text-xl font-semibold ${
                value === '=' || value === '+' || value === '-' || value === '*' || value === '/'
                  ? 'bg-orange-500'
                  : 'bg-gray-700'
              } rounded-lg hover:bg-gray-600`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
