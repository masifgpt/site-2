import BlogShowcase from "@/components/BlogShowcase";

export default function Resources() {
  return (
    <main className="bg-[#05050a] min-h-screen pt-20">
        <div className="text-center pt-20">
          <h1 className="text-5xl font-bold text-white">Resource Center</h1>
          <p className="text-gray-400 mt-4">Guides, tutorials, and articles.</p>
       </div>
       <BlogShowcase />
    </main>
  );
}