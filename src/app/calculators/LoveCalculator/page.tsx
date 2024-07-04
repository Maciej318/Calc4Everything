"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const HandleCalculateLove = () => {
    setIsOpen((state) => !state);
    const random = Math.floor(Math.random() * 100) + 1;
    if (name1 === "Maciejko" || name2 === "Maryjka") {
      setResult("100");
    }
    if (name1 === "Maryjka" || name2 === "Maciejko") {
        setResult("100");
    }else{
        setResult(`${random}`)
    }

  };

  return (
    <div>
      <MaxWidthWrapper>
        <h1 className="text-3xl text-center mb-1">
          <span className="text-blue-600">Love</span> Calculator
        </h1>
        <div className="border-b w-[370px] mx-auto mb-10 border-zinc-300" />
        <div className="relative h-[calc(100vh-200px)] w-full p-4 gap-8">
          <img
            src="/heartBg.jpg"
            alt="heartBg"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30 -z-10"
          />
          {isOpen ? (
            <div className="relative z-10 flex items-center justify-center mt-[300px] gap-10">
              <div className="text-center">
                <label className="tracking-tighter font-bold">Your Name</label>
                <Input
                  className="w-40 text-xl text-blue-500 rounded-xl drop-shadow-sm"
                  type="text"
                  value={name1}
                  onChange={(e) => setName1(e.target.value)}
                />
              </div>
              <div className="text-center">
                <label className="tracking-tighter font-bold">Your Crush</label>
                <Input
                  className="w-40 text-xl text-blue-500 rounded-xl drop-shadow-sm"
                  type="text"
                  value={name2}
                  onChange={(e) => setName2(e.target.value)}
                />
              </div>
            </div>
          ) : (
            <div className="relative z-10 flex flex-col items-center justify-center w-full mt-[300px] gap-4 text-center">
              <h1 className="text-2xl font-bold">
                {name1} <span className="text-blue-600">&</span> {name2}
              </h1>
              <p className="text-3xl"><span className="text-blue-600 font-bold">{result}</span>%</p>
            </div>
          )}

          <div className="relative z-10 flex justify-center mt-5">
            <Button onClick={HandleCalculateLove}>
              {isOpen ? (
                "Calculate Love"
              ) : (
                <>
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </>
              )}
            </Button>
          </div>
        </div>
        <Link href="/">
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
