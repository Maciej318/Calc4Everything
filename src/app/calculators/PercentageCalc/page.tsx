"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [baseNumber1, setBaseNumber1] = useState(0);
  const [secondNumber1, setSecondNumber1] = useState(0);
  const [result1, setResult1] = useState(0);

  const [baseNumber2, setBaseNumber2] = useState(0);
  const [secondNumber2, setSecondNumber2] = useState(0);
  const [result2, setResult2] = useState(0);

  const [baseNumber3, setBaseNumber3] = useState(0);
  const [secondNumber3, setSecondNumber3] = useState(0);
  const [result3, setResult3] = useState(0);

  const [baseNumber4, setBaseNumber4] = useState(0);
  const [secondNumber4, setSecondNumber4] = useState(0);
  const [result4, setResult4] = useState(0);

  const handleCalcPercentageOfGivenNumber = () => {
    setResult1((baseNumber1 * secondNumber1) / 100);
  };

  const handlePercentageOfOneNumberIsOther = () => {
    setResult2((baseNumber2 / secondNumber2) * 100);
  };

  const handleAddPercentageToNumber = () => {
    setResult3(baseNumber3 + (baseNumber3 * secondNumber3) / 100);
  };

  const handleSubtractPercentageToNumber = () => {
    setResult4(baseNumber4 - (baseNumber4 * secondNumber4) / 100);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <MaxWidthWrapper className="max-w-screen-xl mx-auto px-4 py-8">
        <h1 className="text-3xl text-center mb-4"><span className="text-blue-600">Percentage</span> Calculator</h1>
        <div className="border-b w-full mx-auto mb-6 border-zinc-300" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section 1: Calculating the percentage of a given number */}
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Calculating the percentage of a given number</h2>
            <div className="flex items-center">
              <Input
                type="number"
                value={baseNumber1}
                onChange={(e) => setBaseNumber1(parseFloat(e.target.value))}
                className="text-xl text-blue-500 mr-2"
                placeholder="Base Number"
              />
              <span className="text-xl">% from</span>
              <Input
                type="number"
                value={secondNumber1}
                onChange={(e) => setSecondNumber1(parseFloat(e.target.value))}
                className="text-xl text-blue-500 mx-2"
                placeholder="Second Number"
              />
              <span className="text-xl">=</span>
              <Input
                type="number"
                value={result1}
                className="text-xl text-blue-500 mx-2"
                readOnly
              />
              <Button onClick={handleCalcPercentageOfGivenNumber}>Calculate</Button>
            </div>
          </div>

          {/* Section 2: What percentage of one number is the other */}
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">What percentage of one number is the other</h2>
            <div className="flex items-center">
              <Input
                type="number"
                value={baseNumber2}
                onChange={(e) => setBaseNumber2(parseFloat(e.target.value))}
                className="text-xl text-blue-500 mr-2"
                placeholder="Base Number"
              />
              <span className="text-xl">for</span>
              <Input
                type="number"
                value={secondNumber2}
                onChange={(e) => setSecondNumber2(parseFloat(e.target.value))}
                className="text-xl text-blue-500 mx-2"
                placeholder="Second Number"
              />
              <span className="text-xl">=</span>
              <Input
                type="number"
                value={result2}
                className="text-xl text-blue-500 mx-2"
                readOnly
              />
              <span className="text-xl">%</span>
              <Button onClick={handlePercentageOfOneNumberIsOther}>Calculate</Button>
            </div>
          </div>

          {/* Section 3: Add a percentage to the number */}
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Add a percentage to the number</h2>
            <div className="flex items-center">
              <Input
                type="number"
                value={baseNumber3}
                onChange={(e) => setBaseNumber3(parseFloat(e.target.value))}
                className="text-xl text-blue-500 mr-2"
                placeholder="Base Number"
              />
              <span className="text-xl">+</span>
              <Input
                type="number"
                value={secondNumber3}
                onChange={(e) => setSecondNumber3(parseFloat(e.target.value))}
                className="text-xl text-blue-500 mx-2"
                placeholder="Percentage"
              />
              <span className="text-xl">=</span>
              <Input
                type="number"
                value={result3}
                className="text-xl text-blue-500 mx-2"
                readOnly
              />
              <Button onClick={handleAddPercentageToNumber}>Calculate</Button>
            </div>
          </div>

          {/* Section 4: Subtract the percentage from the number */}
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Subtract the percentage from the number</h2>
            <div className="flex items-center">
              <Input
                type="number"
                value={baseNumber4}
                onChange={(e) => setBaseNumber4(parseFloat(e.target.value))}
                className="text-xl text-blue-500 mr-2"
                placeholder="Base Number"
              />
              <span className="text-xl">-</span>
              <Input
                type="number"
                value={secondNumber4}
                onChange={(e) => setSecondNumber4(parseFloat(e.target.value))}
                className="text-xl text-blue-500 mx-2"
                placeholder="Percentage"
              />
              <span className="text-xl">=</span>
              <Input
                type="number"
                value={result4}
                className="text-xl text-blue-500 mx-2"
                readOnly
              />
              <Button onClick={handleSubtractPercentageToNumber}>Calculate</Button>
            </div>
          </div>
        </div>

        {/* Back to site button */}
        <div className="mt-6 text-center">
          <Link href="/">
            <Button variant="ghost">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to site
            </Button>
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
