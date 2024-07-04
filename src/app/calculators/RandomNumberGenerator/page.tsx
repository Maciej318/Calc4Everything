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
    <div className="bg-gray-100 min-h-screen">
      <MaxWidthWrapper className="max-w-screen-md mx-auto px-4 py-8">
        <h1 className="text-3xl text-center mb-4">
          <span className="text-blue-600">Random Number</span> Generator
        </h1>
        <div className="border-b w-full mx-auto mb-6 border-zinc-300" />

        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex-1">
            <label className="block text-gray-700 mb-2">Min:</label>
            <Input
              type="number"
              value={min}
              onChange={(e) => setMin(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter minimum value"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 mb-2">Max:</label>
            <Input
              type="number"
              value={max}
              onChange={(e) => setMax(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter maximum value"
            />
          </div>
        </div>

        <Button
          onClick={handleGenerate}
          className="w-full md:w-auto mb-6 md:mb-0"
        >
          Generate
        </Button>

        {randomNumber !== null && (
          <div className="text-center mt-6">
            <h3 className="text-xl ">
              Generated Number:
              {' '}<span className="font-bold text-blue-600">{randomNumber}</span>
            </h3>
          </div>
        )}

        <Link href="/">
          <Button variant="ghost" className="mt-6 flex justify-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to site
          </Button>
        </Link>
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
