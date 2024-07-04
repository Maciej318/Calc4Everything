"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [result, setResult] = useState("");
  const [expression, setExpression] = useState("");

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      try {
        setResult(eval(expression).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setResult("");
      setExpression("");
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const BUTTONS = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
  ];

  return (
    <div>
      <MaxWidthWrapper>
        <h1 className="text-3xl text-center mb-1"><span className="text-blue-600">Standard</span> Calculator</h1>
        <div className="border-b w-[370px] mx-auto mb-6 border-zinc-300" />
        <div className="h-[calc(100vh-200px)] w-full p-4 gap-8 bg-zinc-200 border-zinc-500 rounded-lg">
          <input
            type="text"
            className="mb-2 text-5xl w-full border-b-2 bg-zinc-200 border-zinc-400 focus:outline-none"
            value={expression}
            readOnly
          />
          <input
            type="text"
            className="mb-10 text-4xl w-full font-bold bg-zinc-200 focus:outline-none"
            value={result}
            readOnly
          />
          <div className="grid grid-cols-4 gap-3">
            {BUTTONS.map((button, index) => (
              <Button
                key={index}
                onClick={() => handleButtonClick(button)}
                className="text-4xl py-[50px] bg-blue-400 hover:border-blue-600"
              >
                {button}
              </Button>
            ))}
          </div>
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
