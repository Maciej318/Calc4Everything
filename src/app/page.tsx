import CalcCards from "@/components/CalcCards";
import Feedback from "@/components/Feedback";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
   <div className="bg-slate-50">
      <section className="mb-[100px]">
        <MaxWidthWrapper>
          <div>
            <h1 className="text-3xl text-center mb-1">List of our calculators</h1>
            <div className="border-b w-[370px] mx-auto mb-6 border-zinc-300"/>
            <CalcCards/>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="mb-20">
        <MaxWidthWrapper>
          <Feedback />
        </MaxWidthWrapper>
      </section>

   </div>
  );
}
