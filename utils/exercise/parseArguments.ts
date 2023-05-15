interface ParsedValues {
  targetHours: number;
  dailyHours: number[];
}

const parseArguments = (args: string[]): ParsedValues => {
  if (args.length < 4) throw new Error("Not enough arguments");

  if (isNaN(Number(args[2]))) {
    throw new Error("Provided target hours was not a number!");
  }

  args.slice(3).forEach((hour) => {
    if (isNaN(Number(hour))) throw new Error(`${hour} is not a number!`);
  });

  return {
    targetHours: Number(args[2]),
    dailyHours: args.slice(3).map((hour) => Number(hour)),
  };
};

export default parseArguments;
