const calculateBmi = (heightCm: number, weightKg: number): string => {
  const heightM = heightCm / 100;
  const bmi = weightKg / heightM ** 2;

  if (bmi < 16.0) {
    return "Underweight (Severe thinness)";
  } else if (16.0 <= bmi && bmi <= 16.9) {
    return "Underweight (Moderate thinness)";
  } else if (17.0 <= bmi && bmi <= 18.4) {
    return "Underweight (Mid thinness)";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    return "Normal (Healthy weight)";
  } else if (25.0 <= bmi && bmi <= 29.9) {
    return "Overweight (Pre-obese)";
  } else if (30.0 <= bmi && bmi <= 34.9) {
    return "Overweight (Class I)";
  } else if (35.0 <= bmi && bmi <= 39.9) {
    return "Overweight (Class II)";
  } else if (bmi >= 40.0) {
    return "Overweight (Class III)";
  }
};

console.log(calculateBmi(180, 74));
