"use client"

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
    <div>
      <MaxWidthWrapper>
        <h1 className="text-3xl text-center mb-1"><span className="text-blue-600">BMI</span> Calculator</h1>
        <div className="border-b w-[370px] mx-auto mb-6 border-zinc-300" />
        <div className="h-[calc(100vh-260px)] w-full md:flex p-2 gap-8">
          <div className="w-full">
            <label className="text-lg tracking-tighter">Weight (kg)</label>
            <Input type="number" placeholder="Weight" className="mb-4" value={weight} onChange={(e) => setWeight(parseFloat(e.target.value))} />
            <label className="text-lg tracking-tighter">Height (cm)</label>
            <Input type="number" placeholder="Height" className="mb-4" value={height} onChange={(e) => setHeight(parseFloat(e.target.value))}/>
            <Button className="mb-4" onClick={calculateBMI}>Calculate</Button>
            {bmi > 0 && <div>Your BMI is: <span className="text-blue-600">{bmi.toFixed(2)}</span></div>}
            {bmi > 0 && bmi <= 18 && <div>You are <b className="text-blue-600">Underweight</b></div>}
            {bmi >= 18.5 && bmi <= 24.9 && <div>You are <b className="text-blue-600">Normal Weight</b></div>}
            {bmi >= 25 && bmi <= 29.9 && <div>You are <b className="text-blue-600">Overweight</b></div>}
            {bmi >= 30 && bmi <= 34.9 && <div>You are <b className="text-blue-600">Obesity class I</b></div>}
            {bmi >= 35 && bmi <= 39.9 && <div>You are <b className="text-blue-600">Obesity class II</b></div>}  
            {bmi > 0 && bmi >= 40 && <div>You are <b className="text-blue-600">Obesity class III</b></div>}
          </div>
          <div className="w-full">
            <img src="/BMI-image.jpg" className="object-cover" alt="bmi image" />
          </div>
        </div>
        <Link href='/'>
          <Button variant={"ghost"} className="mb-5">
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </Button>
        </Link>
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
