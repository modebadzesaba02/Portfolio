import React, { useState } from 'react';

const NumberGuessingGame = () => {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleInputChange = (event) => {
    setUserGuess(event.target.value);
  };

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    const guess = parseInt(userGuess, 10);

    if (isNaN(guess)) {
      setFeedback('Please enter a valid number.');
    } else if (guess === targetNumber) {
      setFeedback('Congratulations! You guessed the correct number.');
      setTargetNumber(generateRandomNumber());
      setUserGuess('');
    } else if (guess < targetNumber) {
      setFeedback('Too low. Try again!');
      setUserGuess('');
    } else {
      setFeedback('Too high. Try again!');
      setUserGuess('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-3xl font-semibold mb-4">Number Guessing Game</h1>
      <p className="text-lg mb-4">{feedback}</p>
      <form onSubmit={handleGuessSubmit} className="flex flex-col items-center">
        <input
          className="border p-2 mb-4 w-[200px] text-center text-violet-700"
          type="number"
          value={userGuess}
          onChange={handleInputChange}
          min="1"
          max="100"
          placeholder="Enter your guess"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit Guess
        </button>
      </form>
    </div>
  );
};

export default NumberGuessingGame;
