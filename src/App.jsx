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
    <>
      <p>{displayValue}</p>
      <div>
        {/* <button onClick={() => handleInputChange('(')}>(</button>
        <button onClick={() => handleInputChange(')')}>)</button>
        <button onClick={() => handleInputChange('%')}>%</button> */}
        <button onClick={handleClear}>AC</button>
      </div>
      <div>
        <button onClick={() => handleInputChange('7')}>7</button>
        <button onClick={() => handleInputChange('8')}>8</button>
        <button onClick={() => handleInputChange('9')}>9</button>
        <button onClick={() => handleOperatorChange('÷')}>÷</button>
      </div>
      <div>
        <button onClick={() => handleInputChange('4')}>4</button>
        <button onClick={() => handleInputChange('5')}>5</button>
        <button onClick={() => handleInputChange('6')}>6</button>
        <button onClick={() => handleOperatorChange('×')}>×</button>
      </div>
      <div>
        <button onClick={() => handleInputChange('1')}>1</button>
        <button onClick={() => handleInputChange('2')}>2</button>
        <button onClick={() => handleInputChange('3')}>3</button>
        <button onClick={() => handleOperatorChange('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleInputChange('0')}>0</button>
        <button onClick={() => handleInputChange('.')}>.</button>
        <button onClick={() => handleInputChange('=')}>=</button>
        <button onClick={() => handleOperatorChange('+')}>+</button>
      </div>
    </>
  )
}

export default App
