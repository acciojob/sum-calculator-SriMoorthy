import React, { useState, useEffect } from 'react';

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]);  // Array of inputted numbers
  const [inputValue, setInputValue] = useState('');  // Current input value
  const [sum, setSum] = useState(0);  // Total sum

  // Synchronous sum calculation when the numbers array changes
  useEffect(() => {
    const total = numbers.reduce((acc, num) => acc + num, 0); // Calculate the sum
    setSum(total);  // Update the sum state
  }, [numbers]);  // Run the effect when numbers array changes

  // Handler for updating the numbers array when input changes
  const handleInputChange = (e) => {
    const value = e.target.value;

    // Only add to numbers array when the value is valid
    if (!isNaN(value) && value.trim() !== '') {
      setNumbers([...numbers, parseFloat(value)]);  // Add the new number to the array
      setInputValue('');  // Clear the input field after valid input
    } else {
      setInputValue(value);  // Update the input value with the typed text
    }
  };

  return (
    <div>
      <h2>Sum Calculator</h2>
      <input 
        type="number" 
        value={inputValue} 
        onChange={handleInputChange}  // Update numbers as you type
      />
      <p>Sum: {sum}</p>  {/* Display the total sum */}
    </div>
  );
};

export default SumCalculator;
