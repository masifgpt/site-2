import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MobileShowcase from "@/components/MobileShowcase";
import FeatureHighlight from "@/components/FeatureHighlight";
import PricingShowcase from "@/components/PricingShowcase"; // <--- Add this
import BlogShowcase from "@/components/BlogShowcase";
import DemoSection from "@/components/DemoSection";

export default function Home() {
  return (
    <main className="bg-[#05050a] min-h-screen text-white">
      <Navbar />
      <Hero />
      <MobileShowcase />
      <FeatureHighlight />
      <PricingShowcase /> {/* <--- Isse yahan lagayein */}
      <BlogShowcase />
      <DemoSection />
    </main>
  );
}