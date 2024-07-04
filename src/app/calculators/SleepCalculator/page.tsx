"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState, ChangeEvent } from "react";

const Page = () => {
  const [wakeUpTime, setWakeUpTime] = useState<string>("");
  const [sleepCycles, setSleepCycles] = useState<number>(5);
  const [bedTime, setBedTime] = useState<string>("");

  const handleWakeUpTimeChange = (e: ChangeEvent<HTMLInputElement>) => setWakeUpTime(e.target.value);
  const handleSleepCyclesChange = (e: ChangeEvent<HTMLInputElement>) => setSleepCycles(Number(e.target.value));

  const handleCalculateBedTime = () => {
    const wakeUpDate = new Date(`1970-01-01T${wakeUpTime}:00`);
    const sleepCycleMinutes = 90;
    const totalSleepMinutes = sleepCycleMinutes * sleepCycles;

    wakeUpDate.setMinutes(wakeUpDate.getMinutes() - totalSleepMinutes);
    setBedTime(wakeUpDate.toTimeString().slice(0, 5));
  };

  return (
    <div>
      <MaxWidthWrapper>
        <h1 className="text-3xl text-center mb-1">
          <span className="text-blue-600">Sleep</span> Calculator
        </h1>
        <div className="border-b w-[370px] mx-auto mb-10 border-zinc-300" />
        <div className="relative h-[calc(100vh-200px)] w-full p-4 gap-8">
          <label>Wake Up Time</label>
          <Input
            type="time"
            className="w-[500px] mb-10"
            value={wakeUpTime}
            onChange={handleWakeUpTimeChange}
            min="1"
          />
          <label>Sleep Cycles (90 mins each)</label>
          <Input
            className="w-[500px]"
            type="number"
            value={sleepCycles}
            onChange={handleSleepCyclesChange}
            min="1"
          />
          <Button className="my-10" onClick={handleCalculateBedTime}>Calculate Bed Time</Button>
          
          {bedTime && <p>You should go to bed at: <span className="font-bold text-blue-600">{bedTime}</span></p>}
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