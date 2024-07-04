"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState, ChangeEvent } from "react";

const Page = () => {
  const [kg, setKg] = useState<string>("");
  const [stones, setStones] = useState<string>("");
  const [pounds, setPounds] = useState<string>("");
  const [ounces, setOunces] = useState<string>("");

  const handleKgChange = (e: ChangeEvent<HTMLInputElement>) => {
    const kgValue = e.target.value;
    setKg(kgValue);
    setStones((parseFloat(kgValue) * 0.15747).toFixed(2));
    setPounds((parseFloat(kgValue) * 2.20462).toFixed(2));
    setOunces((parseFloat(kgValue) * 35.274).toFixed(2));
  };

  const handleStonesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const stonesValue = e.target.value;
    setStones(stonesValue);
    setKg((parseFloat(stonesValue) / 0.15747).toFixed(2));
    setPounds((parseFloat(stonesValue) * 14).toFixed(2));
    setOunces((parseFloat(stonesValue) * 224).toFixed(2));
  };

  const handlePoundsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const poundsValue = e.target.value;
    setPounds(poundsValue);
    setKg((parseFloat(poundsValue) / 2.20462).toFixed(2));
    setStones((parseFloat(poundsValue) / 14).toFixed(2));
    setOunces((parseFloat(poundsValue) * 16).toFixed(2));
  };

  const handleOuncesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const ouncesValue = e.target.value;
    setOunces(ouncesValue);
    setKg((parseFloat(ouncesValue) / 35.274).toFixed(2));
    setStones((parseFloat(ouncesValue) / 224).toFixed(2));
    setPounds((parseFloat(ouncesValue) / 16).toFixed(2));
  };

  return (
    <div>
      <MaxWidthWrapper>
        <h1 className="text-3xl text-center mb-1">
          <span className="text-blue-600">Weight</span> Converter
        </h1>
        <div className="border-b w-[370px] mx-auto mb-10 border-zinc-300" />
        <div className="relative h-[calc(100vh-200px)] w-full p-4 gap-8">
          <div className="mb-8">
            <label>
              Kilograms (kg):
              <Input
                className="text-xl"
                type="number"
                value={kg}
                onChange={handleKgChange}
              />
            </label>
          </div>
          <div className="mb-8">
            <label>
              Stones:
              <Input
                className="text-xl"
                type="number"
                value={stones}
                onChange={handleStonesChange}
              />
            </label>
          </div>
          <div className="mb-8">
            <label>
              Pounds (lbs):
              <Input
                className="text-xl"
                type="number"
                value={pounds}
                onChange={handlePoundsChange}
              />
            </label>
          </div>
          <div className="mb-8">
            <label>
              Ounces (oz):
              <Input
                className="text-xl"
                type="number"
                value={ounces}
                onChange={handleOuncesChange}
              />
            </label>
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
