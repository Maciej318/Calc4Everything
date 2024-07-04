"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [bmi, setBmi] = useState<number>(0);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <MaxWidthWrapper>
        <h1 className="text-3xl md:text-4xl text-center mb-3 md:mb-6">
          <span className="text-blue-600">BMI</span> Calculator
        </h1>
        <div className="border-b border-zinc-300 mx-auto mb-6 w-20" />

        <div className="flex flex-col md:flex-row md:gap-8">
          <div className="w-full md:w-1/2">
            <label className="text-lg md:text-xl tracking-tighter">Weight (kg)</label>
            <Input
              type="number"
              placeholder="Weight"
              className="mb-4 w-full"
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value))}
            />
            <label className="text-lg md:text-xl tracking-tighter">Height (cm)</label>
            <Input
              type="number"
              placeholder="Height"
              className="mb-4 w-full"
              value={height}
              onChange={(e) => setHeight(parseFloat(e.target.value))}
            />
            <Button className="mb-4 w-full" onClick={calculateBMI}>
              Calculate
            </Button>
            {bmi > 0 && (
              <div className="mb-4">
                Your BMI is: <span className="text-blue-600">{bmi.toFixed(2)}</span>
              </div>
            )}
            {bmi > 0 && (
              <>
                {bmi <= 18 && (
                  <div className="mb-2">
                    You are <b className="text-blue-600">Underweight</b>
                  </div>
                )}
                {bmi >= 18.5 && bmi <= 24.9 && (
                  <div className="mb-2">
                    You are <b className="text-blue-600">Normal Weight</b>
                  </div>
                )}
                {bmi >= 25 && bmi <= 29.9 && (
                  <div className="mb-2">
                    You are <b className="text-blue-600">Overweight</b>
                  </div>
                )}
                {bmi >= 30 && bmi <= 34.9 && (
                  <div className="mb-2">
                    You are <b className="text-blue-600">Obesity class I</b>
                  </div>
                )}
                {bmi >= 35 && bmi <= 39.9 && (
                  <div className="mb-2">
                    You are <b className="text-blue-600">Obesity class II</b>
                  </div>
                )}
                {bmi >= 40 && (
                  <div className="mb-2">
                    You are <b className="text-blue-600">Obesity class III</b>
                  </div>
                )}
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img src="/BMI-image.jpg" className="object-cover max-w-full h-auto" alt="bmi image" />
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <Link href="/">
            <Button variant="ghost">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to site
            </Button>
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
