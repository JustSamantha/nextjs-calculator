'use client';

import { useState } from 'react';

let currentOperator:string = '';
let previousDisplay:string = '';
let clearDisplayBeforeNumber:boolean = false;

export default function Home() {
  const calculatorInputSymbols:Array<string> = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '/', '.', '0', '=', '*', 'C'];
  const [display, setDisplay] = useState('');

  /**
   * Receives the user input and does the right action based on it
   * @param {string} symbol The symbol that the user clicked on
   */
  function addInput(symbol:string) {
    if (isOperatorSymbol(symbol)) {
      setOperator(symbol);
    } else if (symbol === '=') {
      doMath();
    } else if (symbol === 'C') {
      clearCalculator();
    } else {
      addNumber(symbol);
    }
  }

  /**
   * Adds a number to the display and clears the interface when needed
   * @param {string} number The number to add to the display
   */
  function addNumber(number:string) {
    if (clearDisplayBeforeNumber) {
      previousDisplay = display;
      clearDisplayBeforeNumber = false;
      setDisplay(number);
    } else {
      setDisplay(display+number);
    }
  }

  /**
   * Sets the math operator that the user clicked
   * @param {string} operator The math operator to process
   */
  function setOperator(operator:string) {
    if (currentOperator === '') {
      currentOperator = operator;
      previousDisplay = display;
      clearDisplayBeforeNumber = true;
    } else {
      doMath();
    }
  }

  /**
   * Asserts if the provided symbol is a supported math operator
   * @param {string} symbol The symbol to assert
   * @returns {boolean} True if it's a supported math operator
   */
  function isOperatorSymbol(symbol:string) {
    const operatorSymbols:Array<string> = ['+', '-', '/', '*'];
    return !!operatorSymbols.find((currentSymbol) => currentSymbol===symbol);
  }
  
  /**
   * Crunches the calculator numbers based on previously provided data
   */
  function doMath() {
    if (previousDisplay && currentOperator && display) {
      setDisplay(eval(previousDisplay+currentOperator+display));
      currentOperator = '';
      previousDisplay = '';
      clearDisplayBeforeNumber = true;
    }
  }

  /**
   * Resets the calculator to its inital state
   */
  function clearCalculator() {
    setDisplay('');
    currentOperator = '';
    previousDisplay = '';
  }

  return (
    <div className="flex h-screen justify-center mt-[50px]">
      <div>
        <input className="border-1 w-full rounded text-right pr-[5px] pl-[5px] h-[50px]" type="text" value={display} disabled />
        <br />
        <div className="w-[200px] grid grid-cols-4 grid-rows-5">
          {calculatorInputSymbols.map((symbol) => (
            <button className="hover:bg-pink-200 border-1 rounded h-[30px]" key={symbol} onClick={() => addInput(symbol)}>{symbol}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
