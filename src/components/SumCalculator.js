import React, { useState, useEffect } from 'react';

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]);  // Array of inputted numbers
  const [inputValue, setInputValue] = useState(0);  // Start with 0 as the initial value
  const [sum, setSum] = useState(0);  // Total sum

  // Synchronous sum calculation when the numbers array changes
  useEffect(() => {
    const total = numbers.reduce((acc, num) => acc + num, 0); // Calculate the sum
    setSum(total);  // Update the sum state
  }, [numbers]);  // Run the effect when numbers array changes

  // Handler for updating the numbers array when input changes
  const handleInputChange = (e) => {
    const value = parseFloat(e.target.value);  // Parse the input value to a float

    // If the value is a valid number
    if (!isNaN(value)) {
      // Add the new value to the numbers array and reset input field to value
      setNumbers([...numbers, value]);
      setInputValue(value);  // Keep the input field updated
    }
  };

  return (
    <div>
      <h2>Sum Calculator</h2>
      <input 
        type="number"  // Input type number with increment and decrement buttons
        value={inputValue} 
        onChange={handleInputChange}  // Update numbers as you type or click increment/decrement 
      />
      <p>Sum: {sum}</p>  {/* Display the total sum */}
    </div>
  );
};

export default SumCalculator;

