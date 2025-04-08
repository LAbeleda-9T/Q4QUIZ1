function calculateBMI(event) {
  event.preventDefault(); // Prevents it from submitting

  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var result = document.getElementById("result");

  if (weight === "" || height === "" || weight <= 0 || height <= 0) {
    result.innerText = "Please enter your weight and height.";
  } else {
    var heightInMeters = height / 100;

    // Math.pow to calculate BMI
    var bmi = weight / Math.pow(heightInMeters, 2);

    // Round off
    bmi = Math.round(bmi * 100) / 100;

    var category = "";

    // calculation from the image
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 25) {
      category = "Normal";
    } else if (bmi < 30) {
      category = "Overweight";
    } else if (bmi < 35) {
      category = "Obese";
    } else {
      category = "Extremely Obese";
    }

    result.innerText = "Your BMI is " + bmi + " (" + category + ").";
  }
}

