// Function to append numbers or operators to the input
function appendNumber(value) {
    const inputField = document.getElementById('input');
    inputField.value += value;
  }
  
  // Function to clear the input field
  function clearInput() {
    const inputField = document.getElementById('input');
    inputField.value = '';
  }
  
  // Function to calculate the result and show it in the input field
  function calculateResult() {
    const inputField = document.getElementById('input');
    try {
      inputField.value = eval(inputField.value); // Evaluate the expression
    } catch (error) {
      inputField.value = 'Error'; // If there's an error, show "Error"
    }
  }
  