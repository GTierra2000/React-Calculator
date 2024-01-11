import React, {useState} from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import './App.css';

// Styled Components
const CalculatorContainer = styled.div`
  width: 300px;
  margin: 100px auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

const Display = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
  padding: 5px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 3px;
  color: #333;
`;

const AnimatedButton = styled(animated.button)`
  font-size: 18px;
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;
  background-color: #61dafb;
  color: #fff;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2185d0;
  }
`;

const Calculator = () => {
  const [input, setInput] = useState('');

// Animation for button click
const buttonAnimation = useSpring({
  transform: input ? 'scale(1.02)' : 'scale(1)'
});


  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
   } catch (error) {
    setInput('Error');
   }
  };

  return (
    <CalculatorContainer>
      <Display>{input}</Display>
      <div className='buttons'>
        <div className='row'>
          <AnimatedButton style={buttonAnimation} onClick={() => handleClick('7')}>7</AnimatedButton>
          <AnimatedButton style={buttonAnimation} onClick={() => handleClick('8')}>8</AnimatedButton>
          <AnimatedButton style={buttonAnimation} onClick={() => handleClick('9')}>9</AnimatedButton>
          <AnimatedButton style={buttonAnimation} onClick={() => handleClick('/')}>/</AnimatedButton>
        </div>
        <div className="row">
          <AnimatedButton style={buttonAnimation} onClick={() => handleClick('4')}>4</AnimatedButton>
          <AnimatedButton style={buttonAnimation} onClick={() => handleClick('5')}>5</AnimatedButton>
          <AnimatedButton style={buttonAnimation} onClick={() => handleClick('6')}>6</AnimatedButton>
          <AnimatedButton style={buttonAnimation} onClick={() => handleClick('*')}>*</AnimatedButton>
        </div>
        <div className="row">
          <AnimatedButton style={buttonAnimation} onClick={() => handleClick('1')}>1</AnimatedButton>
          <AnimatedButton style={buttonAnimation} onClick={() => handleClick('2')}>2</AnimatedButton>
          <AnimatedButton style={buttonAnimation} onClick={() => handleClick('3')}>3</AnimatedButton>
          <AnimatedButton style={buttonAnimation} onClick={() => handleClick('-')}>-</AnimatedButton>
        </div>
        <div className="row">
          <AnimatedButton style={buttonAnimation} onClick={() => handleClick('0')}>0</AnimatedButton>
          <AnimatedButton style={buttonAnimation} onClick={handleClear}>C</AnimatedButton>
          <AnimatedButton style={buttonAnimation} onClick={handleCalculate}>=</AnimatedButton>
          <AnimatedButton style={buttonAnimation} onClick={() => handleClick('+')}>+</AnimatedButton>
        </div>
      </div>
    </CalculatorContainer>
  );
};

function App() {
  return (
    <div className='App'>
      <Calculator />
    </div>
  );
}

export default App;
