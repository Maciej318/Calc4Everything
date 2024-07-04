import { Check, Star } from "lucide-react";

const Feedback = () => {
  return (
    <div className="bg-slate-200 w-full p-6 sm:p-10 rounded-sm">
      <h1 className="text-2xl sm:text-3xl text-center mb-4">Why choose our calculators?</h1>
      <div className="border-b w-full max-w-xs mx-auto mb-6 border-zinc-300" />

      <ul className="mt-6 sm:mt-8 space-y-2 text-left font-medium">
        <li className="flex items-center">
          <Check className="h-5 w-5 mr-2.5 text-blue-600" />
          Many calculators to choose from
        </li>
        <li className="flex items-center">
          <Check className="h-5 w-5 mr-2.5 text-blue-600" />
          Clean and simple to use for everyone
        </li>
        <li className="flex items-center">
          <Check className="h-5 w-5 mr-2.5 text-blue-600" />
          Mobile friendly
        </li>
      </ul>

      <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
        <div className="flex space-x-2 sm:space-x-4">
          <img
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-slate-100"
            src="/users/user-1.png"
            alt="user-img"
          />
          <img
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-slate-100"
            src="/users/user-2.png"
            alt="user-img"
          />
          <img
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-slate-100"
            src="/users/user-3.png"
            alt="user-img"
          />
          <img
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-slate-100"
            src="/users/user-4.jpg"
            alt="user-img"
          />
          <img
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-slate-100"
            src="/users/user-5.jpg"
            alt="user-img"
          />
        </div>

        <div className="mt-4 sm:mt-0 flex items-center">
          <div className="flex items-center space-x-0.5">
            <Star className="h-4 w-4 text-blue-600 fill-blue-600" />
            <Star className="h-4 w-4 text-blue-600 fill-blue-600" />
            <Star className="h-4 w-4 text-blue-600 fill-blue-600" />
            <Star className="h-4 w-4 text-blue-600 fill-blue-600" />
            <Star className="h-4 w-4 text-blue-600 fill-blue-600" />
          </div>
          <p className="ml-1">
            <span className="font-semibold">11,253</span> happy users
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
