const calculateExpense = () => {
  const income = document.querySelector("#income").value;
  const food = document.querySelector("#food").value;
  const rent = document.querySelector("#rent").value;
  const clothes = document.querySelector("#clothes").value;

  // Validate inputs
  if (
    income < 0 ||
    income === "" ||
    food < 0 ||
    food === "" ||
    rent < 0 ||
    rent === "" ||
    clothes < 0 ||
    clothes === ""
  ) {
    alert("Inputs must be positive numbers");
    return;
  }

  // Calculate total expense
  const expense = parseInt(food) + parseInt(rent) + parseInt(clothes);

  // Calculate balance
  const balance = parseInt(income) - expense;

  // Validate income vs expense
  if (expense > parseInt(income)) {
    alert("Expenses cannot be more than income");
  } else {
    // Display total expense and balance
    document.getElementById("total-expense").innerText = expense;
    document.getElementById("balance").innerText = balance;
  }
};
const calculateSavings = () => {
    const savePercentage = parseFloat(document.getElementById("save").value);
    const income = parseFloat(document.getElementById("income").value);
    const balance = parseFloat(document.getElementById("balance").innerText);
  
    // Validate save percentage
    if (isNaN(savePercentage) || savePercentage < 0) {
      alert("Provide a valid positive saving value");
      return;
    }
  
    // Validate income
    if (isNaN(income) || income <= 0) {
      alert("Provide a valid income value");
      return;
    }
  
    // Calculate saving amount
    const savingAmount = (savePercentage / 100) * income;
    
    // Validate saving amount
    if (savingAmount > balance) {
      alert("Saving amount is greater than balance");
    } else {
      const remainingBalance = balance - savingAmount;
  
      // Display saving amount and remaining balance
      document.getElementById("saving-amount").innerText = savingAmount.toFixed(2);
      document.getElementById("remaining-balance").innerText = remainingBalance.toFixed(2);
    }
  };
  
