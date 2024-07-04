import { Check, Star } from "lucide-react";

const Feedback = () => {
  return (
    <div className="bg-slate-200 w-full p-10 rounded-sm">
      <h1 className="text-3xl text-center mb-1">Why choose our calculators?</h1>
      <div className="border-b w-[370px] mx-auto mb-6 border-zinc-300" />

      <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center justify-center">
        <div className="space-y-2">
          <li className="flex gap-1.5 items-center text-left">
            <Check className="h-5 w-5 shrink-0 text-blue-600" />
            Many calculators to choose from
          </li>
          <li className="flex gap-1.5 items-center text-left">
            <Check className="h-5 w-5 shrink-0 text-blue-600" />
            Clean and simple to use for everyone
          </li>
          <li className="flex gap-1.5 items-center text-left">
            <Check className="h-5 w-5 shrink-0 text-blue-600" />
            Mobile friendly
          </li>
        </div>
      </ul>

      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
        <div className="flex -space-x-4">
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
            src="/users/user-1.png"
            alt="user-img"
          />
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
            src="/users/user-2.png"
            alt="user-img"
          />
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
            src="/users/user-3.png"
            alt="user-img"
          />
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
            src="/users/user-4.jpg"
            alt="user-img"
          />
          <img
            className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100"
            src="/users/user-5.jpg"
            alt="user-img"
          />
        </div>

        <div className="flex flex-col justify-between items-center sm:items-start">
          <div className="flex gap-0.5">
            <Star className="h-4 w-4 text-blue-600 fill-blue-600" />
            <Star className="h-4 w-4 text-blue-600 fill-blue-600" />
            <Star className="h-4 w-4 text-blue-600 fill-blue-600" />
            <Star className="h-4 w-4 text-blue-600 fill-blue-600" />
            <Star className="h-4 w-4 text-blue-600 fill-blue-600" />
          </div>

          <p>
            <span className="font-semibold">11.253</span> happy users
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
