import React from "react";
import { useState, useEffect } from 'react';

const Workout = () => {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [data, SetData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log(`value is: ${count}`);
  }, [count]);

  const calculateSum = () => {
    const sumExpression = `${num1 || 0} + ${num2 || 0} + ${num3 || 0}`;
    try {
      const sum = eval(sumExpression);
      setResult(sum);
    } catch (error) {
      console.error('Error evaluating expression:', error);
      setResult('Error');
    }
  };

  const handleButtonClick = () => {
    if (inputValue.trim() !== "") {
      SetData([...data, inputValue]);
      setInputValue('');
    }
  };
  const handle = (increment) => {
    if (increment) {
      setCount(count + 1);
    } else {
      if (count > 0) {
        setCount(count - 1);
      }
    }
  };

  const handleRemoveClick = (index) => {
    const updatedArray = [...data];
    updatedArray.splice(index, 1);
    SetData(updatedArray);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8 border-b-2 border-black-600 pb-4">
        <h1 className="text-2xl font-semibold mb-2">Counter App</h1>
        <h2 className="text-3xl font-bold mb-4">{count}</h2>
        <div className="flex space-x-2">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => handle(true)}
          >
            Increment
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => handle(false)}
          >
            Decrement
          </button>
          <button
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>

      <div style={{ padding: 50 }} className="text-violet-800 bg-gray-800 p-8 rounded-lg mb-8 border-b-2 border-gray-600 pb-4">
        <h1 className="text-3xl mb-4">Sum up program</h1>
        <input
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          type="text"
          placeholder="Number 1"
          className="border p-2 mb-4"
          onBlur={calculateSum}
        />
        <input
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          type="text"
          placeholder="Number 2"
          className="border p-2 mb-4"
          onBlur={calculateSum}
        />
        <input
          value={num3}
          onChange={(e) => setNum3(e.target.value)}
          type="text"
          placeholder="Number 3"
          className="border p-2 mb-4"
          onBlur={calculateSum}
        />
        <h1 className="text-3xl">Result: {result}</h1>
      </div>

      <div className="text-green-800 border-b-2 border-gray-600 pb-4">
        <input
          value={inputValue}
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add new task"
          className="border p-2 mb-4"
        />
        <button
          onClick={handleButtonClick}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Add Task
        </button>
        <ul className="list-disc pl-4">
          {data.map((item, index) => (
            <li key={index} className="mb-2 " >
              {index + 1}. {item}
              <button
                onClick={() => handleRemoveClick(index)}
                className="bg-red-500   hover:bg-red-600 text-white font-bold py-1 px-2  rounded  relative left-[80px]"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Workout;
