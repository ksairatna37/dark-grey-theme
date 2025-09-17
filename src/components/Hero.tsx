import { Button } from "@/components/ui/button";
import { ArrowRight, Twitter, Instagram, Facebook } from "lucide-react";
import bgVideo2 from "@/assets/bg-vmake.mp4";
import lighter from "@/assets/lighter.png"

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-pattern">

      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none -z-20 bg-video-filter"
        src={bgVideo2}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Blur   overlay: Covers top 1/3 of the section */}
      <div className="absolute top-0 left-0 w-full h-1/2 pointer-events-none -z-10"
        style={{
          backdropFilter: 'blur(36px)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 80%, rgba(0,0,0,0) 100%)',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 80%, rgba(0,0,0,0) 100%)'
        }}>
      </div>




      <div className="container mx-auto px-6 text-center relative z-10 mt-0">
        {/* Main Headline */}
        <div className="mt-32 md:mt-0 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black leading-tight text-foreground">
            Farm. Buy. Trade.{" "}
            <span className="block">
              <span className="font-display text-5xl md:md:text-7xl lg:text-8xl">Lighter Points.</span>
            </span>
          </h1>
        </div>

        {/* Subheadline */}
        <p className="flex items-center justify-center text-xl md:text-2xl mb-4 max-w-2xl mx-auto font-medium">
          Created on top of{" "}
          <span>
            <img src={lighter} alt="Logo" className="h-12 md:h-16 mb-2" />
          </span>
        </p>

        {/* CTA Button */}
        <div className="mt-32 md:mt-32">
          <button className="relative px-6 py-2 bg-[#524026] text-white text-lg font-medium rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0px_120px_rgba(255,255,255,0.5)] group">
            <span className="relative z-10">Public Beta Soon</span>
          </button>
        </div>


        <div className="mt-4 md:hidden">
          <a
            href="#lightpaper"
            className="bg-[#F2C94C] text-black font-bold px-4 py-2 rounded-lg inline-block transition-colors hover:bg-yellow-500 "
          >
            Lightpaper
          </a>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-blue opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan opacity-5 rounded-full blur-3xl"></div>
      </div>
    </section>

  );
};

export default Hero;