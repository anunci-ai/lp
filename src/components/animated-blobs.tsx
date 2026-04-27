"use client";

export function AnimatedBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Primary magenta blob — top right */}
      <div
        className="animate-blob-1 absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(75,83,248,0.6) 0%, rgba(15,49,148,0.3) 60%, transparent 100%)",
          filter: "blur(80px)",
        }}
      />
      {/* Secondary coral blob — top left */}
      <div
        className="animate-blob-2 absolute -top-20 -left-40 w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(15,49,148,0.5) 0%, rgba(75,83,248,0.2) 70%, transparent 100%)",
          filter: "blur(70px)",
        }}
      />
      {/* Deep violet blob — bottom center */}
      <div
        className="animate-blob-3 absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(ellipse, rgba(75,83,248,0.4) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}
