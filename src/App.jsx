import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [displayValue, setDisplayValue] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [previousValue, setPreviousValue] = useState('');
  const [operator, setOperator] = useState(null);

  const handleClear = () => {
    setDisplayValue('');
    setCurrentValue('');
    setPreviousValue('');
    setOperator(null);
  }

  const handleInputChange = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (/[\d.]/.test(value)) {
      const newVal = currentValue + value;
      setCurrentValue(newVal);
      setDisplayValue(newVal);
    }
  }

  const handleOperatorChange = (op) => {
    if (!currentValue) return;
    if (operator) calculateResult();
    setOperator(op);
    setPreviousValue(currentValue);
    setCurrentValue('');
  }

  const calculateResult = () => {
    if (!previousValue || !operator || !currentValue) return;

    const prev = parseFloat(previousValue);
    const curr = parseFloat(currentValue);
    let result;
    switch (operator) {
      case '+': result = prev + curr; break;
      case '-': result = prev - curr; break;
      case '×': result = prev * curr; break;
      case '÷': result = prev / curr; break;
      default: return;
    }
    const resultStr = String(result);
    setDisplayValue(resultStr);
    setCurrentValue(resultStr);
    setPreviousValue('');
    setOperator(null);
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
        <button onClick={() => handleOperatorChange('÷')}>÷</button>
        
        {['4','5','6'].map(n => (
          <button key={n} onClick={() => handleInputChange(n)}>{n}</button>
        ))}
        <button onClick={() => handleOperatorChange('×')}>×</button>

        {['1','2','3'].map(n => (
          <button key={n} onClick={() => handleInputChange(n)}>{n}</button>
        ))}
        <button onClick={() => handleOperatorChange('-')}>-</button>
        <button onClick={() => handleInputChange('0')}>0</button>
        <button onClick={() => handleInputChange('.')}>.</button>
        <button onClick={() => handleOperatorChange('+')}>+</button>
        <button className="equals" onClick={() => handleInputChange('=')}>=</button>
      </div>  

    </div>
  )
}

export default App
