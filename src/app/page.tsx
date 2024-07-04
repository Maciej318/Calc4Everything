import CalcCards from "@/components/CalcCards";
import Feedback from "@/components/Feedback";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <div className="bg-slate-50 w-full mx-auto">
      <section className="mb-12 md:mb-24">
        <MaxWidthWrapper>
          <div className="px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-3xl text-center mb-2">List of our calculators</h1>
            <div className="border-b mx-auto mb-6 w-full max-w-xs sm:max-w-md border-zinc-300"/>
            <CalcCards />
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="mb-12 md:mb-20">
        <MaxWidthWrapper>
          <div className="px-4 sm:px-6 lg:px-8">
            <Feedback />
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
