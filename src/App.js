
import './App.css';
import { useRef, useState } from 'react';
function App() {

  //const [result, setResult] = useState('0');

  const [input, setInput] = useState('0');
  
  function result() { 
    let hasOperators = /[\+\-\/\*]/.test(input);


    if (hasOperators) { 

      let regex = /[\+\-\/\*]/g;

      const matches = [...input.matchAll(regex)];

      const indeces = matches.map(match => match.index);
      let operation = input.charAt(indeces[0]);
      const myrr = input.split(input.charAt(indeces[0]));

      let leftHand = parseFloat(myrr[0]);
      let rightHand = parseFloat(myrr[1]);
      
      let answer = 0;

      switch(operation){
        case '+':
        answer = leftHand + rightHand;
        break;
        case '-':
        answer = leftHand - rightHand;
        break;
        case '*':
        answer = leftHand * rightHand;
        break;
        default:
        answer = leftHand / rightHand;
        break;

      }

      return answer;
    }

  }
  // handleClick = () => { 

    
  // }

  const handleClick = (number) => { 
    let newInput = '';
    if (input === '0') { 

      return number;
    }else 
      newInput = input + number;
    return newInput;


   
    
    
  }

  const handleDecimal = (number) => {

    let newInput = '';
    if (input === '0') {

      newInput = input + '.';
      return newInput;
    } else
      newInput = input + number;
    return newInput;


  }
  
  var inputRef = useRef();

  return (
    <div className='claculator'>
    
      <input type='text'
        className="calculator-screen"
        id='input'
        value={input}
        ref={inputRef}
        disabled
      />

      <div className='calculator-button'>
        <button onClick={() => setInput(() => {return handleClick('+');}) } className='operators'>+</button>
        <button onClick={() => setInput(() => {return handleClick('-');})} className='operators'>-</button>
        <button onClick={() => setInput(() => {return handleClick('/');})} className='operators'>/</button>
        <button onClick={() => setInput(() => {return handleClick('*');})} className='operators'>*</button>

          <button onClick={() => setInput(() => {return handleClick('1');})} className='calc-key'>1</button>
          <button onClick={() => setInput(() => {return handleClick('2');})} className='calc-key'>2</button>
          <button onClick={() => setInput(() => {return handleClick('3');})} className='calc-key'>3</button>
          <button onClick={() => setInput(() => {return handleClick('4');})} className='calc-key'>4</button>
          <button onClick={() => setInput(() => {return handleClick('5');})} className='calc-key'>5</button>
          <button onClick={() => setInput(() => {return handleClick('6');})} className='calc-key'>6</button>
          <button onClick={() => setInput(() => {return handleClick('7');})} className='calc-key'>7</button>
          <button onClick={() => setInput(() => {return handleClick('8');})} className='calc-key'>8</button>
          <button onClick={() => setInput(() => { return handleClick('9');})} className='calc-key'>9</button>
          <button onClick={() => setInput(() => {return handleClick('0');})} className='calc-key'>0</button>
          <button onClick={() => setInput(() => { return handleDecimal('.');})} className='calc-key'>.</button>
          <button onClick={() => setInput(() => { return result(); })}className='equals_btn'>=</button>
          <button onClick={() => setInput('0')}>AC</button>
        
        
      </div>
      

      
    </div>
  );
}

export default App;
