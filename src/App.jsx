import { useState } from 'react'
import './App.css'

function App() {
  const [displayValue, setDisplayValue] = useState('');
  const [expression, setExpression] = useState('');
  const [justCalculated, setJustCalculated] = useState(false);

  const handleClear = () => {
    setDisplayValue('');
    setExpression('');
  }

  const handleInputChange = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (justCalculated && /[+\-×÷]/.test(value)) {
      const newExp = displayValue + value;
      setExpression(newExp);
      setDisplayValue(newExp);
      setJustCalculated(false);
    } else {
      const newExp = expression + value;
      setExpression(newExp);
      setDisplayValue(newExp);
      setJustCalculated(false);
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
      setJustCalculated(true);
      setExpression('');
    } catch (error) {
      setDisplayValue('Error');
    }
  }

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-gray-100">
      <div className='w-80 p-6 bg-gray-500 shadow-lg rounded-lg'>
        <div className="bg-gray-800 text-amber-50 text-right text-3xl px-4 py-3 mb-4 rounded-lg font-mono">
          {displayValue || 0}
        </div>
        <div className="grid grid-cols-4 gap-5 text-3xl font-bold text-white">
          <button onClick={handleClear} className=' btn'>AC</button>
          <button onClick={() => handleInputChange('(')} className=' btn '>(</button>
          <button onClick={() => handleInputChange(')')} className=' btn '>)</button>
          <button onClick={() => handleInputChange('%')} className=' btn '>%</button>

          {['7','8','9'].map(n => (
            <button key={n} onClick={() => handleInputChange(n)} className=' btn '>{n}</button>
          ))}
          <button onClick={() => handleInputChange('÷')} className=' btn ' >÷</button>

          {['4','5','6'].map(n => (
            <button key={n} onClick={() => handleInputChange(n)} className=' btn '>{n}</button>
          ))}
          <button onClick={() => handleInputChange('×')} className=' btn ' >×</button>

          {['1','2','3'].map(n => (
            <button key={n} onClick={() => handleInputChange(n)} className=' btn '>{n}</button>
          ))}
          <button onClick={() => handleInputChange('-')} className=' btn '>-</button>
          <button onClick={() => handleInputChange('0')} className=' btn '>0</button>
          <button onClick={() => handleInputChange('.')} className=' btn '>.</button>
          <button onClick={() => handleInputChange('+')} className=' btn '>+</button>
          <button className="equals btn" onClick={() => handleInputChange('=')}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App