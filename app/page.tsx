"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <Image
        src="/home.png"
        alt="home"
        fill
        priority
        className="object-cover -z-10"
      />

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl">
          Welcome to the Homepage
        </h1>
      </main>
    </div>
  );
}
