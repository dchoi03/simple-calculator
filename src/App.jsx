import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [displayValue, setDisplayValue] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [operator, setOperator] = useState(null)
  const [previousValue, setPreviousValue] = useState(null)

  const handleClear = () => {
    setDisplayValue('')
    setInputValue('')
  }

  const handleInputChange = (event) => {
    const value = event.target.value
    setInputValue(value)
    // Here you can add logic to handle the input value, e.g., validation or calculation

  }

  return (
    <>
      <p>{displayValue}</p>
      <div>
        <button onClick={() => setDisplayValue(displayValue + '(')}>(</button>
        <button onClick={() => setDisplayValue(displayValue + ')')}>)</button>
        <button onClick={() => setDisplayValue(displayValue + '%')}>%</button>
        <button onClick={handleClear}>AC</button>
      </div>
      <div>
        <button onClick={() => setDisplayValue(displayValue + '7')}>7</button>
        <button onClick={() => setDisplayValue(displayValue + '8')}>8</button>
        <button onClick={() => setDisplayValue(displayValue + '9')}>9</button>
        <button onClick={() => setDisplayValue(displayValue + '÷')}>÷</button>
      </div>
      <div>
        <button onClick={() => setDisplayValue(displayValue + '4')}>4</button>
        <button onClick={() => setDisplayValue(displayValue + '5')}>5</button>
        <button onClick={() => setDisplayValue(displayValue + '6')}>6</button>
        <button onClick={() => setDisplayValue(displayValue + '×')}>×</button>
      </div>
      <div>
        <button onClick={() => setDisplayValue(displayValue + '1')}>1</button>
        <button onClick={() => setDisplayValue(displayValue + '2')}>2</button>
        <button onClick={() => setDisplayValue(displayValue + '3')}>3</button>      
        <button onClick={() => setDisplayValue(displayValue + '-')}>-</button>      
      </div>
      <div>
        <button onClick={() => setDisplayValue(displayValue + '0')}>0</button>
        <button onClick={() => setDisplayValue(displayValue + '.')}>.</button>
        <button onClick={() => setDisplayValue(displayValue + '=')}>=</button>      
        <button onClick={() => setDisplayValue(displayValue + '+')}>+</button>      
      </div>  
    </>
  )
}

export default App
