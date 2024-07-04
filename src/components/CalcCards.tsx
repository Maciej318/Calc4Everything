import { ArrowRightIcon } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const CALCVARIANTS = [
  {
    title: "BMI Calculator",
    description:
      "A BMI calculator is a tool that helps determine an individual's Body Mass Index (BMI)",
    url: "/calculators/BMICalc",
  },
  {
    title: "Percentage Calculator",
    description:
      "A percentage calculator is a tool that helps compute percentages for various numerical values",
    url: "/calculators/PercentageCalc",
  },
  {
    title: "Standard Calculator",
    description:
      "Standard calculators are widely use for quick and accurate numerical computations.",
    url: "/calculators/StandardCalculator",
  },
  {
    title: "Love Calculator",
    description:
      "With The Love Calculator you can calculate the probability of a successful relationship between two people.",
    url: "/calculators/LoveCalculator",
  },
  {
    title: "Sleep Calculator",
    description:
      "Calculate the best time to go to bed based on your wake up time and sleep cycles.",
    url: "/calculators/SleepCalculator",
  },
  {
    title: "Calorie Calculator",
    description:
      "A calorie calculator determines daily caloric needs based on individual factors like age, weight, and activity level.",
    url: "/calculators/CalorieCalculator",
  },
  {
    title: "Password Generator",
    description:
      "A password generator creates secure, random passwords to enhance online security.",
    url: "/calculators/PasswordGenerator",
  },
  {
    title: "Number Generator",
    description:
      "Generate random numbers instantly with our versatile Number Generator.",
    url: "/calculators/RandomNumberGenerator",
  },
  {
    title: "Weight Converter",
    description:
      "Effortlessly convert between different weight units with our easy-to-use Weight Converter.",
    url: "/calculators/WeightConventer",
  },
];

const CalcCards = () => {
  return (
    <div className="w-full h-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 bg-slate-50 p-4">
      {CALCVARIANTS.map((calc, index) => (
        <Card className="m-3 flex flex-col justify-between" key={index}>
          <CardHeader className="text-lg tracking-tighter">
            <CardTitle className="line-clamp-1">{calc.title}</CardTitle>
            <CardDescription className="line-clamp-3">
              {calc.description}
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Link
              className={buttonVariants({
                size: "lg",
                className: "w-full gap-1 mt-2",
              })}
              href={calc.url}
            >
              Calculate <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CalcCards;
