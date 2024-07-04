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
    <div className="bg-gray-100 min-h-screen">
      <MaxWidthWrapper className="max-w-screen-md mx-auto px-4 py-8">
        <h1 className="text-3xl text-center mb-4">
          <span className="text-blue-600">Sleep</span> Calculator
        </h1>
        <div className="border-b w-full mx-auto mb-6 border-zinc-300" />

        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label className="text-gray-700">Wake Up Time</label>
            <Input
              type="time"
              value={wakeUpTime}
              onChange={handleWakeUpTimeChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              min="00:00"
              max="23:59"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700">Sleep Cycles (90 mins each)</label>
            <Input
              type="number"
              value={sleepCycles}
              onChange={handleSleepCyclesChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              min="1"
            />
          </div>

          <Button onClick={handleCalculateBedTime} className="w-full">
            Calculate Bed Time
          </Button>

          {bedTime && (
            <p className="text-center mt-4">
              You should go to bed at: <span className="font-bold text-blue-600">{bedTime}</span>
            </p>
          )}

          <Link href="/">
            <Button variant="ghost" className="mt-6 flex justify-center">
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
