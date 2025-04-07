import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
const Services = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/services.png"
        alt="services"
        fill
        priority
        className="object-cover z-0"
      />
      <Navbar />

      <div className="py-28 flex items-center justify-center gap-4 relative z-10">
        <Image src="/chart.png" alt="chart" width={150} height={100} />
        <h2 className="text-white text-2xl font-semibold">DATA ANALYSIS</h2>
      </div>
    </div>
  );
};

export default Services;
