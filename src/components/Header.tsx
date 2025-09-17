import { Button } from "@/components/ui/button";
import lighterfarmlogo from "@/assets/lighterfarm_logo.png"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-header font-outfit mt-0 md:mt-4">
      <div className="container mx-auto px-6 py-4 flex items-start justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 rounded-full flex items-center justify-center">
            <img src={lighterfarmlogo} alt="Logo" />
          </div>
          <span className="text-2xl font-semibold text-foreground">Lighter.farm</span>
        </div>

        {/* Navigation */}
        <nav className="md:flex items-center space-x-8 mt-3 md:mt-0">
          <div className="flex items-start space-x-4">
            <a
              href="#lightpaper"
              className="bg-[#F2C94C] text-black font-bold px-4 py-2 rounded-lg inline-block transition-colors hover:bg-yellow-500 hidden md:flex"
            >
              Lightpaper
            </a>

            <div className="flex flex-col space-y-4">
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F2C94C] p-2 rounded-lg inline-block transition-colors hover:bg-yellow-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                  <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
                </svg>
              </a>

              <a
                href="https://t.me/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F2C94C] p-2 rounded-lg inline-block transition-colors hover:bg-yellow-500"
              >
                <img width="25" height="25" src="https://img.icons8.com/windows/32/telegram-app.png" alt="telegram-app" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>

  );
};

export default Header;