"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [length, setLength] = useState<number>(8);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeSpecialChars, setIncludeSpecialChars] =
    useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const generatePassword = () => {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let allChars = lowerCaseChars + upperCaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSpecialChars) allChars += specialChars;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      generatedPassword += allChars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <MaxWidthWrapper>
      <h1 className="text-3xl text-center mb-1"><span className="text-blue-600">Password</span> Generator</h1>
      <div className="border-b w-[370px] mx-auto mb-10 border-zinc-300" />
      <div className="h-[calc(100vh-200px)] w-full p-4 gap-8 rounded-lg">
        <div className="mb-4">
          <label className="block mb-2">Password Length: {length}</label>
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />{" "}
            Include Numbers
          </label>
          <label className="block mb-2">
            <input
              type="checkbox"
              checked={includeSpecialChars}
              onChange={(e) => setIncludeSpecialChars(e.target.checked)}
            />{" "}
            Include Special Characters
          </label>
        </div>
        <Button onClick={generatePassword}>Generate Password</Button>
        {password && (
          <div className="mt-4">
            <label className="block mb-2">Generated Password:</label>
            <div className="bg-gray-100 p-2 rounded">{password}</div>
          </div>
        )}
      </div>
      <Link href="/">
        <Button variant={"ghost"} className="mb-5">
          <ArrowLeft className="h-4 w-4" />
          Back to site
        </Button>
      </Link>
    </MaxWidthWrapper>
  );
};

export default Page;
