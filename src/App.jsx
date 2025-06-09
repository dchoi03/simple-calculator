import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [displayValue, setDisplayValue] = useState('');
  const [expression, setExpression] = useState('');

  const handleClear = () => {
    setDisplayValue('');
    setExpression('');
  }

  const handleInputChange = (value) => {
    if (value === '=') {
      calculateResult();
    } else {
      const newExp = expression + value;
      setExpression(newExp);
      setDisplayValue(newExp);
    }
  }

  const calculateResult = () => {
    if (!expression) return;

    let exp = expression
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/%/g, '/100');
    try {
      const result = eval(exp);
      setDisplayValue(String(result));
      setExpression('');
    } catch (error) {
      setDisplayValue('Error');
    }
  }

  return (
    <div className="calculator">
      <div className="display">
        <p>{displayValue || 0}</p>
      </div>
      <div className="buttons">
        <button onClick={handleClear}>AC</button>
        <button onClick={() => handleInputChange('(')}>(</button>
        <button onClick={() => handleInputChange(')')}>)</button>
        <button onClick={() => handleInputChange('%')}>%</button>

        {['7','8','9'].map(n => (
          <button key={n} onClick={() => handleInputChange(n)}>{n}</button>
        ))}
        <button onClick={() => handleInputChange('÷')}>÷</button>

        {['4','5','6'].map(n => (
          <button key={n} onClick={() => handleInputChange(n)}>{n}</button>
        ))}
        <button onClick={() => handleInputChange('×')}>×</button>

        {['1','2','3'].map(n => (
          <button key={n} onClick={() => handleInputChange(n)}>{n}</button>
        ))}
        <button onClick={() => handleInputChange('-')}>-</button>
        <button onClick={() => handleInputChange('0')}>0</button>
        <button onClick={() => handleInputChange('.')}>.</button>
        <button onClick={() => handleInputChange('+')}>+</button>
        <button className="equals" onClick={() => handleInputChange('=')}>=</button>
      </div>

    </div>
  )
}

export default App