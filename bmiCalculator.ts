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

interface ParsedValues {
  heightCm: number;
  weightKg: number;
}

const parseArguments = (args: string[]): ParsedValues => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");
  if (isNaN(Number(args[2])) || isNaN(Number(args[3]))) {
    throw new Error("Provided values were not numbers!");
  }

  return {
    heightCm: Number(args[2]),
    weightKg: Number(args[3]),
  };
};

try {
  const { heightCm, weightKg } = parseArguments(process.argv);
  console.log(calculateBmi(heightCm, weightKg));
} catch (error: unknown) {
  let errorMessage = "Something bad happened.";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}
