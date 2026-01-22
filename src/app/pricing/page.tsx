import PricingShowcase from "@/components/PricingShowcase";

export default function Pricing() {
  return (
    <main className="bg-[#05050a] min-h-screen pt-20">
       <div className="text-center pt-20 pb-10">
          <h1 className="text-5xl font-bold text-white">Simple Pricing</h1>
          <p className="text-gray-400 mt-4">Start for free, scale as you grow.</p>
       </div>
       <PricingShowcase />
    </main>
  );
}