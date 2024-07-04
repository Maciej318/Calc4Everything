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

  const HandleCalcPercentageOfGivenNumber = () => {
    setResult1((baseNumber1 * secondNumber1) / 100);
  };

  const HandlePercentageOfOneNumberIsOther = () => {
    setResult2((baseNumber2 / secondNumber2) * 100);
  };

  const HandleAddPercentageToNumber = () => {
    setResult3(baseNumber3 + (baseNumber3 * secondNumber3) / 100);
  };

  const HandleSubtractPercentageToNumber = () => {
    setResult4(baseNumber4 - (baseNumber4 * secondNumber4) / 100);
  };

  return (
    <div>
      <MaxWidthWrapper>
        <h1 className="text-3xl text-center mb-1"><span className="text-blue-600">Percentage</span> Calculator</h1>
        <div className="border-b w-[370px] mx-auto mb-10 border-zinc-300" />
        <div className="h-[calc(100vh-200px)] w-full p-4 gap-8 rounded-lg">
          <h1 className="tracking-tighter text-2xl mb-3">
            Calculating the percentage of a given number
          </h1>
          <div className="flex w-full mb-10 gap-5 items-center text-xl tracking-tighter">
            <Input
              type="number"
              value={baseNumber1}
              onChange={(e) => setBaseNumber1(parseFloat(e.target.value))}
              className="w-20 text-xl text-blue-500"
            />
            <span>% from</span>
            <Input
              type="number"
              value={secondNumber1}
              onChange={(e) => setSecondNumber1(parseFloat(e.target.value))}
              className="w-20 text-xl text-blue-500"
            />
            <span>=</span>
            <Input
              type="number"
              value={result1}
              className="w-20 text-xl text-blue-500"
            />
            <Button
              className="ml-auto"
              onClick={HandleCalcPercentageOfGivenNumber}
            >
              Calculate
            </Button>
          </div>

          <div className="border-b w-full mb-10 border-zinc-300" />

          <h1 className="tracking-tighter text-2xl mb-3">
            What percentage of one number is the other
          </h1>
          <div className="flex w-full mb-10 gap-5 items-center text-xl tracking-tighter">
            <Input
              type="number"
              value={baseNumber2}
              onChange={(e) => setBaseNumber2(parseFloat(e.target.value))}
              className="w-20 text-xl text-blue-500"
            />
            <span>for</span>
            <Input
              type="number"
              value={secondNumber2}
              onChange={(e) => setSecondNumber2(parseFloat(e.target.value))}
              className="w-20 text-xl text-blue-500"
            />
            <span>=</span>
            <Input
              type="number"
              value={result2}
              className="w-20 text-xl text-blue-500"
            />
            <span>%</span>
            <Button
              className="ml-auto"
              onClick={HandlePercentageOfOneNumberIsOther}
            >
              Calculate
            </Button>
          </div>

          <div className="border-b w-full mb-10 border-zinc-300" />

          <h1 className="tracking-tighter text-2xl mb-3">
            Add a percentage to the number
          </h1>
          <div className="flex w-full mb-10 gap-5 items-center text-xl tracking-tighter">
            <Input
              type="number"
              value={baseNumber3}
              onChange={(e) => setBaseNumber3(parseFloat(e.target.value))}
              className="w-20 text-xl text-blue-500"
            />
            <span>+</span>
            <Input
              type="number"
              value={secondNumber3}
              onChange={(e) => setSecondNumber3(parseFloat(e.target.value))}
              className="w-20 text-xl text-blue-500"
            />
            <span>% =</span>
            <Input
              type="number"
              value={result3}
              className="w-20 text-xl text-blue-500"
            />
            <Button className="ml-auto" onClick={HandleAddPercentageToNumber}>
              Calculate
            </Button>
          </div>

          <div className="border-b w-full mb-10 border-zinc-300" />

          <h1 className="tracking-tighter text-2xl mb-3">
            Subtract the percentage from the number
          </h1>

          <div className="flex w-full mb-10 gap-5 items-center text-xl tracking-tighter">
            <Input
              type="number"
              value={baseNumber4}
              onChange={(e) => setBaseNumber4(parseFloat(e.target.value))}
              className="w-20 text-xl text-blue-500"
            />
            <span>-</span>
            <Input
              type="number"
              value={secondNumber4}
              onChange={(e) => setSecondNumber4(parseFloat(e.target.value))}
              className="w-20 text-xl text-blue-500"
            />
            <span>% =</span>
            <Input
              type="number"
              value={result4}
              className="w-20 text-xl text-blue-500"
            />
            <Button className="ml-auto" onClick={HandleSubtractPercentageToNumber}>
              Calculate
            </Button>
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
