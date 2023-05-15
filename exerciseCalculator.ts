interface CalculationValues {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (
  dailyHours: number[],
  targetHours: number
): CalculationValues => {
  const periodLength = dailyHours.length;
  const trainingDays = dailyHours.filter((hour) => hour > 0).length;
  const target = targetHours;
  const average =
    dailyHours.reduce((prev, current) => prev + current) / periodLength;
  const success = average >= targetHours ? true : false;

  const difference = targetHours - average;
  const rating =
    difference > 0.5 ? 1 : difference <= 0.5 && difference > 0 ? 2 : 3;
  const ratingDescription =
    rating == 1
      ? "you should push yourself harder"
      : rating == 2
      ? "not too bad but could be better"
      : "you met or exceeded your goal!";

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
