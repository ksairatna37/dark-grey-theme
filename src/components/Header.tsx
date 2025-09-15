import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-header">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-background rounded-full"></div>
          </div>
          <span className="text-xl font-semibold text-foreground">landio</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-foreground-muted hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#process" className="text-foreground-muted hover:text-foreground transition-colors">
            Process
          </a>
          <a href="#pricing" className="text-foreground-muted hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#blog" className="text-foreground-muted hover:text-foreground transition-colors">
            Blog
          </a>
          <a href="#contact" className="text-foreground-muted hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <Button variant="outline" className="hidden md:flex">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Get Template
        </Button>
      </div>
    </header>
  );
};

export default Header;