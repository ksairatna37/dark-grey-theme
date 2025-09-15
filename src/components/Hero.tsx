import { Button } from "@/components/ui/button";
import { ArrowRight, Twitter, Instagram, Facebook } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-pattern">
      <div className="container mx-auto px-6 text-center relative z-10">
        
        {/* Glowing Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative animate-float">
            <div className="w-20 h-20 bg-card border border-border-subtle rounded-2xl flex items-center justify-center glow-effect animate-glow">
              <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-background rounded-full"></div>
              </div>
            </div>
            {/* Glow overlay */}
            <div className="absolute inset-0 w-20 h-20 bg-accent-blue opacity-20 rounded-2xl blur-xl"></div>
          </div>
        </div>

        {/* Badge */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border-subtle rounded-full px-4 py-2 text-sm">
            <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse"></div>
            <span className="text-foreground-muted font-medium">NEW GEN AI AUTOMATION PARTNER</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="mb-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-foreground">
            Automate Smarter.{" "}
            <span className="block">
              Grow Faster.{" "}
              <span className="font-display italic text-foreground-muted">With AI.</span>
            </span>
          </h1>
        </div>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-foreground-muted mb-12 max-w-2xl mx-auto font-light">
          AI Automation for Modern Businesses Made Simple
        </p>

        {/* CTA Button */}
        <div className="mb-16">
          <Button 
            size="lg" 
            className="bg-foreground text-background hover:bg-foreground-muted transition-all duration-300 group px-8 py-4 text-lg font-medium rounded-full"
          >
            Book A Free Call
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          <a 
            href="#" 
            className="w-12 h-12 bg-card/30 backdrop-blur-sm border border-border-subtle rounded-full flex items-center justify-center text-foreground-subtle hover:text-foreground hover:bg-hover transition-all duration-300"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="w-12 h-12 bg-card/30 backdrop-blur-sm border border-border-subtle rounded-full flex items-center justify-center text-foreground-subtle hover:text-foreground hover:bg-hover transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="w-12 h-12 bg-card/30 backdrop-blur-sm border border-border-subtle rounded-full flex items-center justify-center text-foreground-subtle hover:text-foreground hover:bg-hover transition-all duration-300"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-border-subtle rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground-subtle rounded-full mt-2 animate-pulse"></div>
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