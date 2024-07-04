"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState, ChangeEvent } from "react";

type ActivityLevel = {
  label: string;
  value: number;
};

const activityLevels: ActivityLevel[] = [
  { label: "Lack of activity", value: 1.2 },
  { label: "Light activity (1-3 days a week)", value: 1.375 },
  { label: "Moderate activity (3-5 days a week)", value: 1.55 },
  { label: "High activity (6-7 days a week)", value: 1.725 },
  { label: "Very active (hard physical work)", value: 1.9 },
];

export default function Home() {
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [activityLevel, setActivityLevel] = useState<number>(
    activityLevels[0].value
  );
  const [calories, setCalories] = useState<number | null>(null);

  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) =>
    setAge(e.target.value);
  const handleGenderChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setGender(e.target.value as "male" | "female");
  const handleHeightChange = (e: ChangeEvent<HTMLInputElement>) =>
    setHeight(e.target.value);
  const handleWeightChange = (e: ChangeEvent<HTMLInputElement>) =>
    setWeight(e.target.value);
  const handleActivityLevelChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setActivityLevel(parseFloat(e.target.value));

  const calculateCalories = () => {
    const heightCm = parseFloat(height);
    const weightKg = parseFloat(weight);
    const ageYears = parseInt(age);

    if (isNaN(heightCm) || isNaN(weightKg) || isNaN(ageYears)) {
      return;
    }

    let BMR: number;
    if (gender === "male") {
      BMR = 10 * weightKg + 6.25 * heightCm - 5 * ageYears + 5;
    } else {
      BMR = 10 * weightKg + 6.25 * heightCm - 5 * ageYears - 161;
    }

    const TDEE = BMR * activityLevel;
    setCalories(TDEE);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <MaxWidthWrapper>
        <h1 className="text-3xl text-center mb-4 mt-8">
          <span className="text-blue-600">Calorie</span> Calculator
        </h1>
        <div className="border-b w-full mx-auto mb-6 border-zinc-300" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-5">
              <label className="block mb-1">Age:</label>
              <Input
                type="number"
                className="w-full"
                value={age}
                onChange={handleAgeChange}
              />
            </div>
            <div className="mb-5">
              <label className="block mb-1">Gender:</label>
              <select
                value={gender}
                onChange={handleGenderChange}
                className="w-full"
              >
                <option value="male">Man</option>
                <option value="female">Woman</option>
              </select>
            </div>
            <div className="mb-5">
              <label className="block mb-1">Height (cm):</label>
              <Input
                type="number"
                className="w-full"
                value={height}
                onChange={handleHeightChange}
              />
            </div>
            <div className="mb-5">
              <label className="block mb-1">Weight (kg):</label>
              <Input
                type="number"
                className="w-full"
                value={weight}
                onChange={handleWeightChange}
              />
            </div>
            <div className="mb-5">
              <label className="block mb-1">Level of physical activity:</label>
              <select
                value={activityLevel}
                onChange={handleActivityLevelChange}
                className="w-full"
              >
                {activityLevels.map((level) => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-5">
              <Button onClick={calculateCalories} className="w-full">
                Calculate Calories
              </Button>
            </div>
          </div>
          <div>
            {calories !== null && (
              <div className="text-center">
                <h2 className="mb-3">
                  Your daily calorie requirement:{" "}
                  <span className="font-bold text-blue-600">
                    {calories.toFixed(0)}
                  </span>{" "}
                  kcal
                </h2>
              </div>
            )}
          </div>
        </div>

        <Link href="/">
          <Button variant="ghost" className="mt-8">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to site
          </Button>
        </Link>
      </MaxWidthWrapper>
    </div>
  );
}
