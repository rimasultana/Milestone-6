function cheakAge() {
    const ageFild = document.getElementById('age').value;
    const errorTag = document.getElementById('error');
    errorTag.innerHTML = ""; // Clear previous error
    try {
      const age = parseInt(ageFild);

      if (isNaN(age)) {
        throw "Please enter a valid age.";
      } else if (age < 18 || age > 30) {
        throw "Age must be between 18 and 30.";
      } else {
        errorTag.innerHTML = "Age is valid!";
      }
    } catch (error) {
      console.log("error", error);
      errorTag.innerHTML = error;
    }
  }