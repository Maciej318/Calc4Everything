"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [min, setMin] = useState<string>("");
  const [max, setMax] = useState<string>("");
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const handleGenerate = () => {
    const minValue = parseInt(min, 10);
    const maxValue = parseInt(max, 10);

    if (!isNaN(minValue) && !isNaN(maxValue) && minValue <= maxValue) {
      const randomNum =
        Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
      setRandomNumber(randomNum);
    } else {
      alert("Please enter valid values for the range.");
    }
  };

  return (
    <div>
      <MaxWidthWrapper>
        <h1 className="text-3xl text-center mb-1">
          <span className="text-blue-600">Random Number</span> Generator
        </h1>
        <div className="border-b w-[370px] mx-auto mb-10 border-zinc-300" />
        <div className="relative h-[calc(100vh-200px)] w-full p-4 gap-8">
          <label>Min:</label>
          <Input
            type="number"
            value={min}
            onChange={(e) => setMin(e.target.value)}
            className="mb-10"
          />
          <label>Max:</label>
          <Input
            type="number"
            value={max}
            onChange={(e) => setMax(e.target.value)}
            className="mb-10"
          />
          <Button onClick={handleGenerate} className="mb-10">Generate</Button>
          {randomNumber !== null && (
            <div>
              <h3>Wygenerowana liczba: <span className="font-bold text-blue-600">{randomNumber}</span></h3>
            </div>
          )}
        </div>
        <Link href="/">
          <Button variant={"ghost"} className="my-10">
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </Button>
        </Link>
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
