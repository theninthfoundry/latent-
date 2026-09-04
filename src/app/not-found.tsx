import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#17150F] flex flex-col justify-between px-6 sm:px-12 lg:px-20 py-12 selection:bg-[#17150F] selection:text-[#F7F6F2]">
      {/* Masthead */}
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#736F64] border-b border-[#17150F]/10 pb-4">
        <span>LATENT &bull; STUDIO</span>
        <span>INDEX // 404 &bull; VOID</span>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl my-auto py-16">
        <span className="font-mono text-xs uppercase tracking-widest text-[#736F64] block mb-4">
          Coordinates Missing // Uncharted Plane
        </span>
        <h1 className="font-serif text-5xl sm:text-7xl font-normal leading-[1.05] tracking-tight mb-8">
          The artifact you seek has dissolved into the archive.
        </h1>
        <p className="font-sans text-lg sm:text-xl text-[#736F64] max-w-xl mb-12 leading-relaxed">
          The requested path does not exist within the studio directory or was moved during our periodic spatial reorganization.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#17150F] text-[#F7F6F2] text-xs font-mono uppercase tracking-widest rounded-full hover:bg-[#17150F]/85 transition-colors"
        >
          <span>&larr; Return to Studio Index</span>
        </Link>
      </div>

      {/* Footer Reference */}
      <div className="font-mono text-[10px] uppercase tracking-widest text-[#736F64] border-t border-[#17150F]/10 pt-4 flex items-center justify-between">
        <span>LATENT Autonomous Digital Studio &copy; 2026</span>
        <span>Status: Nominal</span>
      </div>
    </div>
  );
}
